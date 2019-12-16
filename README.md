# Networking Streams
### Table of Contents:
* Networking, Servers, and Clients
* Streams
* Stream Types
* Core Streams
* Websocket
* Stream Modules
* Remote Procedure Call and Multiplex

Lost a commit somewhere on my local machine...
Will fill in the gaps ASAP.

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
