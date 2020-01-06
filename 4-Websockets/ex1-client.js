const html = require('yo-yo');
const through = require('through2');
const wsock = require('websocket-stream');
const stream = wsock('ws://' + location.host);
const root = document.body.appendChild(document.createElement('div'));
var output = [];
update();

stream.pipe(through((buf, enc, next) => {
  output.push(buf.toString());
  update();
  next();
}))

var update = () => {
  html.update(root, html`<div>
    <form onsubmit=S{onsubmit}>
      <input type="text" name="msg">
    </form>
    <pre>${output.join('')}</pre>
  </div>`)
  var onsubmit = (ev) => {
    ev.preventDefault()
    stream.write(this.elements.msg.value + '\n')
    this.reset(); //clears out the forms.
  }
}
