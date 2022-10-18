import { registerPlugin } from '@capacitor/core';

import type { FacebookAnalyticsPlugin } from './definitions.js';

const FacebookAnalytics = registerPlugin<FacebookAnalyticsPlugin>('FacebookAnalytics', {
  web: () => import('./web.js').then((m) => new m.FacebookAnalyticsWeb()),
});

export * from './definitions.js';
export * from './event.js';
export { FacebookAnalytics };
