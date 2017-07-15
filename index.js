// Tween a given t value based on a bezier curve specified
// in SVG path data format.
//
// * Use Illustrator/Sketch to create easing functions,
//   ala https://github.com/legomushroom/copy-path-coordinates
// * Use your easing curves to create delay, allowing
//   you to easily understand and coordinate multiple
//   animations by keeping their durations the same.
// * Easily combine easing curves.
//
// Options:
//
// * sampleCount - default: 300
//   The number of samples to generate. The larger the
//   number the more accurate the easing, at the expense
//   of initialization time.
// * height - default: 100
//   The height of the assumed viewBox.
// * width - default: 100
//   The width of the assumed viewBox.
//
// Inspired by Oleg Solomka’s work on http://mojs.io/

function pathEasing(pathData, options) {
  options = options || {};
  var sampleCount = (options.samples === undefined) ? 300 : options.samples;
  var height = (options.height === undefined) ? 100 : options.height;
  var width = (options.width === undefined) ? 100 : options.width;

  var path = window.document.createElementNS('http://www.w3.org/2000/svg', 'path');

  path.setAttribute('d', pathData);

  var pathLength = path.getTotalLength();

  var sampleCountPct = 1 / sampleCount;
  var xSamples = new Float64Array(sampleCount);
  var ySamples = new Float64Array(sampleCount);

  var precomputeStart = window.performance.now();

  for (var i = 0; i < sampleCount; i++) {
    var point = path.getPointAtLength(sampleCountPct * i * pathLength);
    xSamples[i] = point.x / width;
    ySamples[i] = 1 - point.y / height;
  }

  var precomputeEnd = window.performance.now();

  // Takes a value t between 0 and 1 and returns
  // the value of t eased based on the given bezier
  // path’s y value
  function tween(t) {
    // A simple search that loops over every sample
    // each time until it finds a sample for the given
    // t x value. No doubt this could be optimized.
    for (var n = 0; n < xSamples.length; n++) {
      if (xSamples[n] == t || (xSamples[n] < t && xSamples[n + 1] > t)) {
        return ySamples[n];
      }
    }

    return t;
  }

  // Expose some handy properties
  tween.path = path;
  tween.precomputeTime = precomputeEnd - precomputeStart;
  tween.sampleCount = sampleCount;

  return tween;
}

module.exports = pathEasing;
