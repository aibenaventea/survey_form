let formInPut = document.querySelector('.form1')
let userName = ""
let userLocation = ""
let userFavoriteLanguage = ""
let userComment = ""
let submit = document.querySelector('.submit')

let formOutPut = document.querySelector('.form2')
let goBack = document.querySelector('.goBack')

function subForm(){
    
    userName = document.querySelector('.userName')
    userLocation = document.querySelector('.userLocation')
    userFavoriteLanguage = document.querySelector('.userFavoriteLanguage')
    userComment = document.querySelector('.userComment')
}


submit.addEventListener('click', () => {
    formInPut.action = '/result';
})

// goBack.addEventListener('click', () => {
//     formOutPut.action = '/';

// })

// <!-- <h1>Submit Information</h1><br>
// Name: <p><%=%></p><br>
// Dojo Location: <p><%=data.location[i]%></p><br>
// Favorite Language: <p><%=data.language[i]%></p><br>
// Comment: <p><%=%></p><br>
// <button class="goBack">Go Back</button> -->