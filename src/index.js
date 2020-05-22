/* eslint-disable no-console */
import { spawn } from 'child_process';

const term = spawn('ls');

term.stdout.on('data', (data) => {
  console.log(data.toString());
});

term.stderr.on('data', (data) => {
  console.error(data.toString());
});

term.on('exit', (code) => {
  console.log(`Child exited with code ${code}`);
});
