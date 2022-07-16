
document.querySelector("body").style.backgroundColor = localStorage.getItem("bg-color")
document.querySelector("footer").style.backgroundColor = localStorage.getItem("theme");
document.querySelector(".setting-nav").style.backgroundColor = localStorage.getItem("theme");
document.querySelector("nav").style.color = localStorage.getItem("nav-text-color");
document.querySelector("nav i").style.color = localStorage.getItem("nav-text-color");
document.querySelector("nav").style.boxShadow = localStorage.getItem("boxshadow");
document.querySelector(".setting").style.boxShadow = localStorage.getItem("boxshadow");
document.querySelector(".setting").style.color = localStorage.getItem("text-color");
document.querySelector(".Calendar-days div.curr-date").style.backgroundColor = localStorage.getItem("curr-date")
document.querySelector(".create-todo input").style.backgroundColor = localStorage.getItem("todo-input")
document.querySelector("#add-todo").style.backgroundColor = localStorage.getItem("add-todo-btn")


Btn = document.querySelectorAll(".btn");
optionBtn = document.querySelectorAll(".create-todo .options label")
todoItem1 = document.querySelectorAll(".todo-list .todo-item")

for (let i = 0; i < Btn.length; i++) {
    Btn[i].style.border = localStorage.getItem("border-color");
}

for (let i = 0; i < optionBtn.length; i++) {
    optionBtn[i].style.backgroundColor = localStorage.getItem("option");
}



let settingOpenBtn = document.getElementById("setting-btn");
let settingCloseBtn = document.getElementById("setting-close-btn")

settingOpenBtn.addEventListener("click", settingOpen)
settingCloseBtn.addEventListener("click", settingClose)


function settingOpen() {
    document.querySelector(".setting-container").style.display = "block";
}

function settingClose() {
    document.querySelector(".setting-container").style.display = "none";
}


// theme Btn
let lightThemeBtn = document.getElementById("light")
let neonThemeBtn = document.getElementById("neon")
let darkThemeBtn = document.getElementById("dark")
let retroThemeBtn = document.getElementById("retro")

lightThemeBtn.addEventListener("click", setlightTheme);
neonThemeBtn.addEventListener("click", setNeonTheme);
darkThemeBtn.addEventListener("click", setDarkTheme);
retroThemeBtn.addEventListener("click", setRetroTheme)


// theme function
function setlightTheme() {
    localStorage.setItem("theme", "#92B4EC");
    localStorage.setItem("bg-color", "#fff")
    localStorage.setItem("nav-text-color", "#000")
    localStorage.setItem("boxshadow", "1px 1px #eee")
    localStorage.setItem("text-color", "#000")
    localStorage.setItem("border-color", "1.5px solid #eee")
    localStorage.setItem("curr-date", "#92B4EC")
    localStorage.setItem("todo-input", "#FFE69A")
    localStorage.setItem("option", "#92B4EC")
    localStorage.setItem("add-todo-btn", "#92B4EC")
    localStorage.setItem("todo-item", "#FFD24C")
    document.querySelector("footer").style.backgroundColor = localStorage.getItem("theme");
    document.querySelector("body").style.backgroundColor = localStorage.getItem("bg-color")
    document.querySelector(".setting-nav").style.backgroundColor = localStorage.getItem("theme");
    document.querySelector("nav").style.color = localStorage.getItem("nav-text-color");
    document.querySelector("nav i").style.color = localStorage.getItem("nav-text-color");
    document.querySelector("nav").style.boxShadow = localStorage.getItem("boxshadow");
    document.querySelector(".setting").style.boxShadow = localStorage.getItem("boxshadow");
    document.querySelector(".setting").style.boxShadow = localStorage.getItem("boxshadow");
    document.querySelector(".setting").style.color = localStorage.getItem("text-color");
    document.querySelector(".create-todo input").style.backgroundColor = localStorage.getItem("todo-input")
    document.querySelector("#add-todo").style.backgroundColor = localStorage.getItem("add-todo-btn")


    document.querySelector(".Calendar-days div.curr-date").style.backgroundColor = localStorage.getItem("curr-date")

    for (let j = 0; j < optionBtn.length; j++) {
        optionBtn[j].style.backgroundColor = localStorage.getItem("option")

    }

    for (let i = 0; i < Btn.length; i++) {
        Btn[i].style.border = localStorage.getItem("border-color");
    }

    for (let i = 0; i < todoItem1.length; i++) {
        todoItem1[i].style.backgroundColor = localStorage.getItem("todo-item");
    }

}


