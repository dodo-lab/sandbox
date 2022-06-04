package com.sandbox;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ImagePickerModule extends ReactContextBaseJavaModule {
    private static final int IMAGE_PICKER_REQUEST = 1;
    private static final String E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST";
    private static final String E_PICKER_CANCELLED = "E_PICKER_CANCELLED";
    private static final String E_FAILED_TO_SHOW_PICKER = "E_FAILED_TO_SHOW_PICKER";
    private static final String E_NO_IMAGE_DATA_FOUND = "E_NO_IMAGE_DATA_FOUND";

    private Promise pickerPromise;

    private final ActivityEventListener activityEventListener = new BaseActivityEventListener() {
        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent intent) {
            if (requestCode == IMAGE_PICKER_REQUEST) {
                if (pickerPromise != null) {
                    if (resultCode == Activity.RESULT_CANCELED) {
                        pickerPromise.reject(E_PICKER_CANCELLED, "Image picker was cancelled");
                    }
                    else if (resultCode == Activity.RESULT_OK) {
                        Uri uri = intent.getData();

                        if (uri == null) {
                            pickerPromise.reject(E_NO_IMAGE_DATA_FOUND, "No image data found");
                        } else {
                            pickerPromise.resolve(uri.toString());
                        }
                    }

                    pickerPromise = null;
                }
            }
        }
    };

    private final LifecycleEventListener lifecycleEventListener = new LifecycleEventListener() {
        @Override
        public void onHostResume() {
            Log.d("LifecycleEventListener", "onHostResume");
        }

        @Override
        public void onHostPause() {
            Log.d("LifecycleEventListener", "onHostPause");
        }

        @Override
        public void onHostDestroy() {
            Log.d("LifecycleEventListener", "onHostDestroy");
        }
    };

    ImagePickerModule(ReactApplicationContext reactContext) {
        super(reactContext);

        reactContext.addActivityEventListener(activityEventListener);
        reactContext.addLifecycleEventListener(lifecycleEventListener);
    }

    @NonNull
    @Override
    public String getName() {
        return "ImagePickerModule";
    }

    @ReactMethod
    public void pickImage(final Promise promise) {
        Activity currentActivity = getCurrentActivity();

        if (currentActivity == null) {
            promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist");
            return;
        }

        pickerPromise = promise;

        try {
            final Intent galleryIntent = new Intent(Intent.ACTION_PICK);

            galleryIntent.setType("image/*");

            final Intent chooserIntent = Intent.createChooser(galleryIntent, "Pick an image");

            currentActivity.startActivityForResult(chooserIntent, IMAGE_PICKER_REQUEST);
        } catch (Exception e) {
            pickerPromise.reject(E_FAILED_TO_SHOW_PICKER, e);
            pickerPromise = null;
        }
    }
}
