const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage
const server = net.createServer((connection) => {
    connection.on("data", (data) => {
        const commands = data.toString().trim();
        // console.log(commands)
        const parts = commands.split("\r\n");
        // console.log(parts)
        const type = parts[0][0];   //check if is array, string or bulk string
        // console.log(type)
        if(type==="*"){
            parts.forEach((part) => {
                if(part==="ping"){
                    response = '+PONG\r\n';
                    connection.write(response);
                }
            });
        }
    });
});

server.listen(6379, "127.0.0.1");
