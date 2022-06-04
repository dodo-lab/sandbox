package com.sandbox;

import android.widget.TextView;

import androidx.annotation.NonNull;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class CustomTextViewManager extends SimpleViewManager<TextView> {
    public static final String REACT_CLASS = "CustomTextView";

    @NonNull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @NonNull
    @Override
    protected TextView createViewInstance(@NonNull ThemedReactContext reactContext) {
        return new TextView(reactContext);
    }

    @ReactProp(name = "value")
    public void setValue(TextView view, String value) {
        view.setText(value);
    }
}
