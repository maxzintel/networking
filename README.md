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

#### SMTP
* Protocol used to deliver email messages.
* We can send an email from whatever@whitehouse.gov to `somename@localhost`.
* Lines that start with a number are messages from the server.
* `nc localhost 25`
* Lots in common with http. Text based protocol.
* To send some example mail via smtp locally...
  * mail from: whatever@whitehouse.gov
  * rcpt to: somename@localhost
  * Subject: Whatever.
* Check the mail by running `mail`.

#### IRC
* Another text based protocol, particularly for chat. It is ancient, but still generally popular among programmers.
* To mess with it, pick a `nick` (nickname) and hop on a open server, like `irc.freenode.net`.
  * `nc irc.freenode.net 6667`
  * `nick s1dequest`
  * `user s1dequest s1dequest irc.freenode.net :s1dequest`
  * `join #cyberwizard`
  * `privmsg #cyberwizard :hack the planet!`

* Benefits of text protocol (http, smtp, irc) implementation:
  * Data is easily inspected over the wire (wifi, ethernet).
  * Commands/request sent via keyboard.

#### Binary Protocols and Inspecting Protocols
* With binary protocols you cant just type messages with the keyboard like we've been doing. You have to write programs (decoders) that unpack the incoming bytes and pack outgoing bytes according to the specification.
* **SSH**
  * example:
    * `nc substack.net 22`
    * Here we are trying to connect via netcat over ssh.
    * If we then try to type something, like 'hello', the return will say `Protocol Mismatch`.
    * In other words, the Binary Protocols expect binary for requests, not text.
    * Using the `ssh` command essentially just lines up your commands with the binary input that ssh protocol expects.
* Inspecting Protocols:
  * Capture everything coming out of and into your wireless or ethernet card using...
    * wireshark for a graphical tool.
    * tcpdump for a command-line tool.
  * Above works for unencrypted traffic. Not encrypted stuff like ssh.
* tcpdump examples:
  * `sudo tcpdump -X` outputs all info over the wire in hexadecimal format.
  * `sudo tcpdump 'tcp port 80' -X` filters the output so we only see what is coming over the wire via HTTP. Which is unencrypted.
    * check this by then running a `curl` to some address on http.

* FAQ's for above protocols:
  * smtp - www.faqs.org/rfcs/rfc821.html
  * irc - www.faqs.org/rfcs/rfc2812.html
  * http - www.faqs.org/rfcs/rfc2616

End of Part 1!



