var client = require('socket.io-client');
var request = require("request");

var client_id = "client_id";
var client_secret = "client_secret";
var address = "https://app.fortune-teller.io/dota/v2"

var options = {
    method: 'POST',
    url: 'https://auth.fortune-teller.io/connect/token',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}&scope=reactive`
};

request(options, function (error, response, body) {
    if (error)
        throw new Error(error);

    var parsed = JSON.parse(body);
    var access_token = parsed.access_token;

    var socket = client(address, {
        extraHeaders: {
            Authorization: access_token
        }
    })

    console.log('Trying to connect');

    socket.on('connect', () => {
        console.log('Connected');
    })
    socket.on('match', (data) => {
        console.log(JSON.stringify(data));
    });
    socket.on('reconnect', attempt => {
        console.log(`Reconnect #${attempt}`);
    })
    socket.on('disconnect', () => {
        console.log('Disconnected');
    });
    socket.on('error', (error) => {
        console.log(error);
    });
});

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit... \n", function () {
        process.exit();
    });
