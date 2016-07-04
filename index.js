#! /usr/bin/env node
'use strict';

const os = require('os');
const platform = os.platform();
const arch = os.arch();
const spawn = require('child_process').spawn;
const execSync = require('child_process').execSync;

const bin = './bin/qshell_' + platform + '_' + (arch === 'x64' ? 'amd64' : '386');

module.exports = {
  exec: exec,
  login: login
};

function login(appId, secrect) {
  return execSync(bin, [appId, secrect], {
    cwd: os.homedir()
  });
}

function exec(command, args, cb) {
  if (typeof cb !== 'function') {
    throw new Error('Callback is not a function');
  }
  spawn(bin, [command, ...args], {
    cwd: os.homedir()
  }).on('exit', cb);
}
