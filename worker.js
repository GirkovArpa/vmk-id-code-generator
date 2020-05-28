'use strict';

const keys = [];

const generateKey = function () {
  const chars = 'abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let key = 'VMK-';
  for (let i = 0; i < 9; i++) {
    if (i == 4) {
      key += '-';
      continue;
    }
    key += chars[~~(Math.random() * chars.length)];
  }
  return key;
}

const generateKeys = function () {
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      let key = generateKey();
      keys.push(key);
    }
    console.log(`${i + 1}%`);
  }
}

generateKeys();

postMessage(keys);