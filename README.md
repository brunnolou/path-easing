# Path easing

Tween a given `t` value based on a bezier curve specified in SVG path data format.

### How to use
```js
import pathEasing from 'path-easing';

const extremeInOutEasing = pathEasing('M0,100 C40,100 50,90 50,50 C50,10 60,3 100,0', { samples: 200 });
```

### Options {
* `sampleCount: ` default: 300

  The number of samples to generate. The larger the
  number the more accurate the easing, at the expense
  of initialization time.
* `height: ` default: 100

  The height of the assumed viewBox.
* `width: ` default: 100

  The width of the assumed viewBox.
### }

### Sample SVG curve
Edit on Sketch / Illustrator the copy the path: `d="[path]"`.

<img width="100" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4NCiAgPHBhdGggZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiM5Nzk3OTciIGQ9Ik0wIDEwMGM3LjIzNDExOTIzIDAgMTIuMjg4NjIzMS02LjI3ODA5MTggMTYuNjkyMzEzOC0xNi43MzY3MDMgMTAuNTY3NTg5OS0yNS4wOTc2NTYyIDI1LjM0MzEyNjEgMTQuMTc4MTcxNyAyOS45NDU5NDM4IDYuODUyNzA2OEM1MC40MTM2OTk3IDg0LjEwNzMyMTYgNTAgNTQuNzY3NzgwNyA1MCA1MGMwLTQuNzY3NzgwNyAwLTE3LjE2ODcwNjIgMy41ODU4NjgyLTI2LjIwNjcxMjZDNTguNjMwODM2MyAxMS4wNzc2OTA0IDcwLjc3MzU4NDYgMCAxMDAgMCIvPg0KPC9zdmc+">

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M0 100c7.23411923 0 12.2886231-6.2780918 16.6923138-16.736703 10.5675899-25.0976562 25.3431261 14.1781717 29.9459438 6.8527068C50.4136997 84.1073216 50 54.7677807 50 50c0-4.7677807 0-17.1687062 3.5858682-26.2067126C58.6308363 11.0776904 70.7735846 0 100 0"/>
</svg>
```

Credits to: **Tim Lucas** https://codepen.io/toolmantim/pen/bpgXaM

Inspired by Oleg Solomka’s work on http://mojs.io/
