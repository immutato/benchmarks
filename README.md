# immutato benchmarks

Benchmarks for immutato lib.

They compare performances of [immutato](https://www.parro.it/immutato), [immutato with type checking](https://www.parro.it/immutato), [Immutable](http://facebook.github.io/immutable-js/), [Ancient Oak](https://github.com/brainshave/ancient-oak) and plain old JavaScript objects (using Object.freeze)

You can run the benchmarks in your browser at this page:
http://www.parro.it/immutato/benchmarks.html

Results running on node.js v0.10.32 on my development machine:

'''
Starting 'bench'...

Running suite current vs prev version vs pojo -- create a copy of immutable object with changed property

   current version x 625,326 ops/sec ±22.31% (68 runs sampled)
   immutable.js x 551,539 ops/sec ±0.21% (97 runs sampled)
   ancient-oak x 7,114 ops/sec ±2.91% (79 runs sampled)
   previous version x 35,230 ops/sec ±3.53% (86 runs sampled)
   pojo x 80,091 ops/sec ±2.51% (95 runs sampled)

Fastest test is immutable.js at 0.88x faster than current version


Running suite current vs prev version vs pojo -- immutable object creation 

   current version x 184,180 ops/sec ±2.67% (95 runs sampled)
   previous version x 2,847 ops/sec ±0.14% (100 runs sampled)
   ancient-oak x 60.35 ops/sec ±4.25% (65 runs sampled)
   immutable.js x 13,942 ops/sec ±0.20% (103 runs sampled)
   pojo x 106,396 ops/sec ±3.17% (94 runs sampled)

Fastest test is current version at 1.73x faster than pojo


Running suite current vs prev version vs pojo -- change properties multiple times 

   current version x 656,508 ops/sec ±22.55% (61 runs sampled)
   ancient-oak x 6,879 ops/sec ±3.91% (78 runs sampled)
   immutable.js x 535,560 ops/sec ±1.76% (96 runs sampled)
   previous version x 2,663 ops/sec ±60.93% (12 runs sampled)
   pojo x 3,840 ops/sec ±1.81% (100 runs sampled)

Fastest test is current version at 1.23x faster than immutable.js


Running suite current vs prev version vs pojo -- read property after multiple changes 

   current version x 17,564,260 ops/sec ±2.00% (89 runs sampled)
   immutable.js x 7,541,399 ops/sec ±1.21% (93 runs sampled)
   ancient-oak x 1,108,604 ops/sec ±0.58% (94 runs sampled)
   previous version x 32,832 ops/sec ±0.68% (100 runs sampled)
   pojo x 24,671,710 ops/sec ±3.44% (77 runs sampled)

Fastest test is pojo at 1.40x faster than current version


Finished 'bench' after 3.37 min
'''

To run the tests yourself in node, clone this repo, run `npm install` and then
`gulp bench`


##Status:



## License
[MIT](http://opensource.org/licenses/MIT) © 2014, Andrea Parodi
