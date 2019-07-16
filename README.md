QoooBiT
======

[![NPM](https://nodei.co/npm/qooobit.png)](https://nodei.co/npm/qooobit/)

The status light to display availability & operability in your workspace.

```js
var qooobit = require('qooobit')(YOUR_API_KEY);
qooobit.setStaticColor('001', 'QIDabc123', '255,0,0').then((message) => console.log(message));
```

### What's a QoooBit?
QoooBit stands for Quick Out of Operation Beacon, a status light to display availability & operability in your workspace.

From contact centres to manufacturing, QoooBIT can provide you with instant visibility on:

 - Employees working state
 - Manufacturing machine status
 - Meeting room availability
 - Built on a simple API, you can integrate QoooBIT into any service that’s web-powered.

### Use QoooBIT to:
 - Tell co-workers and managers that you're on a call or need help.
 - Flash a color when your website reports errors.
 - Set to a static color pending the build status of your projects.
 - Change color when your busy or in a meeting.
 - Flash when a security door is open.
 - Flash a color when an IOT device reports an abnormal spike.

Where to buy QoooBit
-------
[QoooBit Store](https://store.mbmlabs.com/collections/frontpage/products/qooobit-quick-out-of-operation-beacon?source=npm)


Install
-------

```
$ npm install qooobit
```

Supported versions
-------

This library works with node versions 6, 8 and above.

Usage
-----
- You will need your API key to use this SDK, you can find your API key in your client page at: [client.qooob.it](https://client.qooob.it)

```js
// Initialize the QoooBiT client
var qooobit = require('qooobit')(YOUR_API_KEY);
```

### Defining a color:
To set a color on QoooBiT you must pass the color variable as a comma separated string eg: 
```
var colorToSet = 'RED,GREEN,BLUE';
var colorToSet = '255,0,0'; // Red
var colorToSet = '0,255,0'; // Green
var colorToSet = '0,0,255'; // Blue
```

Bright and bold colors work better, you can make a rainbow by: 
```
var colorToSet = '255,0,0'; // Red
var colorToSet = '255,255,0'; // Yellow
var colorToSet = '0,255,0'; // Green
var colorToSet = '0,0,255'; // Blue
var colorToSet = '255,165,0'; // Orange
var colorToSet = '128,0,128'; // Purple
var colorToSet = '165,42,42'; // Brown
```

### Projects

If the QoooBIT unit is part of a project then you must pass the ProjectID, QID, Color to be able to make a request.
- Projects are used to group QoooBiT's together in places like contact centers and manufacturing shops where no single user is responsible for a unit but still needs to issue color commands to it. If you bought your QoooBiT unit yourself, you wont need a project for it.

### Static Vs Flashing

You can set your QoooBiT unit to a constant color by calling the static function. Once set the unit will remain  lluminated in that color until you issue a 0,0,0 command or assign a new color.

You can set your QoooBiT to flash a constant color by calling the flash function. Once set the unit will flash on/off once per second with the color until you issue a 0,0,0 command or assign a new color.

Static colors work great for telling people you are busy and flashing colors work great as a call to action. 

```js
var qooobit = require('qooobit')(YOUR_API_KEY);
// 001 is the project ID
// QIDabc123 is the ID of the QoooBiT unit
// 255,0,0 Red, the color to set the unit to

// Sets a static color for a unit inside a project
qooobit.setStaticColorInProject('001', 'QIDabc123', '255,0,0').then((message) => console.log(message));
// Sets a flashing color for a unit inside a project
qooobit.setFlashingColorInProject('001', 'QIDabc123', '255,0,0').then((message) => console.log(message));

// Sets a static color for a unit not inside a project
qooobit.setStaticColor('QIDabc123', '255,0,0').then((message) => console.log(message));
// Sets a flashing color for a unit not inside a project
qooobit.setFlashingColor('QIDabc123', '255,0,0').then((message) => console.log(message));
```

API
-----

API Docs are found [here](https://www.qooob.it/docs).

Methods available via this SDK
-----

- qooobit.healthcheck().then((message) => console.log(message)); 
- qooobit.getprojectlist().then((message) => console.log(message));
- qooobit.setStaticColor(QID, rgbColor).then((message) => console.log(message));
- qooobit.setStaticColorInProject(ProjectID , QID, rgbColor).then((message) => console.log(message));
- qooobit.setFlashingColor(QID, rgbColor).then((message) => console.log(message));
- qooobit.setFlashingColorInProject(ProjectID, QID, rgbColor).then((message) => console.log(message));


Credits
-------

Written by the team at MbMLabs, with the help of contributors.
Made with ❤ in Atlanta USA.

Copyright
---------

(c) MbMLabs Inc. Licensed under the MIT license.
