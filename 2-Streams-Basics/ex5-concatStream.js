const concat = require('concat-stream');
const http = require('http');
const qs = require('querystring');
const through = require('through2');

const server = http.createServer((req, res) => {
  req
    .pipe(counter())
    .pipe(concat({ encoding: 'string' }, onbody))

  function counter () {
    var size = 0
    return through((buf,enc,next) => {
      size += buf.length // every time we get a buffer we need to increase the size by the buffer length.
      if (size > 20) next(null,null) // if size is > 20 bytes, end the stream prematurely.
      else next(null, buf)
    })
  }
  function onbody (body) { // req object we get is a readable stream.
    // encoding of string just saves us having to add toString to the body itself.
    var params = qs.parse(body)
    console.log(params)
    res.end('ok\n')
  }
});
server.listen(5000);

// to test, run `curl -d msg=hello localhost:5000`
// above should return msg as object.
// If we send a message with > 20 bytes, output should just be an empty object.
