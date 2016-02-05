# ES6 Test

Simplest possible version of an ES2015 project using relative imports to test behaviour of
`babel-cli`, `npm install -g .` and `npm publish`.

## Issues

Running `npm install -g .` throws an error:

    $ npm install -g .
    
    > es6-test@0.0.1 prepublish /Users/me/dev/es6-test
    > npm run build
    
    
    > es6-test@0.0.1 build /Users/me/dev/es6-test
    > babel --out-dir es5/ src/
    
    src/bin/app.js -> es5/bin/app.js
    src/core/location.js -> es5/core/location.js
    npm ERR! Darwin 14.5.0
    npm ERR! argv "/usr/local/Cellar/node/5.4.0/bin/node" "/usr/local/bin/npm" "install" "-g" "."
    npm ERR! node v5.4.0
    npm ERR! npm  v3.3.12
    npm ERR! path /usr/local/lib/node_modules/es6-test/es5/bin/app
    npm ERR! code ENOENT
    npm ERR! errno -2
    npm ERR! syscall chmod
    
    npm ERR! enoent ENOENT: no such file or directory, chmod '/usr/local/lib/node_modules/es6-test/es5/bin/app'
    npm ERR! enoent This is most likely not a problem with npm itself
    npm ERR! enoent and is related to npm not being able to find a file.
    npm ERR! enoent 
    
    npm ERR! Please include the following file with any support request:
    npm ERR!     /Users/me/dev/es6-test/npm-debug.log
