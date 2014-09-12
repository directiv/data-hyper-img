/** @directiv data-stateless */

exports.requires = ['hyper-store'];

exports.exposes = [
  'data-hyper-img',
  'data-hyper-image',
  'data-src'
];

exports.compile = function(input) {
  var path = input.split('.');
  return {
    path: input,
    target: path[path.length - 1]
  };
};

exports.state = function(config, state) {
  var res = this('hyper-store').get(config.path, state.get());
  if (!res.completed) return false;
  return state.set(config.target, res.value);
};

exports.props = function(config, state, props) {
  var image = state.get(config.target);
  if (!image || !image.src) return props;
  var commit = {
    src: {$set: image.src}
  };
  if (image.title) commit.title = {
    $set: image.title
  }
  return props.set(commit);
};
