
let img1 = document.getElementById("img001");
let img2 = document.getElementById("img01");
let img3 = document.getElementById("img03");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let open1 = document.getElementById("id1");
let close1 = document.getElementById("id01");
let food1 = document.getElementById("infoo");
let open2 = document.getElementById("id2");
let close2 = document.getElementById("id02");
let food2 = document.getElementById("infoo2");
let open3 = document.getElementById("id3");
let close3 = document.getElementById("id03");
let food3 = document.getElementById("infoo3");




btn2.addEventListener("click",change);
btn1.addEventListener("click",change);


function change(){

    let temp = img2.src;
    img2.src = img03.src;
    img3.src = img1.src;
    img1.src = temp

}



function change(){

    let temp = img1.src;
    img1.src = img3.src;
    img3.src = img2.src;
    img2.src = temp;   

}


function button_open(){

    open1.classList.add("hidden");
    food1.classList.remove("hidden");
    close1.classList.remove("hidden");         
}

function button_close(){

    close1.classList.add("hidden");
    food1.classList.add("hidden");
    open1.classList.remove("hidden");
         
}

function button_open2(){

    open2.classList.add("hidden");
    food2.classList.remove("hidden");
    close2.classList.remove("hidden");
    


    
       
         
}

function button_close2(){

    close2.classList.add("hidden");
    food2.classList.add("hidden");
    open2.classList.remove("hidden");
}

function button_open3(){

    open3.classList.add("hidden");
    food3.classList.remove("hidden");
    close3.classList.remove("hidden");




}



function button_close3(){

    close3.classList.add("hidden");
    food3.classList.add("hidden");
    open3.classList.remove("hidden");
}