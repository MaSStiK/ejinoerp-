import {sendVkRequest, sendGSRequest} from "./scripts-base.js"

// localStorage.clear()

// localStorage userData, allUsers, allNations
// let userData = JSON.parse(localStorage.getItem("userData"))
// let allUsers = JSON.parse(window.localStorage.getItem("allUsers"))
// let allNations = JSON.parse(window.localStorage.getItem("allNations"))
// let authorized = userData ? true : false



// for(var i=0;i<scripts.length;i++){ 
//     for(var j=0;j<torefreshs.length;j++){ 
//             console.log(scripts[i].src);
//         if(scripts[i].src && (scripts[i].src.indexOf(torefreshs[j]) > -1)){
            
//             new_src = scripts[i].src.replace(torefreshs[j],torefreshs[j] + 'k=' + key );
//             console.log(new_src);
//             scripts[i].src = new_src; // change src in order to refresh js
//         } 
//     }
// }

console.log("gogoba");

if (window) {
    $(".window").text("шиндус");
} else {
    $(".window").text("null");
}
$(".userData").text(JSON.stringify(localStorage.getItem("userData")));

localStorage.setItem("lolka", "lolka")
$(".stroka").text("lolka");

// sendVkRequest('messages.send', {peer_id: 2000000007, random_id: 0, message: "auth"}, 
//     (data) => {
//         if (data.response) { // success
//             $(".text").text("Сработало!");
//         }

//         if (data.error) { // error
//             $(".error").text(data.error.error_msg);
//         }
//     }
// )

// sendGSRequest("users", "getData", {}, (data) => {
//     $(".text").text(JSON.stringify(data));
// })


// try {
//     sendGSRequest("users", "getData", {}, (data) => {
//         try {
//             window.localStorage.setItem("allUsers", JSON.stringify(data))
//             if (authorized) { // Если авторизован то обновляем информацию о пользователе
//                 window.localStorage.setItem("userData", JSON.stringify(data[userData.id]))
//             }
        
//             // $(".userData").text(JSON.stringify(data[userData.id]))
//             $(".allUsers").text(JSON.stringify(data))
//         } catch (error) {
//             $(".error").text(error)
//         }
        
//     })
    
//     sendGSRequest("nations", "getData", {}, (data) => {
//         try {
//             // window.localStorage.setItem("allNations", JSON.stringify(data))
//             // allNations = data
//             $(".allNations").text(JSON.stringify(data))
//         } catch (error) {
//             $(".error").text(error)
//         }
        
//     })
// } catch (error) {
//     $(".error").text(error)
// }
