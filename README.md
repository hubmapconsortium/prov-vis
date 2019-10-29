# prov-vis
HuBMAP-specific wrapper for [4dn-dcic/react-workflow-viz](https://github.com/4dn-dcic/react-workflow-viz)

## Development

This repo is bootstrapped with [NWB](https://github.com/insin/nwb/blob/master/docs/guides/ReactComponents.md).

To use the live live React demo:
```
npm start
```
and then visit `http://localhost:3000/`.

To demo the UMD package, first build, then start a static file server:
```
npm run build
npm install http-server -g
http-server
```
and then visit `http://localhost:8080/umd-demo.html`.

(Both demos use the default export from `tests/fixtures.js` as their input:
Tweak that setting to see how different structures are rendered.)

## Publish

Make a release branch, and run:
```
./test.sh
./publish.sh
```
That will run the tests, bump the version, publish to NPM, and push to GitHub.
