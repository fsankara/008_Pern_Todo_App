# PostgreSQL, ExpressJS, ReactJS, NodeJS Örneği 

## Ortam Hazırlama

- Overview Diagram
- Frontend REstful api ye HTTP çağrılraı yapar.
- HTTP çağrıları 
    - > CRUD işlemleri yapılır.
    - POST (create data)
    - GET (read data)    
    - PUT (update data)
    - DELETE (delete data)
- Sonra rest api aracılığı ile database de işlemler yapılır.
- Yani yazılımda üç bileşen var.
    - Frontend (Burası client oluyor)
    - Rest API (Burası server oluyor)
    - DATABASE


# SERVER SIDE

## Build The Restful Api With Postgresql

- > mkdir server
- > cd server
- > npm init
- > npm i express pg cors
    - express - > Server için kullanılacak
    - pg -> PostgreSQL database ile ilişki kurmak için kullanılacak
    - cors -> farklı domain deki app lerin birbiri ile etkileşimi için kullanılacak

- > touch index.js

- > node index  //test edelim

- > npm install -g nodemon
    - `nodemon` global olarak kuralım. Böylece proje içinde bir değişiklik olduğunda server otomatik olarak tekrar başlar.

- > nodemon index 
    - şimdi her değişiklikte server otomatik olarak yeniden başlıyor.

- > touch database.sql //server folderda
    - > run  psql
    - `\l` tüm databaseleri listele
    - `CREATE DATABASE pernstack;` // db oluştur 
    - `\c pernstack` // pernstack db sine geç
    - `\dt` // relationshiplere bak. şu an boş
    - tablo oluşturalım. psql shell kullanıyoruz.
        ```sql
                CREATE TABLE todo(
                todo_id SERIAL PRIMARY KEY,
                description VARCHAR(255)
                );
        ```

- > touch db.js //server folder da
    - veritabanı bağlantısı için bu dosyayı kullanacağız.
    - `pg` modülünü kullanacağız. 

- index.js de routes ler altına crud işlemlerini yazıyoruz.
    - POST , GET, PUT, DELETE
    - CREATE, READ, UPDATE, DELETE

## RESTful Api Overview

- server maked
- database maked
- table maked
- db.js file  database e nasıl bağlanılacağını yazdık
- index.js de db.js ile bağlantı yı sağlıyouz.
- index.js de route olarak CRUD olaylarını yazıyoruz.

# CLIENT SIDE

## Preparing Client Side

- > mkdir client
- > npx create-react-app . // yada klasör ismi ile bir klasöre kurabilirsin.
- Bootstrap i ekleyelim
    - client/public/index.html
        - <meta> içine bootstrap css linki ekle
        - <body> içine js dosya linkini ekle

## ADD Todo Input Component

- > mkdir /src/components
    - > touch /src/component/InputTodo.js
    - > touch /src/component/ListTodos.js
    - > touch /src/component/EditTodo.js

- > Componentleri yazdıktan sonra app.js de import edip kullancaz.

- > npm start

- input componenti kendi başına bir grup oluyor ve kayıt işlemini yapıyor. rest api ye çağrı yaparak yapıyor bunu.

- localhost:3000 ile deniyoruz.

- localhost:3000(react app) den localhost:5000(REST servis) e çağrı yapıyoruz.

- useState kullandık

## List Todo Components

- useEffect kullandık

### Delete Button

- deletTodo func yazdık

## Edit Todo Component

- ListTodo componentte import edeceğiz.