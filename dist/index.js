"use strict";/* eslint-disable no-console */
var _child_process = require('child_process');

const term = _child_process.spawn.call(void 0, 'ls');

term.stdout.on('data', (data) => {
  console.log(data.toString());
});

term.stderr.on('data', (data) => {
  console.error(data.toString());
});

term.on('exit', (code) => {
  console.log(`Child exited with code ${code}`);
});
