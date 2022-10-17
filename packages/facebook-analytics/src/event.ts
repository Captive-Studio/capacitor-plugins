/**
 * Enum of all Facebook standard events
 */
export const FacebookEventName = Object.freeze({
  ActivatedApp: 'fb_mobile_activate_app',
  DeactivatedApp: 'fb_mobile_deactivate_app',
  SessionInterruptions: 'fb_mobile_app_interruptions',
  TimeBetweenSessions: 'fb_mobile_time_between_sessions',
  CompletedRegistration: 'fb_mobile_complete_registration',
  ViewedContent: 'fb_mobile_content_view',
  Searched: 'fb_mobile_search',
  Rated: 'fb_mobile_rate',
  CompletedTutorial: 'fb_mobile_tutorial_completion',
  PushTokenObtained: 'fb_mobile_obtain_push_token',
  AddedToCart: 'fb_mobile_add_to_cart',
  AddedToWishlist: 'fb_mobile_add_to_wishlist',
  InitiatedCheckout: 'fb_mobile_initiated_checkout',
  AddedPaymentInfo: 'fb_mobile_add_payment_info',
  Purchased: 'fb_mobile_purchase',
  AchievedLevel: 'fb_mobile_level_achieved',
  UnlockedAchievement: 'fb_mobile_achievement_unlocked',
  SpentCredits: 'fb_mobile_spent_credits',
} as const);
export type FacebookEventName = typeof FacebookEventName[keyof typeof FacebookEventName];

/**
 * Enum of all Facebook standard parameters
 */
export const FacebookEventParameterName = Object.freeze({
  Currency: 'fb_currency',
  Registration_Method: 'fb_registration_method',
  ContentType: 'fb_content_type',
  ContentId: 'fb_content_id',
  SearchString: 'fb_search_string',
  Success: 'fb_success',
  MaxRatingValue: 'fb_max_rating_value',
  PaymentInfoAvailable: 'fb_payment_info_available',
  NumItems: 'fb_num_items',
  Level: 'fb_level',
  Description: 'fb_description',
  SourceApplication: 'fb_mobile_launch_source',

});
export type FacebookEventParameterName = typeof FacebookEventParameterName[keyof typeof FacebookEventParameterName];

/**
 * Enum of toggle values
 */
export const FacebookToggle = Object.freeze({
  Yes: '1',
  No: '0',
});
export type FacebookToggle = typeof FacebookToggle[keyof typeof FacebookToggle];
