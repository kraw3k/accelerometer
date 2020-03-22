## Accelerometer app

Simple app using React, WebSockets and Node.js with Express.

The idea is to interact between two (or more) devices.

App uses accelerometer in one device (e.g. in smartphone) to display some data on the other device.
In this case user can change color on page by rotating device.

## Live

https://kraw3k.github.io/accelerometer

## Running app

There is a bug in [react-accelerometer](https://www.npmjs.com/package/react-accelerometer) library - PropTypes are not imported.

`$ npm install` then: 

Open **node_modules\react-accelerometer\dist\react-accelerometer.module.js**
Add:
```javascript
import PropTypes from 'prop-types'
```
Change:
```javascript
ReactAccelerometer.propTypes = {
  children: React.PropTypes.func.isRequired,
  multiplier: React.PropTypes.number,
  useGravity: React.PropTypes.bool
}
```
To:
```javascript
ReactAccelerometer.propTypes = {
  children: PropTypes.func.isRequired,
  multiplier: PropTypes.number,
  useGravity: PropTypes.bool
};
```
Run app `$ npm start`
