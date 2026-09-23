const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  
  // 1. Change 'text/plain' to 'text/html'
  res.setHeader('Content-Type', 'text/html');
  
  // 2. Send HTML content instead of a plain string
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Node.js Server</title>
        <style>
            body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; background-color: #f4f4f9; }
            h1 { color: #333; }
            p { color: #666; font-size: 18px; }
        </style>
    </head>
    <body>
        <h1>Hello World!</h1>
        <p>This content is coming as <strong>HTML</strong> from your spring boot dev</p>
    </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
