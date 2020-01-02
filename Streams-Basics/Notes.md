### Part 2: Networking Streams Basics
**Streams: Node.js interface for shuffling data around**
Ex: Compression, transformations for data pipelines.
Via a quote from 1964, think of it as connecting programs as you would lengthen a garden hose - by screwing in another segment. For our uses, the new segment is essentially a another method by which we massage data.

#### Introduction:
* How do they operate on data?
  * Chunk by chunk
* Pipe data abstractions (the aforementioned massages) together with streams using `.pipe()`
  * Code example:
`fs.createReadStream('mobydick.txt.gz')`
  `.pipe(zlib.createGunzip())`
  `.pipe(replace(/\s+g, '\n'))`
  `.pipe(filter(/whale/i))`
  `.pipe(linecount(console.log))`
  * The above does the same thing as the shell script:
`<mobydick.txt.gz gunzip | sed -r '/s\s+/\n/g | grep -i whale | wc -l'`
  * (Counts the number of time the word `whale` is used in Moby Dick.
  * Another simple example is found in the file `ex1-greetzTest`.
* Test the transformations easily by changing the `fs.createReadStream('greetz.txt')` line to `process.stdin`

#### through(write, end)
* With through there are 2 params: `write`, and `end`. Both are optional.
* `function write (buf, enc, next) {}`
* `function end () {}`
* Call `next()` when youre ready for the next chunk. If you don't your stream will hang.
* Call `this.push(VALUE)` inside the callback to put VALUE into the stream's output.
* Use a `VALUE` of `null` to end the stream.
* If you don't give through any args, these are the default values for write and end:
  * `function write (buf,enc,next) {this.push(buf); next()}`
  * `function end () {this.push(null)}`
  * This means that `through()` with no args will pass everything written as input directly through to its output.

#### concat-stream
* `npm install concat-stream`
* concat-stream buffers up all the data in the stream. (ex4 & ex5).
* Can only write to a c-s, not read from one.
* All data held in memory.

### Stream Types:
* We've seen two types already (transform = through2, writable = concat-stream), but there are more.
  * readable - produces data: you can pipe FROM it.
    * `readable.pipe(A)`
  * writable - consumes data - you can pipe TO it.
    * `A.pipe(writable)`
  * transform - consumes data, producing transformed data.
    * `A.pipe(transform).pipe(B)` Basically putting it between two streams.
  * duplex - consumes data separately from producing it. Kind of like a telephone.
    * `A.pipe(duplex).pipe(A)`

#### Writable Stream Methods
* Any stream you can write to (writable, transform, duplex) has these methods:
  * `.write(buf)`
  * `.end()`
  * `.end(buf)`
  * `.on('finish', function () {})` emit finish event when complete.
  * `(...).pipe(stream)`

#### Readable Stream Methods
* `stream.pipe(...)`
* `stream.once('end', () => {})`
* In general, we won't need these (below) often:
  * `stream.read()`
  * `stream.on('readable', () => {})`
  * Let a module or `.pipe()` take care of calling those.
