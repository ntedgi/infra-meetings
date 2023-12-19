const logger = require('./logger')

logger.log("Hello from service")

module.exports = { 
    action:(str)=>{
        logger.log(str)
    }

}