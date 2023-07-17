
// Ссылка для обращение к api
// const GoogleSheetURL = "https://script.google.com/macros/s/AKfycbyamHBWfy6Ym4Hm1vSEFXGxwlI9a3r9um7ILfrsfMi2/dev"
const GoogleSheetURL = "https://script.google.com/macros/s/AKfycbwCJl6zoXpV_TaJ-JwEl9tlH1UPDSQG8PXZUYQRpeefBgF9p1nPdhWQog6xrpz8whdDdw/exec"


// Отправить запрос
export function GSsendRequest(action, data={}, func) {
    $.ajax({
        crossDomain: true,
        url: GoogleSheetURL + "?action=" + action,
        method: "GET",
        dataType: 'JSONP',
        data: data,
        success: func,
    })
}


// ----------------------------------------get----------------------------------------
// Для получения юзера по тегу
// data: id
export function GSgetUserById(data={}, func=null) {
    let sendData = {
        id: data.id
    }

    GSsendRequest("getUserById", sendData, func)
}


// Для получения юзера по тегу
// data: tag
export function GSgetUserByTag(data={}, func=null) {
    let sendData = {
        tag: data.tag.toLowerCase() // В нижнем регистре
    }

    GSsendRequest("getUserByTag", sendData, func)
}

// Для получения всех юзеров или определенный список
// data: type (all / ids), data: null / [id1, id2, id3 ...]
export function GSgetAllUsers(data={}, func=null) {
    let sendData = {
        type: data.type,
        data: data.data
    }

    GSsendRequest("getAllUsers", sendData, func)
}


// Для получения всех стран или определенный список
// data: type (all / ids), data: null / [id1, id2, id3 ...]
export function GSgetAllCountries(data={}, func=null) {
    let sendData = {
        type: data.type,
        data: data.data
    }

    GSsendRequest("getAllCountries", sendData, func)
}


// ----------------------------------------find----------------------------------------
// Найти в колонне значение
// sheet (name), data: column (name), value (string)
export function GSfindInColumn(sheet, data={}, func=null) {
    let sendData = {
        sheet: sheet,
        column: data.column,
        value: data.value
    }

    GSsendRequest("findInColumn", sendData, func)
}


// ----------------------------------------update----------------------------------------
// Обновить информацию о пользователе
// data: userData {id tag name ...}
export function GSupdateUserData(data={}, func=null) {
    let sendData = {
        id: data.id,
        data: JSON.stringify(data.data)
    }

    GSsendRequest("updateUserData", sendData, func)
}


// Обновить пароль пользователя
// data: {id old new}
export function GSupdateUserPassword(data={}, func=null) {
    let sendData = {
        id: data.id,
        data: JSON.stringify(data.data)
    }

    GSsendRequest("updateUserPassword", sendData, func)
}


// Обновить избранные пользователя
// data: {id favourite}
export function GSupdateUserFavourite(data={}, func=null) {
    let sendData = {
        id: data.id,
        data: JSON.stringify(data.data)
    }

    GSsendRequest("updateUserFavourite", sendData, func)
}


// ----------------------------------------special----------------------------------------
// Специльно для регистрации
// data: userdata {id ... login, password}
export function GSregistration(data={}, func=null) {
    let sendData = {
        data: JSON.stringify(data)
    }

    GSsendRequest("registration", sendData, func)
}


// Специльно для входа
// data: login, password
export function GSlogin(data={}, func=null) {
    let sendData = {
        login: data.login,
        password: data.password
    }

    GSsendRequest("login", sendData, func)
}


// Специльно для проверки пароля
// data: id, password
export function GScheckPassword(data={}, func=null) {
    let sendData = {
        id: data.id,
        password: data.password
    }

    GSsendRequest("checkPassword", sendData, func)
}