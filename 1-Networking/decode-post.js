import http from 'http';
import parseform from '/body/any';
// A simple node http server for decoding POST body.
const server = http.createServer((req, res) => {
  console.log(req.method, req.url, req.headers)
  parseform(req, res, (err, params) => {
    console.log(params)
    res.end('ok\n')
  });
});
server.listen(5000);
