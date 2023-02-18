package com.example.qrcode;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Bitmap;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;

import com.google.android.material.snackbar.Snackbar;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.journeyapps.barcodescanner.BarcodeEncoder;

import java.util.HashMap;
import java.util.Map;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private static final int WHITE = 0xFFFFFFFF;
    private static final int BLACK = 0xFF000000;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        findViewById(R.id.zxing_button).setOnClickListener(this);
        findViewById(R.id.zxing_android_button).setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        // encode data
        String data = "CUSTOM_QRC1234500001002023020716294511111999999333312345678911234567890000000000000000";

        // encode options
        Map<EncodeHintType,Object> hint=new HashMap<>();
        hint.put(EncodeHintType.QR_VERSION,"8");
        hint.put(EncodeHintType.ERROR_CORRECTION,"Q");


        if (v.getId() == R.id.zxing_button) {
            try {
                long start = System.currentTimeMillis();
                QRCodeWriter qrCodeWriter = new QRCodeWriter();
                BitMatrix bitMatrix = qrCodeWriter.encode(data, BarcodeFormat.QR_CODE, 256, 256, hint);
                Bitmap bitmap = createBitmap(bitMatrix);
                long end = System.currentTimeMillis();
                ImageView imageView = (ImageView) findViewById(R.id.imageView);
                imageView.setImageBitmap(bitmap);

                Snackbar.make(v, "ZXing : " + (end - start), Snackbar.LENGTH_SHORT).show();
            } catch (WriterException e) {
                e.printStackTrace();
            }
        }
        else if (v.getId() == R.id.zxing_android_button) {
            try {
                long start = System.currentTimeMillis();
                BarcodeEncoder barcodeEncoder = new BarcodeEncoder();
                Bitmap bitmap = barcodeEncoder.encodeBitmap(data, BarcodeFormat.QR_CODE, 256, 256, hint);
                long end = System.currentTimeMillis();
                ImageView imageView = (ImageView) findViewById(R.id.imageView);
                imageView.setImageBitmap(bitmap);

                Snackbar.make(v, "ZXing Android : " + (end - start), Snackbar.LENGTH_SHORT).show();
            } catch (WriterException e) {
                e.printStackTrace();
            }
        }
    }

    private Bitmap createBitmap(BitMatrix matrix) {
        int width = matrix.getWidth();
        int height = matrix.getHeight();
        int[] pixels = new int[width * height];
        for (int y = 0; y < height; y++) {
            int offset = y * width;
            for (int x = 0; x < width; x++) {
                pixels[offset + x] = matrix.get(x, y) ? BLACK : WHITE;
            }
        }

        Bitmap bitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
        bitmap.setPixels(pixels, 0, width, 0, 0, width, height);
        return bitmap;
    }
}