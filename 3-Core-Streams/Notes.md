### Core Streams in Node
* Many of the API's in node core provide stream interfaces.
  * `fs.createReadStream()`
  * `fs.createWriteStream()`
  * `process.stdin`, `process.stderr`
  * `ps.stdin`, `ps.stdout`, `ps.stderr`
  * `net.connect()`, `tls.connect()`
  * `net.createServer((stream) => {})`
  * `tls.createServer(opts, (stream) => {})`