function setNeonTheme() {
    localStorage.setItem("theme", "#FF67E7");
    localStorage.setItem("bg-color", "#fff")
    localStorage.setItem("nav-text-color", "#000")
    localStorage.setItem("boxshadow", "1px 1px #eee")
    localStorage.setItem("text-color", "#000")
    localStorage.setItem("border-color", "1.5px solid #eee")
    localStorage.setItem("curr-date", "#C400FF")
    localStorage.setItem("todo-input", "#0CECDD")
    localStorage.setItem("option", "#FF67E7")
    localStorage.setItem("add-todo-btn", "#C400FF")
    localStorage.setItem("todo-item", "#FFF338")

    document.querySelector("footer").style.backgroundColor = localStorage.getItem("theme");
    document.querySelector("body").style.backgroundColor = localStorage.getItem("bg-color")
    document.querySelector(".setting-nav").style.backgroundColor = localStorage.getItem("theme");
    document.querySelector("nav").style.color = localStorage.getItem("nav-text-color");
    document.querySelector("nav i").style.color = localStorage.getItem("nav-text-color");
    document.querySelector("nav").style.boxShadow = localStorage.getItem("boxshadow");
    document.querySelector(".setting").style.boxShadow = localStorage.getItem("boxshadow");
    document.querySelector(".setting").style.boxShadow = localStorage.getItem("boxshadow");
    document.querySelector(".setting").style.color = localStorage.getItem("text-color");
    document.querySelector(".create-todo input").style.backgroundColor = localStorage.getItem("todo-input")
    document.querySelector("#add-todo").style.backgroundColor = localStorage.getItem("add-todo-btn")

    for (let j = 0; j < optionBtn.length; j++) {
        optionBtn[j].style.backgroundColor = localStorage.getItem("option")

    }

    
    for (let i = 0; i < todoItem1.length; i++) {
        todoItem1[i].style.backgroundColor = localStorage.getItem("todo-item");
    }

    document.querySelector(".Calendar-days div.curr-date").style.backgroundColor = localStorage.getItem("curr-date")
    for (let i = 0; i < Btn.length; i++) {
        Btn[i].style.border = localStorage.getItem("border-color");
    }

}

function setDarkTheme() {
    const Btn = document.querySelectorAll(".btn");
    localStorage.setItem("theme", "#4C0070");
    localStorage.setItem("bg-color", "#160040")
    localStorage.setItem("nav-text-color", "#fff")
    localStorage.setItem("boxshadow", "1px 1px #4C0070")
    localStorage.setItem("text-color", "#fff")
    localStorage.setItem("curr-date", "#79018C")
    localStorage.setItem("border-color", "1.5px solid #4C0070")
    localStorage.setItem("todo-input", "#79018C")
    localStorage.setItem("option", "#9A0680")
    localStorage.setItem("add-todo-btn", "#79018C")
    localStorage.setItem("todo-item", "#FBD6D2")

    document.querySelector("footer").style.backgroundColor = localStorage.getItem("theme");
    document.querySelector("body").style.backgroundColor = localStorage.getItem("bg-color")
    document.querySelector(".setting-nav").style.backgroundColor = localStorage.getItem("theme");
    document.querySelector("nav").style.color = localStorage.getItem("nav-text-color");
    document.querySelector("nav i").style.color = localStorage.getItem("nav-text-color");
    document.querySelector("nav").style.boxShadow = localStorage.getItem("boxshadow");
    document.querySelector(".setting").style.boxShadow = localStorage.getItem("boxshadow");
    document.querySelector(".setting").style.boxShadow = localStorage.getItem("boxshadow");
    document.querySelector(".setting").style.color = localStorage.getItem("text-color");
    document.querySelector(".Calendar-days div.curr-date").style.backgroundColor = localStorage.getItem("curr-date")
    document.querySelector(".create-todo input").style.backgroundColor = localStorage.getItem("todo-input")
    document.querySelector("#add-todo").style.backgroundColor = localStorage.getItem("add-todo-btn")

    for (let j = 0; j < optionBtn.length; j++) {
        optionBtn[j].style.backgroundColor = localStorage.getItem("option")

    }

    
    for (let i = 0; i < todoItem1.length; i++) {
        todoItem1[i].style.backgroundColor = localStorage.getItem("todo-item");
    }

    for (let i = 0; i < Btn.length; i++) {
        Btn[i].style.border = localStorage.getItem("border-color");
    }

}



function setRetroTheme() {
    localStorage.setItem("theme", "#197163");
    localStorage.setItem("bg-color", "#065446")
    localStorage.setItem("nav-text-color", "#fff")
    localStorage.setItem("boxshadow", "1px 1px #197163")
    localStorage.setItem("text-color", "#fff")
    localStorage.setItem("curr-date", "#158467")
    localStorage.setItem("border-color", "1.5px solid #197163")
    localStorage.setItem("todo-input", "#197163")
    localStorage.setItem("option", "#158467")
    localStorage.setItem("add-todo-btn", "#065446")
    localStorage.setItem("todo-item", "#FADCAC")

    document.querySelector("footer").style.backgroundColor = localStorage.getItem("theme");
    document.querySelector("body").style.backgroundColor = localStorage.getItem("bg-color")
    document.querySelector(".setting-nav").style.backgroundColor = localStorage.getItem("theme");
    document.querySelector("nav").style.color = localStorage.getItem("nav-text-color");
    document.querySelector("nav i").style.color = localStorage.getItem("nav-text-color");
    document.querySelector("nav").style.boxShadow = localStorage.getItem("boxshadow");
    document.querySelector(".setting").style.boxShadow = localStorage.getItem("boxshadow");
    document.querySelector(".setting").style.boxShadow = localStorage.getItem("boxshadow");
    document.querySelector(".setting").style.color = localStorage.getItem("text-color");
    document.querySelector(".Calendar-days div.curr-date").style.backgroundColor = localStorage.getItem("curr-date")

    document.querySelector(".create-todo input").style.backgroundColor = localStorage.getItem("todo-input")
    document.querySelector("#add-todo").style.backgroundColor = localStorage.getItem("add-todo-btn")

    for (let j = 0; j < optionBtn.length; j++) {
        optionBtn[j].style.backgroundColor = localStorage.getItem("option")

    }

    
    for (let i = 0; i < todoItem1.length; i++) {
        todoItem1[i].style.backgroundColor = localStorage.getItem("todo-item");
    }

    for (let i = 0; i < Btn.length; i++) {
        Btn[i].style.border = localStorage.getItem("border-color");
    }

}





