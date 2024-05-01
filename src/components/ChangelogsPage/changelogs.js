const changelogs = [
    {
        title: "Посты с картинками, профили участников, страны и многое другое",
        text: `Выпущена первая рабочая версия сайта, спустя более чем 6 месяцев разработки, начиная практически с нуля 4 раза`,
        date: "17.12.2023",
        attach: [
            "https://99px.ru/sstorage/86/2015/12/image_862412152238097572064.gif",
            "https://media.tenor.com/JXGMaWurWmIAAAAM/котенок-котики.gif",
            "https://avatars.mds.yandex.net/i?id=134a7fb6ef9a9ce86994b99731591cca6a850af1-8152091-images-thumbs&n=13"
        ]
    },
    {
        title: "Вход без логина и пароля",
        text: `Теперь, чтобы войти в свой аккаунт, достаточно отправить боту код со страницы входа или ввести уже существующий токен авторизации`,
        date: "24.12.2023",
        attach: [
            "https://assets-global.website-files.com/61845f7929f5aa517ebab941/6440f9477c2a321f0dd6ab61_How%20Artificial%20Intelligence%20(AI)%20Is%20Used%20In%20Biometrics.jpg"
        ]
    },
    {
        title: "Обновление с иконками и багфикс",
        text: `Были добавлены иконки для большинства кнопок, множество визуальных изменений, полноэкранный просмотр картинок в постах и профилях участников и стран, а так же были исправлены визуальные баги и сайт стал более идеальным.\n
Была добавлена статья про "Токен авторизации" который используется на странице входа, а так же инструкция "Где можно опубликовать идеи для сайта и отправить обнаруженные баги", их вы можете найти во вкладке "Помощь"`,
        date: "28.04.2024",
        attach: []
    },
    {
        title: "Новый домен и страница обновлений",
        text: `У сайта появился свой крутой и красивый домен "hedgehog-rp.ru", а также список обновлений переехал во вкладку "Обновления", чтобы не засорять ленту с новостями`,
        date: "30.04.2024",
        attach: []
    },
]

// Возвращаем посты в обратном порядке
export default changelogs.reverse()