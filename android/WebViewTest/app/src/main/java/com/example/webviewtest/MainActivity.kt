package com.example.webviewtest

import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import androidx.databinding.DataBindingUtil
import com.example.webviewtest.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = DataBindingUtil.setContentView(this, R.layout.activity_main)

        initWebView()
        buttonEvent()
    }

    private fun initWebView() {
        val uri = Uri.parse("https://yahoo.co.jp");

        val webView = binding.webview
        webView.settings.javaScriptEnabled = true
        webView.webViewClient = AppWebViewClient(uri.host.toString())
        webView.loadUrl(uri.toString())
    }

    private fun buttonEvent() {
        binding.backButton.setOnClickListener {
            if(binding.webview.canGoBack()) {
                binding.webview.goBack()
            }
        }
        binding.forwardButton.setOnClickListener {
            if(binding.webview.canGoForward()) {
                binding.webview.goForward()
            }
        }
    }
}