#! /usr/bin/env node
const os = require('os')
const path = require('path')
const arch = os.arch()
const userArgs = process.argv.slice(2)
const spawnSync = require('child_process').spawnSync
const version = require('./package.json').version

const platform = {
  win32: 'windows',
  darwin: 'darwin'
}[os.platform()] || 'linux'

const bin = path.join(__dirname, 'bin', 'qshell-' + platform + '-' + arch)

if (userArgs[0] === '-v' || userArgs[0] === '--version') {
  console.log('v' + version)
}

spawnSync(bin, userArgs, {
  stdio: 'inherit',
  windowsHide: true
})
