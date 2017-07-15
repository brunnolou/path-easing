const pathEasing = require('.');

const window = require('svgdom');

window.performance = { now: Date.now };

const extremePath = 'M0,100 C40,100 50,90 50,50 C50,10 60,3 100,0';
const extremeInOutEasing = pathEasing(extremePath, { samples: 200 }, window);

test('Given 0.5 should return middle value', () => {
  expect(extremeInOutEasing(0.5)).toBe(0.49285918848047805);
});

test('Given 0.1 should return value', () => {
  expect(extremeInOutEasing(0.1)).toBe(0.0019976899246115787);
});

test('Given 0 should return 0', () => {
  expect(extremeInOutEasing(0)).toBe(0);
});

test('Given 1 should return 1', () => {
  expect(extremeInOutEasing(0)).toBe(0);
});
