const express = require('express');
const crypto = require('crypto');

const input = "100xdevs"

const hash = crypto.createHash('sha256').update(input).digest('Hex');

console.log(hash);