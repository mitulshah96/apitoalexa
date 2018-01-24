var replace = require('replace-in-file')
var jsonfile = require('jsonfile')
var fs = require('fs')
var file = 'IntentSchema.json'
var desfile = 'abc.json'
var obj = {
    intents: []
}
const options = {
    files: 'IntentSchema.json',
    from: /"intent":/g,
    to: '"name":',
};

replace(options)
    .then(changes => {
        console.log('Modified files:', changes.join(', '));
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });

jsonfile.readFile(file, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    } else {
        for (i = 0; i < data.intents.length; i++) {

            data.intents[i].samples = [];
            //console.log(data.intents[i])

            if (data.intents[i].slots) {

                for (j = 0; j < data.intents[i].slots.length; j++) {
                    data.intents[i].slots[j].samples = [];
                    //    console.log(data.intents[i]);
                    obj.intents.push(data.intents[i])
                    //console.log(obj);


                }
                // console.log(data.intents[i])
            } else {
                data.intents[i].slots = []
                obj.intents.push(data.intents[i])
                //  console.log(obj);
                // console.log(data.intents[i])
                // fs.writeFile(file, data.intents[i], function (err) {
                //     console.error(err)
                // })
            }
        }
        jsonfile.writeFile(desfile, obj, function (err) {
            if (err) {
                return console.log(err);
            } else {
                console.log('File written successfully');
            }
        })
    }

});



