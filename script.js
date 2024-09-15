const moment = require('moment')

function getDate(){
    console.log(moment().subtract(10, 'days').calendar(), moment().format('LTS'))  
}


getDate()
