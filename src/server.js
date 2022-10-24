//creates server for socket
const server = require('http').createServer();
const os = require('os-utils');

//sqlite dependancy and gets server 
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('/Users/josevelasco/scada-solutions/public/demo.db');


const io = require('socket.io')(server, {
  transports: ['websocket', 'polling']
});

console.log("Hello")


let tick = 0;
//listens for socket connections
//repeat interval is last function parameter set to 1000ms later, give leeway for the rtua
io.on('connection', client => {


  setInterval(() => {
    // 2. every second, emit a 'cpu' event to user
    os.cpuUsage(cpuPercent => {
      client.emit('cpu', {
        name: tick++,
        value: cpuPercent
      });

      db.run(`INSERT INTO cpu(TEMP) VALUES(?)`, [cpuPercent], function(err) {
        if (err) {
          return console.log(err.message);
        }
        // get the last insert id
      });
    });


  
  
  }, 1000);
});


//this will add the data to the corresponding tables 

//on port 1234(change dynamically??? dont want to be on port thats already used 
server.listen(1234);

