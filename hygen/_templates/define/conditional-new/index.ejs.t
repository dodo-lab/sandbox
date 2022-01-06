---
# npx hygen define conditional-new --message
# ※--messageを省略すると、ファイルを生成しない

# 'to'に'null'を指定すると、ファイルを生成しない
to: "<%= locals.message ? `app/conditionalDefine.ts` : null %>"
from: shared/define.ts
---