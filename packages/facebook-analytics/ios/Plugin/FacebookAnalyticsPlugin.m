#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(FacebookAnalyticsPlugin, "FacebookAnalytics",
           CAP_PLUGIN_METHOD(initAppEvents, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(logEvent, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(enableAdvertiserTracking, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(disableAdvertiserTracking, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(getAdvertiserTrackingStatus, CAPPluginReturnPromise);
)
