package fr.captive.plugins.capacitorfacebookanalytics;

import com.getcapacitor.Bridge;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import com.facebook.appevents.AppEventsLogger;
import com.facebook.appevents.AppEventsConstants;

import android.os.Bundle;
import java.math.BigDecimal;
import java.util.Currency;
import java.util.Iterator;

@CapacitorPlugin(name = "FacebookAnalytics")
public class FacebookAnalyticsPlugin extends Plugin {
    // private FacebookAnalytics implementation = new FacebookAnalytics();
    private AppEventsLogger logger;

    @Override
    public void load() {
        if (bridge == null) {
            bridge = this.getBridge();
        }

        logger = AppEventsLogger.newLogger(bridge.getActivity().getApplicationContext());

        super.load();
    }

    @PluginMethod
    public void logEvent(PluginCall call) {
        if (!call.getData().has("event")) {
            call.reject("Must provide an event");
            return;
        }

        String event = call.getString("event");
        JSObject params = call.getObject("params", new JSObject());
        Double valueToSum = call.getDouble("valueToSum", null);

        if (params.length() > 0) {
            Bundle parameters = new Bundle();
            Iterator<String> iter = params.keys();

            while (iter.hasNext()) {
                String key = iter.next();
                String value = params.getString(key);
                parameters.putString(key, value);
            }
            if (valueToSum != null) {
                logger.logEvent(event, valueToSum, parameters);
            } else {
                logger.logEvent(event, parameters);
            }

        } else {
            if (valueToSum != null) {
                logger.logEvent(event, valueToSum);
            } else {
                logger.logEvent(event);
            }
        }

        call.resolve();
    }

    @PluginMethod
    public void logPurchase(PluginCall call) {
        if (!call.getData().has("amount")) {
            call.reject("Must provide an amount");
            return;
        }

        Double amount = call.getDouble("amount", null);
        String curr = call.getString("currency");
        JSObject params = call.getObject("params", new JSObject());

        Currency currency = Currency.getInstance(curr);
        if (params.length() > 0) {
            Bundle parameters = new Bundle();
            Iterator<String> iter = params.keys();

            while (iter.hasNext()) {
                String key = iter.next();
                String value = params.getString(key);
                parameters.putString(key, value);
            }
            logger.logPurchase(BigDecimal.valueOf(amount), currency, parameters);
        } else {
            logger.logPurchase(BigDecimal.valueOf(amount), currency);
        }


        call.resolve();
    }

    @PluginMethod
    public void logAddPaymentInfo(PluginCall call) {
        Integer success = call.getInt("success");
        Bundle params = new Bundle();
        params.putInt(AppEventsConstants.EVENT_PARAM_SUCCESS, success);
        logger.logEvent(AppEventsConstants.EVENT_NAME_ADDED_PAYMENT_INFO, params);

        call.resolve();
    }

    @PluginMethod
    public void logAddToCart(PluginCall call) {
        if (!call.getData().has("amount")) {
            call.reject("Must provide an amount");
            return;
        }
        Double amount = call.getDouble("amount", null);
        String currency = call.getString("currency");
        Bundle params = new Bundle();

        params.putString(AppEventsConstants.EVENT_PARAM_CURRENCY, currency);
        logger.logEvent(AppEventsConstants.EVENT_NAME_ADDED_TO_CART, amount, params);

        call.resolve();
    }

    @PluginMethod
    public void logCompleteRegistration(PluginCall call) {
        JSObject params = call.getObject("params", new JSObject());
        if (params.length() > 0) {
            Bundle parameters = new Bundle();
            Iterator<String> iter = params.keys();

            while (iter.hasNext()) {
                String key = iter.next();
                String value = params.getString(key);
                parameters.putString(key, value);
            }
            logger.logEvent(AppEventsConstants.EVENT_NAME_COMPLETED_REGISTRATION, parameters);
        } else {
            logger.logEvent(AppEventsConstants.EVENT_NAME_COMPLETED_REGISTRATION);
        }

        call.resolve();
    }

    @PluginMethod
    public void logInitiatedCheckout(PluginCall call) {
        if (!call.getData().has("amount")) {
            call.reject("Must provide an amount");
            return;
        }
        Double amount = call.getDouble("amount", null);

        JSObject params = call.getObject("params", new JSObject());
        if (params.length() > 0) {
            Bundle parameters = new Bundle();
            Iterator<String> iter = params.keys();

            while (iter.hasNext()) {
                String key = iter.next();
                String value = params.getString(key);
                parameters.putString(key, value);
            }
            logger.logEvent(AppEventsConstants.EVENT_NAME_INITIATED_CHECKOUT, amount, parameters);
        } else {
            logger.logEvent(AppEventsConstants.EVENT_NAME_INITIATED_CHECKOUT, amount);
        }

        call.resolve();
    }
}
