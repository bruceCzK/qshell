#! /usr/bin/env node

const os = require('os')
const path = require('path')
const arch = os.arch()
const userArgs = process.argv.slice(2)
const spawn = require('child_process').spawn
const version = require('./package.json').version
const platform = {
  win32: 'windows',
  darwin: 'darwin'
}[os.platform()] || 'linux'

const bin = path.join(__dirname, 'bin', 'qshell_' + platform + '_' + arch)

if (userArgs[0] === '-v') {
  console.log('v' + version)
}
spawn(bin, userArgs, {
  stdio: 'inherit'
})
