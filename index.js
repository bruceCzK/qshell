#! /usr/bin/env node
'use strict'

const os = require('os')
const path = require('path')
const arch = os.arch()
const spawn = require('child_process').spawn
const execSync = require('child_process').execSync
const platform = {
  win32: 'windows',
  darwin: 'darwin'
}[os.platform()] || 'linux'

const bin = path.join(__dirname, 'bin', 'qshell-' + platform + '-' + arch)

module.exports = {
  exec: exec,
  login: login
}

function login(appId, secret) {
  return execSync(bin, [appId, secret])
}

function exec(command, args, cb) {
  if (typeof cb !== 'function') {
    throw new Error('Callback is not a function')
  }
  spawn(bin, [command, ...args]).on('exit', cb)
}
