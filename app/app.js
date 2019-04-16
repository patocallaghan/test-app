import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations';

Sentry.init({
  dsn: 'https://55355f98e0f44f938db0c8f7db18a72b@sentry.io/1439963',
  integrations: [new Integrations.Ember()]
});

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
