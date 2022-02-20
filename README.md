# Сервіс для отримання інформації про супергероїв

Проект представляє собою back-end інформаціфного сервіса про супергероїв.
Час виконання: 14.02.2022 - 20.02.2022.

## Інструменти:

- ESLint;
- Express;
- MongoDB;
- Mongoose;
- Joi;

В проекті реалізовані раути і обробка даних для:

- отримання колекції даних про супергероїв - "/";
- отримання об`єкту даних про супергероя по id - "/hero/:id";
- створення нового запису про супергероя в базу даних - "/create";
- редагування існуючої інформації про супергероя по id - "/update/:id";
- видалення запису про супергероя з бази даних -"/delete/:id".

А також реалізована пагінація  - при кожному запиті спуску супергероїв у відповідь клієнт отримує лише 5 елементів з колекції даних.

/* Була спроба реалізувати завантаження і обробку зображення, але реалізувати повноцінну передачу зображення не вдалося, серверна сторона приймає і обробляє зображення, але немає змоги відправити зображення зі сторони клієнта */
