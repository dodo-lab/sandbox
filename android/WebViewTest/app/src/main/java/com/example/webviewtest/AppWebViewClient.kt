package com.example.webviewtest

import android.app.AlertDialog
import android.net.Uri
import android.util.Log
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient

class AppWebViewClient (private val allowedHost: String) : WebViewClient() {
    override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
        Log.d("WebViewTest", request?.url.toString());
        if(request?.url?.host.toString().contains(allowedHost)) {
            return false
        }

        return true
    }
}