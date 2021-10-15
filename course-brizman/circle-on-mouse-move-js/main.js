function createPoint(x, y) {
  return {
    x,
    y,
  };
}

function calculateDistance(a, b) {
  // a - mouse position, b -center point position
  return Math.round(Math.hypot(b.x - a.x, b.y - a.y));
}
function calculateAngleBetweenPoints(a, b) {
  // a - mouse position, b - center point position
  return Math.round(180 + Math.atan2(b.y - a.y, b.x - a.x) / Math.PI) + 100;
}

const circle = document.querySelector('.circle');
let defaultRotations = 0;
let defaultAngle = 90;

window.addEventListener('mousemove', function (e) {
  const cursorPosition = createPoint(e.pageX, e.pageY),
    centerPoint = createPoint(window.innerWidth / 2, window.innerHeight / 2);

  //Animation of Opacity
  const distance = calculateDistance(cursorPosition, centerPoint),
    distanceTransform = (distance - 100) / 200,
    opacity = Math.min(Math.max(distanceTransform, 0.01), 0.99);

  circle.style.opacity = opacity;

  // Animation of Rotation
  const angleBetweenPoints = calculateAngleBetweenPoints(
    cursorPosition,
    centerPoint
  );

  angleBetweenPoints - defaultAngle > 100
    ? (defaultRotations -= 1)
    : angleBetweenPoints - defaultAngle < -180 && (defaultRotations += 1);
  defaultAngle = angleBetweenPoints;
  const rotations = defaultRotations * 360,
    angle = defaultAngle - 90;

  circle.style.transform =
    'translate3d(0,0,0) rotate(' + (rotations + angle) + 'deg)';
});
