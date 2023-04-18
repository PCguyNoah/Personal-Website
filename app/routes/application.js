import Route from '@ember/routing/route';
import Ember from 'ember';
import { inject as service } from '@ember/service';

export default Route.extend({
  router: service(),

  init() {
    this._super(...arguments);

  },

  actions: {
    handleMenuClick() {
      console.log('trying to transistion');
      this.router.transitionTo('about-me');
    },
  },
});
