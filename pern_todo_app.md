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

- 
