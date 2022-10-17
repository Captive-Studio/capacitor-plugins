import type { FacebookEventName } from './event';

export interface FacebookAnalyticsPlugin {
  initAppEvents(): Promise<string>;
  logEvent(options: { event: FacebookEventName | string, valueToSum?: number, params?: any }): Promise<string>;
  enableAdvertiserTracking(): Promise<void>;
  disableAdvertiserTracking(): Promise<void>;
  getAdvertiserTrackingStatus(): Promise<void>;
}
