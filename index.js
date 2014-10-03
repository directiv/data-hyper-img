/**
 * Module dependencies
 */

hyperImg.requires = ['store-hyper'];

/**
 * Expose the 'hyper-img' directive
 */

module.exports = hyperImg;

/**
 * Initialize the 'hyper-img' directive
 *
 * @param {StoreHyper} store
 */

function hyperImg(store) {
  this.compile = function(input) {
    var path = input.split('.');
    return {
      path: input,
      target: path[path.length - 1]
    };
  };

  this.state = function(config, state) {
    var res = store.get(config.path, state);
    if (!res.completed) return false;
    return state.set(config.target, res.value);
  };

  this.props = function(config, state, props) {
    var image = state.get(config.target);
    if (!image || !image.src) return props;
    if (image.title) props = props.set('title', image.title);
    return props.set('src', image.src);
  };
}
