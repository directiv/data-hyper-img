module.exports = {
  tag: 'div',
  state: {
    account: {
      href: '/users/123'
    },
    image: {
      src: 'http://example.com/image.png',
      href: undefined // TODO shouldn't have to do this
    }
  },
  props: {
    src: 'http://example.com/image.png'
  },
  children: []
};
