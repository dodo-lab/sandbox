# JUnitの検証

## JUnitのテスト環境構築

新規プロジェクト作成段階で、`app/build.gradle`に含まれている。

```text
dependencies {

    (省略)
    testImplementation 'junit:junit:4.+'
}
```

## テストコードファイル作成

1. テストしたいクラス名を選択する
2. `Ctrl + Shift + T`
3. メニューから、`Create New Test`を選択
4. 必要に応じてダイアログの内容を変更し、OKを押下
5. テスト対象フォルダを選択（エミュレータや実機を使わないなら、`test`を選択）
