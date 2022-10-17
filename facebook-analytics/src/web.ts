import { WebPlugin } from '@capacitor/core';

import type { FacebookAnalyticsPlugin } from './definitions';
import type { FacebookEventName } from './event';

export class FacebookAnalyticsWeb
  extends WebPlugin
  implements FacebookAnalyticsPlugin
{
  async initAppEvents(): Promise<string> {
    throw super.unimplemented();
  }

  async logEvent(_: { event: FacebookEventName | string, valueToSum?: number, params?: any }): Promise<string> {
    throw super.unimplemented();
  }

  async enableAdvertiserTracking(): Promise<void> {
    throw super.unimplemented();
  }

  async disableAdvertiserTracking(): Promise<void> {
    throw super.unimplemented();
  }

  async getAdvertiserTrackingStatus(): Promise<any> {
    throw super.unimplemented();
  }
}
