#### collect-stream, from2, to2
* collect-stream:
  * for putting streams into an array and performing unit tests.
  * collect a streams output into a single buffer.
  * Useful for unit testing.

* from2:
  * for ready stream with a pull function.

* to2:
  * for a writable stream with a write and flush function.

#### duplexify
* Lets you define a stream where you have to do some setup first before you can get a handle.
  * Setup (make a dir) and then write to a file in that dir.
* No need to expose an async interface.

#### pump, pumpify, end-of-stream
* pump - use to clean up streams to handle errors gracefully.
`const pump = require('pump');`
`pump(stream1,stream2,stream3,...);`
  * Error propogation in node:
    * Streams are also event emitters. If an event emitter emits and error without a listener, node will crash. Designed this way.
* pumpify - similar to `pump`, but also provides a readable and writable stream.
  * More useful for returning a stream end to end.
* end-of-stream - node module that calls a callback when a readable/writable/duplex stream has completed or failed.
