const http = require('http');

const app = require('./app');
const socketio = require('socket.io');


const port = 5000;

const server = http.createServer(app);


const io = socketio(server);

let users = [];
io.on('connect', (socket) => {
    console.log("socket io is started..", socket.id)
    socket.on('todoCreated', (user, callback) => {
        console.log("user1", user.user, "action", user.action, "--", user.admin)
        user.socketId = socket.id;
        users.push(user)
        let adminUser = users.find((eachUser) => { return eachUser.user == "admin" })
        console.log("adminUser", adminUser);
        if (adminUser) {
            socket.broadcast.to(adminUser.socketId).emit("todoCreated", user);
        }
    });

    socket.on('disconnect', () => {
        console.log("socketIO disconnected.", socket.id)
    })
});

server.listen(port, () => {
    console.log("server running on port", port)
});


//Mongo shell command
// mongo "mongodb+srv://portfolio-qhmju.mongodb.net/<dbname>" --username nani
