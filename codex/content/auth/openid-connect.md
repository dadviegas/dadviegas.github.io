# OpenID Connect and Identity

OpenID Connect (OIDC) is an identity layer on top of OAuth 2.0. While OAuth 2.0 answers "what can this app access?", OIDC answers "who is this user?". It standardises how user identity is expressed as an ID token — a signed JWT containing profile claims.

## ID token vs access token

```ts
// ID token payload — about the user, for the client
{
  iss: 'https://auth.example.com',
  sub: 'user_abc123',              // stable unique identifier
  aud: 'client_id_xyz',           // must match your client_id
  exp: 1714000000,
  iat: 1713996400,
  email: 'ada@example.com',
  name: 'Ada Lovelace',
  picture: 'https://cdn.example.com/avatar.jpg',
  email_verified: true,
}

// Access token — opaque to the client (use it, don't parse it)
// Only the Resource Server needs to verify it
```

The ID token is **for your app** — parse it to show the user's name and avatar. The access token is **for APIs** — pass it in `Authorization: Bearer`, never inspect its payload.

## OIDC discovery

Compliant OIDC providers expose a discovery document at `/.well-known/openid-configuration`:

```ts
const discovery = await fetch('https://accounts.google.com/.well-known/openid-configuration').then(r => r.json());

// Key fields:
// discovery.authorization_endpoint — where to redirect for login
// discovery.token_endpoint         — where to exchange code for tokens
// discovery.jwks_uri               — public keys to verify ID tokens
// discovery.userinfo_endpoint      — endpoint to fetch additional claims
```

Use the JWKS URI to fetch the provider's public keys and verify the ID token signature:

```ts
import { jwtVerify, createRemoteJWKSet } from 'jose';

const JWKS = createRemoteJWKSet(new URL(discovery.jwks_uri));

async function verifyIdToken(idToken: string) {
  const { payload } = await jwtVerify(idToken, JWKS, {
    issuer: 'https://accounts.google.com',
    audience: process.env.CLIENT_ID,
  });
  return payload;  // typed as JWTPayload
}
```

## Nonce — replay attack defence

Add a `nonce` to the authorization request; the OIDC provider echoes it in the ID token. Verify the nonce on receipt to ensure the token was issued for this specific login attempt:

```ts
const nonce = crypto.randomUUID();
sessionStorage.setItem('oidc_nonce', nonce);

// Include in authorization URL:
params.set('nonce', nonce);

// On callback, after verifying ID token:
const storedNonce = sessionStorage.getItem('oidc_nonce');
if (payload.nonce !== storedNonce) throw new Error('Invalid nonce');
sessionStorage.removeItem('oidc_nonce');
```

## UserInfo endpoint

When you need claims beyond what's in the ID token (because the provider limits token size), fetch from the UserInfo endpoint using the access token:

```ts
const userInfo = await fetch(discovery.userinfo_endpoint, {
  headers: { Authorization: `Bearer ${accessToken}` },
}).then(r => r.json());
```

## Common providers

| Provider | Discovery URL |
|----------|--------------|
| Google | `https://accounts.google.com/.well-known/openid-configuration` |
| Microsoft Entra | `https://login.microsoftonline.com/{tenant}/v2.0/.well-known/openid-configuration` |
| Supabase | `https://<project>.supabase.co/.well-known/openid-configuration` |
| Auth0 | `https://<domain>/.well-known/openid-configuration` |

## Related

- See also: [Auth → OAuth 2.0 and PKCE](#/codex/auth-oauth-2-and-pkce) for the underlying authorization flow.
- See also: [Auth → JWT and Sessions](#/codex/auth-jwt-and-sessions) for token storage and refresh strategies.

## Sources

- [OpenID Connect spec](https://openid.net/specs/openid-connect-core-1_0.html)
- [auth0 — OpenID Connect](https://auth0.com/docs/authenticate/protocols/openid-connect-protocol)
- [Google — OpenID Connect](https://developers.google.com/identity/openid-connect/openid-connect)
- [jose library](https://github.com/panva/jose)
