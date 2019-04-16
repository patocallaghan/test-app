import Route from '@ember/routing/route';

export default Route.extend({
  afterModel() {
    throw Error('Random error');
  }
});
