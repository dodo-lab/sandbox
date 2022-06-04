package com.sandbox;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

public class CalendarModule extends ReactContextBaseJavaModule {
    CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location, Callback callback) {
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location " + location);

        Integer eventId = 99;
        callback.invoke(eventId);
    }

    @ReactMethod
    public void createCalendarEventPromise(String name, String location, Promise promise) {
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location " + location);

        try {
            if(name.equals("error")) throw new Exception("name error");

            Integer eventId = 100;
            promise.resolve(eventId);
        } catch (Exception e) {
            promise.reject("Create Event Error", e);
        }
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("DEFAULT_EVENT_NAME", "New Event");
        return constants;
    }
}
