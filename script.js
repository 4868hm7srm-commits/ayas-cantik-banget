// PASSWORD
function cekPassword() {
    const password = document.getElementById("password").value.trim();
    if (password === "020225") {
        window.location.href = "halo.html";
    } else {
        alert("Password salah 😢");
    }
}

// MUSIK
const musik = new Audio("assets/musik.mp3");
musik.loop = true;

function mulaiMusik() {
    musik.play();
}

// EFEK MENGETIK
function efekKetik(teks, elemenId, kecepatan = 45) {
    let i = 0;
    const elemen = document.getElementById(elemenId);
    elemen.innerHTML = "";

    function ketik() {
        if (i < teks.length) {
            elemen.innerHTML += teks.charAt(i);
            i++;
            setTimeout(ketik, kecepatan);
        }
    }
    ketik();
}
