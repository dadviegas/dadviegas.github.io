import log from './log'

const logCall = log(console.log)
const systemLog = logCall('node')

systemLog('test11')

console.log(__environment__.settings)
console.log(__environment__.debug)
