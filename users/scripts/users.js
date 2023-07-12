import { getCache, setCache } from "../../assets/scripts/cache.js";
import { GSgetAllUsers } from "../../assets/scripts/gs-api.js";
import { loading } from "../../assets/scripts/loading/loading.js";


let userData = getCache("userData")
let allUsers = getCache("allUsers")


// Функция рендера юзеров
function renderUsers(users) {
    // Очищаем контейнер перед рендером
    $(".users-list").html("")

    // Заполняем список всех юзеров
    for (let user of users) {
        $(".users-list").append(`
            <div class="users-list__button-container" id="user-${user.id}">
                <a class="users-list__button" href="../profile/index.html?id=${user.id}">
                    <img src="${user.photo}" alt="vk-photo">
                    <div class="users-list__button-names">
                        <p class="text-cut js-user-name">${user.name}</p>
                        <h5 class="text-cut text-secondary js-user-tag">${user.tag}</h5>
                    </div>
                </a>
                <img class="users-list__favourite" src="../assets/images/icons/Favourite.svg" alt="favourite">
            </div>
        `)
    }


    // Удаляем закрепы если нету юзердаты
    if (!userData) {
        $(".users-list__favourite").remove();
    }


    // Тригерим инпут после рендера
    $("#users-search").trigger("input")
}


// Если есть список всех юзеров - рендерим из кэша и потом загружаем
if (allUsers) {
    renderUsers(allUsers)
    GSgetAllUsers({type: "all", data: null}, (data) => {
        renderUsers(data)
        setCache("allUsers", data)
    })
} else {
    loading()
    GSgetAllUsers({type: "all", data: null}, (data) => {
        loading(false)
        renderUsers(data)
        setCache("allUsers", data)
    })
}