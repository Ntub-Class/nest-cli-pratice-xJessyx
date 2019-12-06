# 回家作業

## 請建立3個module，並完成課堂中所教的route，須包含controller、service，其中student-service要稍微換個位置，最終結構如下，請確定程式能夠正常執行

### User
* GET /user
* GET /user/:id
* POST /user
* PUT /user/:id
* DELTE /user/:id

### News
* GET /news
* GET /news/:id
* POST /news
* PUT /news/:id
* DELTE /news/:id

### Student
* GET /student
* GET /student/:id
* POST /student
* PUT /student/:id
* DELTE /student/:id

## 最終資料夾結構

```bash=
📦src
 ┣ 📂news
 ┃ ┣ 📜news.controller.spec.ts
 ┃ ┣ 📜news.controller.ts
 ┃ ┣ 📜news.module.ts
 ┃ ┣ 📜news.service.spec.ts
 ┃ ┗ 📜news.service.ts
 ┣ 📂student
 ┃ ┣ 📂service
 ┃ ┃ ┣ 📜student.service.spec.ts
 ┃ ┃ ┗ 📜student.service.ts
 ┃ ┣ 📜student.controller.spec.ts
 ┃ ┣ 📜student.controller.ts
 ┃ ┗ 📜student.module.ts
 ┣ 📂user
 ┃ ┣ 📜user.controller.spec.ts
 ┃ ┣ 📜user.controller.ts
 ┃ ┣ 📜user.module.ts
 ┃ ┣ 📜user.service.spec.ts
 ┃ ┗ 📜user.service.ts
 ┣ 📜app.controller.spec.ts
 ┣ 📜app.controller.ts
 ┣ 📜app.module.ts
 ┣ 📜app.service.ts
 ┗ 📜main.ts
```