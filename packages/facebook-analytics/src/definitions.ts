import type { FacebookEventName } from './event';

export interface FacebookAnalyticsPlugin {
  initAppEvents(): Promise<string>;
  /**
   * Send an event to Facebook
   *
   * ```ts
   * FacebookAnalytics.logEvent({ event: FacebookEventName.CompletedRegistration })
   *
   * // OR
   *
   * FacebookAnalytics.logEvent({ event: 'fb_mobile_complete_registration' })
   * ```
   *
   * @param options
   */
  logEvent(options: { event: FacebookEventName | string; valueToSum?: number; params?: any }): Promise<string>;
  /**
   * Only for IOS versions greater than 14
   *
   * @see https://developers.facebook.com/docs/app-events/guides/advertising-tracking-enabled/
   */
  enableAdvertiserTracking(): Promise<void>;
  disableAdvertiserTracking(): Promise<void>;
  getAdvertiserTrackingStatus(): Promise<void>;
}
