1. npm init -y
2. npm i express pg morgan
3. npm i -D nodemon
4. npx eslint --init
-cek sintax and find problem
-common.js
-none of theese // krn pake express
-typescript no
-code run on node
-format config JSON
-install eslint YES
-package manager npm
5. npm i -D eslint-config-prettier eslint-plugin-prettier prettier
6. change inside script on package.json file to "start": ""
7. on eslintrc.json file change inside extends to ["prettier"], and ecmaversion to 12, add below ecma version "sourceType": "module"
8. above rules add "plugins" : ["prettier"]
9. add inside rules "prettier/prettier": ["error", {"endOfLine": "auto"}]

10. saat selesai buat server di index js, maka tambahkan di script "start": "node index" dan "dev" : "nodemon index", krn yg menjalankan nodemon ada dijson versi tsb

11. jalankan dgn perintah npm start, krn saat dihover ke start dia katanya ckup dg npm start, tidak pake run
12. kl mau jalankan pake mode developer maka "npm run dev", spy tiap ada perubahan dlm file, server otomatis restart dan menerapkan perubahan tsb 