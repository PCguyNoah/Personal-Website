import Component from '@ember/component';
import { inject as service } from '@ember/service';

// This component is the top menu for the entire website
export default Component.extend({
  tagName: 'topbar',
  router: service(),

  actions: {
    handleHome() {
      this.router.transitionTo('home');
    },
    handleAboutMe() {
      this.router.transitionTo('about-me');
    },
    handleContactMe() {
      console.log('transition to contact me');
    },
    handleMyProjects() {
      console.log('transition to my projects');
    },
  },
});
