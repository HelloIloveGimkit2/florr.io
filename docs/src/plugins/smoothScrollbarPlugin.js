module.exports = function () {
    return {
      name: 'smooth-scrollbar-plugin',
      getClientModules() {
        return [require.resolve('../smoothScrollbar')];
      },
      onRouteDidUpdate() {
        require('../smoothScrollbar').default();
      },
    };
  };
  