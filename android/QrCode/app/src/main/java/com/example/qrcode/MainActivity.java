package com.example.qrcode;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.google.android.material.snackbar.Snackbar;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        findViewById(R.id.zxing_button).setOnClickListener(this);
        findViewById(R.id.zxing_android_button).setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        if (v.getId() == R.id.zxing_button) {
            Snackbar.make(v, "ZXing", Snackbar.LENGTH_SHORT).show();
        }
        else if (v.getId() == R.id.zxing_android_button) {
            Snackbar.make(v, "ZXing Android", Snackbar.LENGTH_SHORT).show();
        }
    }
}