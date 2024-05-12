const changelogs = [
    {
        title: "Посты с картинками, профили участников, страны и многое другое",
        text: `Выпущена первая рабочая версия сайта, спустя более чем 6 месяцев разработки, начиная практически с нуля 4 раза!🥹`,
        date: "17.12.2023",
        attach: [
            "https://99px.ru/sstorage/86/2015/12/image_862412152238097572064.gif",
        ]
    },
    {
        title: "Вход без логина и пароля",
        text: `Теперь, чтобы войти в свой аккаунт, достаточно отправить боту код со страницы входа или ввести уже существующий токен авторизации.`,
        date: "24.12.2023",
        attach: [
            "https://assets-global.website-files.com/61845f7929f5aa517ebab941/6440f9477c2a321f0dd6ab61_How%20Artificial%20Intelligence%20(AI)%20Is%20Used%20In%20Biometrics.jpg"
        ]
    },
    {
        title: "Иконки, полноэкранный просмотр изображений и багфикс",
        text: `• Добавлены иконки для большинства кнопок
• Новая функция полноэкранного просмотра изображений в постах, профилях участников и стран
• Множество визуальных изменений и исправлены баги
• Добавлена инструкция "Как использовать токен авторизации" который используется на странице входа
• Добавлена инструкция "Где можно опубликовать идеи для сайта и отправить обнаруженные баги"
Инструкции можно найти во вкладке "Помощь".`,
        date: "28.04.2024",
        attach: []
    },
    {
        title: "Новый домен и страница обновлений",
        text: `У сайта появился свой крутой и красивый домен "hedgehog-rp.ru", а также список обновлений переехал в новую вкладку "Обновления", чтобы не засорять ленту с новостями.`,
        date: "30.04.2024",
        attach: [],
    },
    {
        title: "Поля ввода с иконками",
        text: `• Добавлены иконки внутри полей ввода для поиска по участникам и странам, а так же при редактировании тега страны.
• Добавлены кнопки для отчистки поля поиска по участникам и странам
• Добавлена кнопка авторизации на верхней части экрана в мобильной версии сайта
• Уменьшен отступ от краев экрана в мобильной версии
• Добавлен заголовок на странице входа
• Новая тема сайта в настройках (простите)`,
        date: "06.05.2024",
        attach: [],
    },
    {
        title: "Оптимизация и редактирование профиля",
        text: `• Сайт оптимизирован и работает быстрее на ~25%😊
• Добавлена возможность редактировать свой профиль
• Основное и дополнительное описание страны было заменено на одно общее описание с ограничением в 5000 символов
• Увеличен размер больших полей ввода описания страны и профиля
• Уменьшена длина тега с 32 символов до 16
• Изменено слово"Новость" на "Пост" в некоторых местах
• Добавлен "Предпоказ" во вкладке "Участники и "Страны" во время загрузки
• Уменьшен размер картинки загрузки сайта в мобильной версии`,
        date: "12.05.2024",
        attach: [],
    },
]

// Возвращаем посты в обратном порядке
export default changelogs.reverse()