#! /usr/bin/env node

const os = require('os');
const platform = os.platform();
const arch = os.arch();
const userArgs = process.argv.slice(2);
const execFile = require('child_process').execFile;
const version = require('./package.json').version;

const bin = __dirname + '/bin/qshell_' + platform + '_' + (arch === 'x64' ? 'amd64' : '386');

if (userArgs[0] === '-v') {
  console.log('v' + version);
}
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
