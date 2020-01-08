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
