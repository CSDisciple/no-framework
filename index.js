let clickMe = () => {
    let para = document.getElementById('para');
    para.style.color = 'blue';
    console.log("changed paragraph");
}

let goDark = () => {
    let isBlack = false;


    let bodyBox = document.getElementById('bodyBox');
    bodyBox.style.backgroundColor = "black";

    let bodyColor = bodyBox.style.backgroundColor;
    let paraTag = document.getElementsByTagName('p');
    let listTag = document.getElementsByTagName('li');

    if(bodyColor == 'black'){
        isBlack = true;
        console.log(isBlack);
    }
    for (let i = 0; i < paraTag.length; i++) {
        paraTag[i].style.color = 'white';
    }

    for (let i = 0; i < listTag.length; i++) {
        listTag[i].style.color = 'white';
    }
}

let buttonGoBig = () =>{
    // let getButton = document.getElementsByTagName('button');
    // getButton[0].style.scale = '20';buttonGoBig
}