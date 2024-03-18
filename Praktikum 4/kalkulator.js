const btn = document.querySelectorAll("button");
const hasil = document.getElementById("hasil");

for(let i =0; i<btn.length; i++){
    btn[i].addEventListener("click", () =>{
        
        const btnValue = btn[i].textContent;
        if (btnValue === "C"){
            hapus();
        } else if (btnValue === "="){
            hitung();
        } else {
            add(btnValue);
        }
    });
}

function hapus(){
    hasil.value="";
}

function hitung(){
    hasil.value =eval(hasil.value);
}

function add(btnValue){
    hasil.value = hasil.value + btnValue;
}