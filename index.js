#! /usr/bin/env node

const os = require('os');
const platform = os.platform();
const arch = os.arch();
const userArgs = process.argv.slice(2);
const execFile = require('child_process').execFile;

const bin = './bin/qshell_' + platform + '_' + (arch === 'x64' ? 'amd64' : '386');

module.exports = function (cb) {
  if (typeof cb !== 'function') {
    throw new Error('Callback is not a function');
  }
  return execFile(bin, userArgs, cb);
};