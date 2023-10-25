import { WebPlugin } from '@capacitor/core';

import type { FacebookAnalyticsPlugin } from './definitions.js';
import type { FacebookEventName } from './event.js';

export class FacebookAnalyticsWeb extends WebPlugin implements FacebookAnalyticsPlugin {
  async initAppEvents(): Promise<string> {
    throw super.unimplemented();
  }

  async logEvent(_: { event: FacebookEventName; valueToSum?: number; params?: any }): Promise<string> {
    throw super.unimplemented();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async enableAdvertiserTracking(): Promise<void> {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async disableAdvertiserTracking(): Promise<void> {}

  async getAdvertiserTrackingStatus(): Promise<boolean> {
    return true;
  }
}
