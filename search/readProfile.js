// var mp = require('mobileprovision');
import mp from 'mobileprovision';


mp('./files/20f68a94-59c6-4cf0-88cb-fc446f06dd6e.mobileprovision')
    .then(function (value) {
        console.log(value);
    })
    .catch(function (error) {
        console.log(error);
    });