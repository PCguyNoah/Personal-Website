import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

// This component is the top menu for the entire website
export default class TopBarComponent extends Component {
  tagName = 'topbar';
  router = service();
  @tracked onHome = null;
  
 
  init() {
    this._super(...arguments);
  }

  @action 
  handleContactMe() {
    this.router.transitionTo('contact-me');
    console.log('transition to contact me');
  }

  @action
  currentRoute() {
    return this.router.currentRouteName;
  }

  @action
  handleMyProjects() {
    console.log('transition to my projects');
  }

};
