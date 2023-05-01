import Route from '@ember/routing/route';
import Ember from 'ember';
import { inject as service } from '@ember/service';

export default Route.extend({
  router: service(),

  init() {
    this._super(...arguments);
  },

  activate() {
    console.log('about me');
    document.title = 'Noah Beightol | About Me';
  },

  actions: {
    handleMenuClick() {
      this.router.transitionTo('about-me');
    },
  },
});
