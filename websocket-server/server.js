const io = require('socket.io')();

io.on('connection', (client) => {
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    });


    client.on('client-event', (jsonObject,t) => {
        console.log(jsonObject,t);
    });
});

const port = 8000;
io.listen(port);
