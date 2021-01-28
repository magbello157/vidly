import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

function init() {
  Sentry.init({
    dsn:
      'https://31026e99d70f41e4b5b93fdc387236ca@o499056.ingest.sentry.io/5577168',
    autoSessionTracking: true,
    integrations: [new Integrations.BrowserTracing()]

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    // tracesSampleRate: 1.0
  });
}

export default {
  init
};
