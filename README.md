# Tasks &middot; ![react-native](https://img.shields.io/badge/react--native-0.64.3-blue) ![react-native](https://img.shields.io/badge/expo-4.17.2-blue)

Приложение показа списка задач и изменения статуса их выполнения.

Проек состит из 2 частей:
* **Приложение (Клиент)** - Получает с сервера и оторажает список задач. Имеет возможность открыть детальную карточку задачи и изменить ее статус выполнения. Сохраняет статусы задач внутри приложения.
*Примечание: У приложения жестко задан базовый url для подключения к серверу: http://192.168.0.100:3000/. Адрес можно изменить в файле `client/src/api/api.ts`*

* **Сервер** - Создает REST API для отправки списка задач.
*Примечание: У сервера жестко задан 3000 порт для соединения.*

## Сервер
### Запуск
Перейдите в папку `server`, выполните загрузку зависимостей и команду `yarn start`
```sh
cd server/
yarn install
yarn start
```
## Клиент
### Запуск
Вы можете [скачать и установить готовую сборку](https://github.com/kast96/tasks/blob/master/client/builds/) на смартфон или запустить сборку на своем смартфоне или эмуляторе.
Перейдите в папку `client`, выполните загрузку зависимостей
```sh
cd client/
yarn install
```
В зависмости от устройства, на котором будет запущена программа, выполните одну из команд:

**Android**
```sh
yarn android
```
**iOS**
```sh
yarn ios
```
**Web**
```sh
yarn web
```

## Сборки
[![Supports Expo Android](https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff)](https://github.com/kast96/tasks/blob/master/client/builds/) [![Supports Expo iOS](https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff)](https://github.com/kast96/tasks/blob/master/client/builds/)

## Основные технологии
TypeScript, React Native, React-Router-Native, Redux, Axios, Express