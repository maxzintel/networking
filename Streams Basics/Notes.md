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

#### Using Node Core rather than through2:
