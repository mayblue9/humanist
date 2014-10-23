

var Controller = require('radio.controller');
var Network = require('./network.view');


module.exports = Controller.extend({


  radio: {

    network: {
      events: [
        'highlight',
        'unhighlight',
        'focus'
      ]
    }

  },


  /**
   * Start the view.
   *
   * @param {Object} options
   */
  initialize: function(options) {
    this.view = new Network(options);
    window.view = this.view;
  },


  /**
   * Render highlights.
   *
   * @param {String} label
   * @param {String} cid
   */
  highlight: function(label, cid) {
    if (cid != this.view.cid) {
      this.view.highlight(label);
    }
  },


  /**
   * Render unhighlights.
   *
   * @param {String} label
   * @param {String} cid
   */
  unhighlight: function(label, cid) {
    if (cid != this.view.cid) {
      this.view.unhighlight(label);
    }
  },


  /**
   * Apply a new focus position.
   *
   * @param {Object} focus
   * @param {Boolean} animate
   */
  focus: function(focus, animate) {
    this.view.focusOnXYZ(focus, animate);
  }


});
