# hygen

## ジェネレータの生成（初期化）

```bash
npx hygen init self
```

## ヘルパー関数

ヘルパー関数を使うことで、文字列操作が可能になる。例えば、以下は文字列をキャメルケースに変換している。

```js
<%= h.inflection.camelize("message_property") %>  // === MessageProperty
```

他にも多数のヘルパー関数がある。詳細は[こちら](https://github.com/dreamerslab/node.inflection)を参照。
