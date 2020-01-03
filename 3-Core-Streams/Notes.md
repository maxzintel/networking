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

#### Crypto Core Streams
* `crypto.createCipher(algo, password)` - transform stream to encrypt
* `crypto.createDecipher(algo, password)` - transform stream to decrypt
* `crypto.createCipheriv(algo, key, iv)` - transform stream to encrypt with iv
* `crypto.createDecipheriv(algo, key, iv)` - transform stream to decrypt with iv
* `crypto.createHash(algo)` - transform stream to output cryptographic hash
* `crypto.createHMAC(algo, key)` - transform stream to output HMAC digest
* `crypto.createSign(algo)` - writable stream to sign messages
* `crypto.createVerify(algo)` - writable stream to verify signatures

#### Zlib Core Streams
* `zlib.createGzip(opts)` - transform stream to compress with gzip
* `zlib.createGunzip(opts)` - transform stream to uncompress with gzip
* `zlib.createDeflate(opts)` - transform stream to compress with deflate
* `zlib.createDeflateRaw(opts)` - transform stream to compress with raw deflate
* `zlib.createInflate(opts)` - transform stream to uncompress with deflate
* `zlib.createInflateRaw(opts)` - transform stream to uncompress with deflate raw
* `zlib.createUnzip(opts)` - transform stream to uncompress gzip and deflate

#### split2
* split input on newlines.
* This program (example 5) counts the number of lines of input, like `wc -l`.
