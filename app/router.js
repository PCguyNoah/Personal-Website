import EmberRouter from '@ember/routing/router';
import config from 'personal-website/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about-me');
  this.route('not-found', { path: '/*path' });
  this.route('contact-me');
  this.route('home');
});
