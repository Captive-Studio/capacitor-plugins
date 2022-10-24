# capacitor-facebook-analytics

this is a capacitor 4 plugin for facebook analytics

## Install

```bash
yarn install capacitor-facebook-analytics
npx cap sync
```

## Usage

```javascript
import { FacebookAnalytics, FacebookEventName } from '@captive/capacitor-facebook-analytics';

// enable advertiser tracking for IOS
FacebookAnalytics.enableAdvertiserTracking();

// log event : completed registration
FacebookAnalytics.logEvent({ event: FacebookEventName.CompletedRegistration });

```

## API

<docgen-index>

* [`initAppEvents()`](#initappevents)
* [`logEvent(...)`](#logevent)
* [`enableAdvertiserTracking()`](#enableadvertisertracking)
* [`disableAdvertiserTracking()`](#disableadvertisertracking)
* [`getAdvertiserTrackingStatus()`](#getadvertisertrackingstatus)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initAppEvents()

```typescript
initAppEvents() => Promise<string>
```

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------


### logEvent(...)

```typescript
logEvent(options: { event: FacebookEventName | string; valueToSum?: number; params?: any; }) => Promise<string>
```

Send an event to Facebook

```ts
FacebookAnalytics.logEvent({ event: <a href="#facebookeventname">FacebookEventName</a>.CompletedRegistration })

// OR

FacebookAnalytics.logEvent({ event: 'fb_mobile_complete_registration' })
```

| Param         | Type                                                               |
| ------------- | ------------------------------------------------------------------ |
| **`options`** | <code>{ event: string; valueToSum?: number; params?: any; }</code> |

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------


### enableAdvertiserTracking()

```typescript
enableAdvertiserTracking() => Promise<void>
```

Only for IOS versions greater than 14

--------------------


### disableAdvertiserTracking()

```typescript
disableAdvertiserTracking() => Promise<void>
```

--------------------


### getAdvertiserTrackingStatus()

```typescript
getAdvertiserTrackingStatus() => Promise<boolean>
```

**Returns:** <code>Promise&lt;boolean&gt;</code>

--------------------


### Type Aliases


#### FacebookEventName

Enum of all Facebook standard events

Table of correspondence :

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

<code>typeof FacebookEventName[keyof typeof FacebookEventName]</code>

</docgen-api>
