//https://gist.github.com/darkoverlordofdata/6e47a05207a083a5923f

// Generated by CoffeeScript 1.9.1

// Stats: https://github.com/mrdoob/stats.js
// Phaser 2.2.1 - avg 49 FPS
// Phaser 2.1.3 - avg 59 FPS
/*
 * Boot the game
 */

(function() {
  var Asteroids,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  (function() {

    /*
     * when the doc loads
     */
    return window.addEventListener('load', function() {

      /*
       * perf, mon
       */
      var container, height, stats, width, x, y;
      stats = new Stats();
      container = document.createElement('div');
      document.body.appendChild(container);
      container.appendChild(stats.domElement);
      stats.domElement.style.position = 'absolute';
      x = 0;
      y = 0;
      stats.setMode(0);
      stats.domElement.style.position = "absolute";
      stats.domElement.style.left = x + "px";
      stats.domElement.style.top = y + "px";
      document.body.appendChild(stats.domElement);

      /*
       * start the game
       */
      width = window.innerWidth * window.devicePixelRatio;
      height = window.innerHeight * window.devicePixelRatio;
      window.game = new Phaser.Game(width, height, Phaser.CANVAS, '', new Asteroids(width, height, stats));
    });
  })();

  Asteroids = (function() {
    function Asteroids(width1, height1, stats1) {
      this.width = width1;
      this.height = height1;
      this.stats = stats1;
      this.update = bind(this.update, this);
    }

    Asteroids.prototype.init = function() {
      game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
    };

    Asteroids.prototype.preload = function() {
      game.load.image('logo', 'res/logo.png');
    };

    Asteroids.prototype.create = function() {
      game.add.sprite(this.width/2, this.height/2, 'logo');
    };

    Asteroids.prototype.update = function() {
      this.stats.begin();
      this.stats.end();
    };

    return Asteroids;

  })();

}).call(this);