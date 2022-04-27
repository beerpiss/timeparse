<h1 align="center">timeparse.js</h1>

<p align="center">
  <a href="https://github.com/beerpiss/timeparse/actions/workflows/test.yaml">
    <img src="https://github.com/beerpiss/timeparse/actions/workflows/test.yaml/badge.svg" alt="timeparse tests">
  </a>
  <a href="https://www.npmjs.com/package/@beerpsi/timeparse">
    <img src="https://img.shields.io/npm/v/@beerpsi/timeparse" alt="npm version">
  </a>
</p>


A port of [pytimeparse](https://github.com/wroberts/pytimeparse) for JavaScript.

The single exported function `timeparse()` can parse time expressions like the following:
- `32m`
- `2h32m`
- `3d2h32m`
- `1w3d2h32m`
- `1w 3d 2h 32m`
- `1 w 3 d 2 h 32 m`
- `4:13`
- `4:13:02`
- `4:13:02.266`
- `2:04:13:02.266`
- `2 days,  4:13:02` (`uptime` format)
- `2 days,  4:13:02.266`
- `5hr34m56s`
- `5 hours, 34 minutes, 56 seconds`
- `5 hrs, 34 mins, 56 secs`
- `2 days, 5 hours, 34 minutes, 56 seconds`
- `1.2 m`
- `1.2 min`
- `1.2 mins`
- `1.2 minute`
- `1.2 minutes`
- `172 hours`
- `172 hr`
- `172 h`
- `172 hrs`
- `172 hour`
- `1.24 days`
- `5 d`
- `5 day`
- `5 days`
- `5.6 wk`
- `5.6 week`
- `5.6 weeks`

Check all the [test cases](https://github.com/beerpiss/timeparse/blob/trunk/tests/index.test.ts) 
to see all the capabilities of this function.

Just like the original `pytimeparse`, it returns the time as a number of milliseconds (integer, or floating-point
if not possible):
```js
> import { timeparse } from '@beerpsi/timeparse';
> timeparse('1.2 minutes');
72000
```

A number of milliseconds can be converted back to a date object:
```js
> import { timeparse } from '@beerpsi/timeparse';
> timeparse('1 day, 14:20:16');
138016000
> new Date(138016000); // Date object takes a number of miliseconds
1970-01-02T14:20:16.000Z
```
