---
# npx hygen class inject --name [ClassName]
inject: true
to: app/<%= name %>.js

# 'before'と'after'は指定した検索文字列（正規表現）にヒットすると、その前後の行に挿入する
# before: class

# 'prepend'は、ファイルの先頭に挿入する
# prepend: true

# 'appned'はファイルの末尾に挿入する
append: true

# 'at_line'は行番号指定で挿入する
# at_line: 50

# 'skip_if'で多重にインジェクションしないよう防止する
skip_if: export
---
export {
  <%= name %>
}