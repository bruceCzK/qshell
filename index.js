#! /usr/bin/env node

const os = require('os');
const platform = os.platform();
const arch = os.arch();
const userArgs = process.argv.slice(2);
const spawn = require('child_process').spawn;

const bin = './bin/qshell_' + platform + '_' + (arch === 'x64' ? 'amd64' : '386');

module.exports = function (cb) {
  if (typeof cb !== 'function') {
    throw new Error('Callback is not a function');
  }
  spawn(bin, userArgs, {
    cwd: os.homedir()
  }).on('exit', cb);
};
