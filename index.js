var speedTest = require('speedtest-net');
var test = speedTest({ maxTime: 5000 });

module.exports = {

    runTest: function () {

        test.on('data', data => {
        	console.log(test);    	
            return data;
        });

        test.on('error', err => {
            console.error(err);
        });

    }

}