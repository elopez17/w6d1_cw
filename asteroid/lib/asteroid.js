const MovingObject = require('./moving_object.js');
const Util = require('./util.js');

const DEFAULTS = {
  COLOR: "#00ffff",
  RADIUS: 25,
  SPEED: 4
};

function Asteroid(options){
  options = options || {};
  options.color = DEFAULTS.COLOR;
  options.pos = options.pos || [50, 50]; //options.game.randomPosition();
  options.radius = DEFAULTS.RADIUS;
  options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
  MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;