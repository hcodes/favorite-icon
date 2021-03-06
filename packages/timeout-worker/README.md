⏱️ Timeout Worker
=============

[![NPM version](https://img.shields.io/npm/v/timeout-worker.svg?style=flat)](https://www.npmjs.com/package/timeout-worker)
[![NPM downloads](https://img.shields.io/npm/dm/timeout-worker.svg?style=flat)](https://www.npmjs.com/package/timeout-worker)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/timeout-worker)](https://bundlephobia.com/result?p=timeout-worker)

A worker for favicon animations without brakes. Used for inactive tabs when the browser slows down.

# Installation
`npm install timeout-worker`

# Using
```js
import { TimeoutWorker } from 'timeout-worker';

const worker = new TimeoutWorker();

const timeoutId1 = worker.setTimeout(() => {
    console.log('tick from setTimeout');
}, 500);

// ...
worker.clearTimeout(id1);

// ...

const timeoutId2 = worker.setInterval(() => {
    console.log('tick from setInterval');
}, 50);

// ...
worker.clearInterval(timeoutId1);

// ...

worker.terminate();
```

# API

## `.setTimeout(callback: () => void, delay: number)`

## `.clearTimeout(id: number)`

## `.setInterval(callback: () => void, delay: number)`

## `.clearInterval(id: number)`

# [License](./LICENSE)
MIT License
