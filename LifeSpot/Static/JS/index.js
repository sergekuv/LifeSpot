console.log('-- index.js started --');


function HandleSession() {
    console.log('-- HandleSession called --');
    let userAgent = window.navigator.userAgent;
    console.log(userAgent);
    let myMap = new Map();
    myMap.set("userAgent", userAgent); 

    let age = prompt('Welcome to the site. Please enter your age: ');
    if (!(age >= 0)) {
        alert("Is seems you are too young - redirecting to ya.ru");
        window.location.href = "http://www.ya.ru";
    }
    myMap.set("age", age);
    myMap.set("time", new Date());

    myMap.forEach((value, key, map) => {
        console.log(key, ": ", value);
    });

   return userAgent;
}

function PrintSession(session) {
    console.log('-- PrintSession called --');
    console.log(session);
}

function AskForName() {
    let name = prompt('Please enter your name');
    alert(`Hello, ${name} (there are ${name.length} in your name`);
}

function CountPageElements() {
    let arr2 = document.getElementsByTagName("*");
    //debugger
    for (let i = 0; i < arr2.length; i++) {
        console.log(`${arr2[i]} is ${arr2[i].className}`)
    }
}

function FilterVideos1() {
    let userInput = document.getElementById("userInput").value;
    //alert(`${document.getElementById("userInput").value}`);
    let videos = document.getElementsByClassName("video-title");
    console.log(videos.length);
    //videos.forEach(function (item, index, array) {
    //    console.log(`${item.className}`);
    //});
    for (let i = 0; i < videos.length; i++) {
        console.log(videos[i].textContent);
    }
}

//let enteredFilterText;
//const InputParseFunction = function () {
//    enteredFilterText = document.getElementById('userInput').value.toLowerCase();
//    console.log(enteredFilterText); FilterVideos1()
//}


function FilterVideos(userInput) {

    //let userInput = document.getElementById("userInput").value.toLowerCase();
    console.log(`-- FilterVideos ( ${userInput} ) started --`);

    let videos = document.getElementsByClassName('video-container');

    for (let i = 0; i < videos.length; i++) {
        let containerChilds = videos[i];
        let description = containerChilds.getElementsByClassName('video-title')[0];
        console.log(description.textContent);
        if (description.textContent.toLowerCase().includes(userInput)) {
            console.log('+ ' + description.textContent);
            videos[i].style.display = "inline-block";
        } else {
            console.log('- ' + description.textContent);
            videos[i].style.display = "none";
        }
    }
}

function FilterVideos1() {

    console.log('-- FilterVideos1 --');

    let videos = document.getElementsByClassName('video-container');

    for (let i = 0; i < videos.length; i++) {
        let containerChilds = videos[i];
        let description = containerChilds.getElementsByClassName('video-title')[0];
        console.log(description.textContent);
        if (description.textContent.toLowerCase().includes(enteredFilterText)) {
            console.log('+ ' + description.textContent);
            videos[i].style.display = "inline-block";
        } else {
            console.log('- ' + description.textContent);
            videos[i].style.display = "none";
        }
    }
}


function askToSubscribe(){
    console.log(a + b);
}


//setTimeout({alert('Will you Subscribe?')}, 7000); // задержка 7 секунда