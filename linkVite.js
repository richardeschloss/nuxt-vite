#!/usr/bin/env node
const { symlinkSync } = require('fs')

const paths = [
  'assets',
  'components',
  'pages',
  'static'
]

paths.forEach((p) => {
  try {
    symlinkSync(`./vite/${p}`, p)
  } catch (err) {
    /* File exists already */
  }
})