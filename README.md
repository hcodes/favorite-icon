Favorite Icon
=============

[![NPM version](https://img.shields.io/npm/v/favorite-icon.svg?style=flat)](https://www.npmjs.com/package/favorite-icon)
[![NPM downloads](https://img.shields.io/npm/dm/favorite-icon.svg?style=flat)](https://www.npmjs.com/package/favorite-icon)
[![Build Status](https://img.shields.io/travis/hcodes/favorite-icon.svg?style=flat)](https://travis-ci.org/hcodes/favorite-icon)
[![Coverage Status](https://img.shields.io/coveralls/hcodes/favorite-icon.svg?style=flat)](https://coveralls.io/r/hcodes/favorite-icon)
[![Dependency Status](https://img.shields.io/david/hcodes/favorite-icon.svg?style=flat)](https://david-dm.org/hcodes/favorite-icon)

A small library for manipulating the favicon, in particular adding alert bubbles and changing images.

# Using
`npm install favorite-icon`


# API

## Favicon

### `Favicon.set(src: string | HTMLCanvasElement)`
Set the favicon to your own image.

```js
Favicon.set('./image.png');
// or
Favicon.set('data:image/png;base64,...');
// or
const canvas = document.createElement('canvas');
//...
Favicon.set(canvas);
```

### `Favicon.reset()`
Reset the favicon.

## FaviconBadge

### `FaviconBadge.set(count: number)`
Set the favicon with the badge.

### `FaviconBadge.reset()`
Reset the favicon.

```js
    const badge = new FaviconBadge({
        fontFamily: 'Helvetica',
        color: '#f0f0f0',
        backgroundColor: '#0f0'
    });
    badge.set(count);
```

## FaviconVideo

### `FaviconVideo.start()`
Starts tracking the video and changes the favicon.

### `FaviconVideo.stop()`
Stop tracking the video and changes the favicon.

### `FaviconVideo.destroy`

```js
const favVideo = new FaviconVideo({
    video: document.querySelector('video')
})

favVideo.start();
```


## FaviconEmoji

### `FaviconEmoji.set(symbol: string)`
Set the favicon to your own emoji.

### `FaviconEmoji.reset()`
Reset the favicon.

```js
FaviconEmoji.set('❤️');
```

# [License](./LICENSE)
MIT License