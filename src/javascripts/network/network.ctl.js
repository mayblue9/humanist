

var Controller = require('radio.controller');
var Network = require('./network.view');


module.exports = Controller.extend({


  radio: {

    network: {
      events: [
        'highlight',
        'unhighlight'
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
   * @param {String} cid
   */
  unhighlight: function(cid) {
    if (cid != this.view.cid) {
      this.view.unhighlight();
    }
  },


});