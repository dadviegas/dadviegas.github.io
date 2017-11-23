import { use, setting } from 'mblock-webpack'

use(
  setting({}, () => {
    const rules = [
      {
        test: /\.(gif|png|jpg|jpeg\ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: 'file-loader'
      }
    ]

    return {
      module: {
        rules
      }
    }
  })
)




