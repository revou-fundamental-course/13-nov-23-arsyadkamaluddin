const tombol = document.querySelector("#tombol");

tombol.addEventListener("click", () => {
  gantiGambar();
});
gambarNow = 1;
function gantiGambar() {
  urutanGambar();
  const gambar = document.querySelector(".figure");
  gambar.style.backgroundImage = `url("assets/${gambarNow}.jpg")`;
  gambar.classList.add("figureFoto");
  setTimeout(function () {
    gambar.classList.remove("figureFoto");
  }, 800);
}
function urutanGambar() {
  const banyakGambar = 4;
  gambarNow = gambarNow > banyakGambar - 1 ? 1 : gambarNow + 1;
}
setInterval(() => tombol.click(), 3000);

function validasiInput() {
  const nama = document.querySelector("input[name='nama']").value != "";
  const email =
    document.querySelector("input[name='email']").value.includes("@") &&
    document.querySelector("input[name='email']").value.includes(".");
  const tertarik =
    document.querySelector("select[name='tertarik']").value !=
    "What are you interested in ?";
  return [nama, email, tertarik];
}

function cekSatuInput(valid) {
  const semuaInput = document.querySelectorAll(".invalid");
  if (!valid.includes(false)) {
    document.forms["formulir"].submit();
  }
  valid.forEach((e, i) => {
    semuaInput[i].style.display = e == false ? "block" : "none";
  });
}
document.forms["formulir"].addEventListener("submit", function (e) {
  e.preventDefault();
  cekSatuInput(validasiInput());
});
