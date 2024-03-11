function cal(btn_id) {
    bil1 = parseFloat(document.getElementById("bil1").value)
    bil2 = parseFloat(document.getElementById("bil2").value)
    
    if (isNaN(bil1) || isNaN(bil2)) {
        window.alert("Tolong masukkan angka");
    } else if (btn_id == "kurang") {
        var hasil = bil1 - bil2
        document.getElementById("hasil").innerHTML = "Hasil : " + hasil;
    } else if (btn_id == "tambah") {
        var hasil = bil1 + bil2
        document.getElementById("hasil").innerHTML = "Hasil : " + hasil;
    }
}

