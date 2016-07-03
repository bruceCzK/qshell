#! /usr/bin/env node

const os = require('os');
const platform = os.platform();
const arch = os.arch();
const userArgs = process.argv.slice(2);
const execFile = require('child_process').execFile;

const bin = './bin/qshell_' + platform + '_' + (arch === 'x64' ? 'amd64' : '386');

execFile(bin, userArgs, function (err, stdout, stderr) {
  if (err) {
    throw err;
  }
  if (stdout) {
    console.log(stdout);
  }
  if (stderr) {
    console.error(stderr);
  }
});