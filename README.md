# Networking Streams
### Table of Contents:
* Networking, Servers, and Clients
* Streams
* Stream Types
* Core Streams
* Websocket
* Stream Modules
* Remote Procedure Call and Multiplex

### 1. Networking
* Any networked computer can be a server or client.
* TCP - reliable transport.
  * if a packet is not acknowledged (ACK) on the other end, it gets resent.
  * Useful for audio, video, and most everything else.
* UDP - unreliable.
  * packets sent without confirmation of reception on the other end.
  * generally used for games.
* Protocols: Languages that computers speak to eachother.
  * Network protocols:
    * HTTP (80) - browse web pages
    * HTTPS (443) - browse web pages with encryption
    * IRC (6667) - chat
    * FTP (21) - file transfer, fun fact: works similarly to how satellites communicate with earth.
    * SSL - low level secure data transfer
    * SMTP - send and receive emails
    * IMAP/POP3 - load emails from an inbox
    * SSH - remote shell over encrypted connection

#### Netcat Server and Client
* Try out netcat!
  1. `nc -lp 5000` - starts the **server** (A).
  2. Open a second terminal.
  3. `nc localhost 5000` - connects to the server from 1, making this tab the **client**. (B).
  * With these terminals open, you can send text back and forth.

#### HTTP
* Hypertext transfer protocol.
* How web servers and browsers communicate.
* Request verbs:
  1. GET - fetch a doc
  2. POST - submit a form
  3. HEAD - fetch metadata about a doc
  4. PUT - upload a file
* HEADERS
  * `key: value`, example below.
  * GET request:
  `$ nc google.com 80`
  `GET / HTTP/1.0`
  `Host: google.com` => This is the actual header.
  * Enter the above into your terminal, and you should get a bunch of information back from google.
  * POST request:
  `$ POST /form HTTP/1.1`
  `Host: localhost`
  `Content-Length: 51`
  `Content-Type: application/x-www-form-urlencoded`

  `title=whatever&date=142104443&body=beeo%20boop%21`
  * Using the sample server in `~/Networking/decode-post.js`, we can test the post by running...
    1. `node decode-post.js` - Starts the server, listening on 5000.
    2. In another tab, `nc localhost 5000 < post.txt`
    * The output accurately states we get a POST request to /form, contains the request header object, and the body object.

#### CURL
* An alternative to the netcat stuff from above. More concise for HTTP requests.
  * ex: `curl -s http://substack.net` => `-s` is for removing progress output.
  * Issues a GET request to substack and prints the body to stdout by default.
  * To see headers, add the option `-I`. Useful for debugging and http server.
* Issue a POST with curl:
  * Use `-X` to set the http verb to POST and `-d` to set form parameters.
`$ curl -X POST http://localhost:5000 -d title=whatever \`
`-d date=142104443 -d body='beep boop!'`



