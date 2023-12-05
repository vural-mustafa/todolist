let inputs = document.getElementById("text");
let text = document.querySelector(".texti");

function Add(){
    if(inputs.value == ""){
        alert("Lütfen alanı doldur");
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click",remove);
        function remove(){
            newEle.remove();
        }
    }
}
