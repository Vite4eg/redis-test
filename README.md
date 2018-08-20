# Балуемся с Redis

## Стек

* `nodejs`
    * библиотека [ws](https://github.com/websockets/ws) для вебсокет-сервера
    * библиотека [redis](https://github.com/NodeRedis/node_redis) - Redis-клиент для nodejs
* `redis`
* `nginx` для раздачи статики
* `docker` как основа окружения


## Реализация

* на данный момент вебсокет-сервер слушает на 3000 порту, соединение идёт в обход nginx
* публикация сообщений в канал через cli-клиент redis ([redis-cli](https://redis.io/topics/rediscli))
```bash
$ redis-cli
127.0.0.1:6379> PUBLISH myChannel "My test message"
```


## Запуск

* в папке проекта исполняем
```bash
$ docker-compose build
$ docker-compose up
```
* открываем в браузере [http://localhost/](http://localhost/)


## Куда дальше

* Надо бы вебсокет повесить на тот же порт, сделать как подраздел:
```
ws://localhost/ws
```
* Перевести бы на ssl
* Замутить вторую форму для публикации сообщений
