package com.lifecycle;

import android.os.Bundle;
import android.util.Log;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "lifecycle";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    Log.d("Lifecycle", "onCreate");
    super.onCreate(savedInstanceState);
  }

  @Override
  protected void onPause() {
    Log.d("Lifecycle", "onPause");
    super.onPause();
  }

  @Override
  protected void onResume() {
    Log.d("Lifecycle", "onResume");
    super.onResume();
  }

  @Override
  protected void onDestroy() {
    Log.d("Lifecycle", "onDestroy");
    super.onDestroy();
  }

  @Override
  protected void onStart() {
    Log.d("Lifecycle", "onStart");
    super.onStart();
  }

  @Override
  protected void onStop() {
    Log.d("Lifecycle", "onStop");
    super.onStop();
  }

  // Backキーでプロセスごと終了させる.
  // @Override
  // public void invokeDefaultOnBackPressed() {
  //   System.exit(0);
  // }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. There the RootView is created and
   * you can specify the rendered you wish to use (Fabric or the older renderer).
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new MainActivityDelegate(this, getMainComponentName());
  }

  public static class MainActivityDelegate extends ReactActivityDelegate {
    public MainActivityDelegate(ReactActivity activity, String mainComponentName) {
      super(activity, mainComponentName);
    }

    @Override
    protected ReactRootView createRootView() {
      ReactRootView reactRootView = new ReactRootView(getContext());
      // If you opted-in for the New Architecture, we enable the Fabric Renderer.
      reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
      return reactRootView;
    }
  }
}
