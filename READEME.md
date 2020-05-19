## 运行
```
deno bundle src/main.ts src/main.js

deno run --allow-net --allow-read  --allow-write  index.ts

$ 更新文件
deno run --reload=http://localhost:5000/www/koaTest.ts --allow-net --allow-read  --allow-write  index.ts
```