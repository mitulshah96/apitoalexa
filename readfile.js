var jsonfile = require('jsonfile');
var fs = require('fs');
fs.readFile('IntentSchema.json', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    } else {
        for (i = 0; i < data.intents.length; i++) {

            console.log(data.intents[i]);
        }
    }

});