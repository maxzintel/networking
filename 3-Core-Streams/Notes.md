### Core Streams in Node
* Many of the API's in node core provide stream interfaces.
  * `fs.createReadStream()`
  * `fs.createWriteStream()`
  * `process.stdin`, `process.stderr`
  * `ps.stdin`, `ps.stdout`, `ps.stderr`
  * `net.connect()`, `tls.connect()`
  * `net.createServer((stream) => {})`
  * `tls.createServer(opts, (stream) => {})`

#### HTTP Core Streams
* `req: readable, res: writable`
  * request = pipe FROM it to somewhere else (readable)
  * response = pipe TO that stream, or pipe something into that stream.
  * `http.createServer((req, res) => {})`
* `req: writable, res: readable`
  * request = you are the client, and you are sending date (POST body, etc...)
  * response = response from the server (readable)
  * `const req = http.request(opts, (res) => {})`
