const moment = require('moment');

function formatMessage(username, text) {

    return{
        username,
        text,
        time: moment.utc().format('h:mm a').unix()
    }

}
 module.exports = formatMessage;
