# capacitor-facebook-analytics

this is a capacitor 4 plugin for facebook analytics

## Install

```bash
npm install capacitor-facebook-analytics
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

| Param         | Type                                                               |
| ------------- | ------------------------------------------------------------------ |
| **`options`** | <code>{ event: string; valueToSum?: number; params?: any; }</code> |

**Returns:** <code>Promise&lt;string&gt;</code>

```javascript
FacebookAnalytics.logEvent({ event: FacebookEventName.CompletedRegistration })

// OR

FacebookAnalytics.logEvent({ event: 'fb_mobile_complete_registration' })
```

--------------------


### enableAdvertiserTracking()

Only for IOS versions greater than 14

source : https://developers.facebook.com/docs/app-events/guides/advertising-tracking-enabled/

```typescript
enableAdvertiserTracking() => Promise<void>
```

--------------------


### disableAdvertiserTracking()

```typescript
disableAdvertiserTracking() => Promise<void>
```

--------------------


### getAdvertiserTrackingStatus()

```typescript
getAdvertiserTrackingStatus() => Promise<void>
```

--------------------


### Type Aliases


#### FacebookEventName

Enum of all Facebook standard events

<code>typeof FacebookEventName[keyof typeof FacebookEventName]</code>

you can see the list [here](./src/event.ts)

</docgen-api>
