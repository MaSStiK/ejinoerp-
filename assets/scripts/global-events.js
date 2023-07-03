import { getCache, removeCache } from "./cache.js"
import { notify } from "./notification/notification.js"

// Интернет соединение восстановлено
$(window).on("online", (event) => {
    notify("Интернет соединение восстановлено", "primary")
})

// Потеряно интернет соединение
$(window).on("offline", (event) => {
    notify("Потеряно интернет соединение", "danger")
})


// Сообщение после регистрации
if (getCache("after-reg")) {
    removeCache("after-reg")
    notify("Вы успешно зарегистрировались!", "primary")
}

// Сообщение после входа
if (getCache("after-login")) {
    removeCache("after-login")
    notify("Вы успешно вошли в аккаунт!", "primary")
}

// добавить проверки на пароль и проверка userdata