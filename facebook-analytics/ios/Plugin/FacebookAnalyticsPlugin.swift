import Foundation
import Capacitor
import FBSDKCoreKit

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(FacebookAnalyticsPlugin)
public class FacebookAnalyticsPlugin: CAPPlugin {

    @objc func initAppEvents(_ call: CAPPluginCall) {
        AppEvents.shared.activateApp()
        call.resolve()
    }

    @objc func enableAdvertiserTracking(_ call: CAPPluginCall) {
        Settings.shared.isAdvertiserTrackingEnabled = true
        call.resolve()
    }

    @objc func disableAdvertiserTracking(_ call: CAPPluginCall) {
        Settings.shared.isAdvertiserTrackingEnabled = false
        call.resolve()
    }

    @objc func getAdvertiserTrackingStatus(_ call: CAPPluginCall) {
        print("facebook advertiser tracking status: ", Settings.shared.isAdvertiserTrackingEnabled)
        call.resolve(["status": Settings.shared.isAdvertiserTrackingEnabled])
    }

    @objc func logEvent(_ call: CAPPluginCall) {
        guard let event = call.getString("event") else {
            call.reject("Missing event argument")
            return;
        }

        print("sending facebook event: ", event)

        if let valueToSum = call.getDouble("valueToSum") {
            if let params = call.getString("params") {
                let newParams = [
                    AppEvents.ParameterName.content : params,
                ]
                AppEvents.shared.logEvent(.init(event), valueToSum: valueToSum, parameters: newParams)
            } else {
                AppEvents.shared.logEvent(.init(event), valueToSum: valueToSum)
            }
        } else {
            if let params = call.getString("params") {
                print(params)
                let newParams = [
                    AppEvents.ParameterName.content : params,
                ]
                AppEvents.shared.logEvent(.init(event), parameters: newParams)
            } else {
                AppEvents.shared.logEvent(.init(event))
            }
        }
        call.resolve()
    }

}
