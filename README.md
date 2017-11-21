Check lerna.json for ``hoist:true``

```sh
npm install
lerna bootstrap
```

Open ``packages/package_1/`` in editor, run wallaby.

Result:
```
[Error] ​​Error: babel, babel-core or @babel/core must be installed locally or babel instance must be passed in opts.babel, for example `wallaby.compilers.babel({ babel: require('babel') })`​​
```
