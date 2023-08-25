const urunler = [
  {
    id: 0,
    categoryID: 0,
    isim: "BEJ KANVAS ÇANTA",
    img: "./assets/img/canta1.jpg",
    fiyat: {
      tutar: "300",
      cins: "TL",
    },
  },
  {
    id: 1,
    categoryID: 0,
    isim: "The Victoria Sırt Çantası",
    img: "./assets/img/canta2.jpg",
    fiyat: {
      tutar: "3000",
      cins: "TL",
    },
  },
  {
    id: 2,
    categoryID: 0,
    isim: "Beyaz Bisiklet Yaka Basic T-Shirt",
    img: "./assets/img/tshirt1.jpg",
    fiyat: {
      tutar: "400",
      cins: "TL",
    },
  },
  {
    id: 3,
    categoryID: 0,
    isim: "Fenerium | Erkek Beyaz Tribün Basic Bisiklet Yaka",
    img: "./assets/img/tshirt2.jpg",
    fiyat: {
      tutar: "800",
      cins: "TL",
    },
  },
  {
    id: 4,
    categoryID: 0,
    isim: "Erkek Tactical Outdoor Pantalon",
    img: "./assets/img/pantalon1.jpg",
    fiyat: {
      tutar: "900",
      cins: "TL",
    },
  },
  {
    id: 5,
    categoryID: 0,
    isim: "Tam İspanyol Paça Pantalon",
    img: "./assets/img/pantalon2.jpg",
    fiyat: {
      tutar: "500",
      cins: "TL",
    },
  },
  {
    id: 6,
    categoryID: 1,
    isim: "Philips 43PUS7607 43'' UHD Smart LED TV",
    img: "./assets/img/tv1.jpg",
    fiyat: {
      tutar: "13300",
      cins: "TL",
    },
  },
  {
    id: 7,
    categoryID: 1,
    isim: "Xiaomi TV P1E 65 İnç",
    img: "./assets/img/tv2.png",
    fiyat: {
      tutar: "9800",
      cins: "TL",
    },
  },
  {
    id: 8,
    categoryID: 5,
    isim: "Xiaomi Redmi Watch 2 Lite",
    img: "./assets/img/saat1.jpg",
    fiyat: {
      tutar: "600",
      cins: "TL",
    },
  },
  {
    id: 9,
    categoryID: 2,
    isim: "Saniyeli Mekanizma Ofis Tipi Duvar Saati",
    img: "./assets/img/saat2.jpg",
    fiyat: {
      tutar: "200",
      cins: "TL",
    },
  },
  {
    id: 10,
    categoryID: 6,
    isim: "UCL Pro İstanbul Top",
    img: "./assets/img/top1.jpg",
    fiyat: {
      tutar: "4200",
      cins: "TL",
    },
  },
  {
    id: 11,
    categoryID: 6,
    isim: "Öğretici Futbol Topu",
    img: "./assets/img/top2.jpg",
    fiyat: {
      tutar: "650",
      cins: "TL",
    },
  },
];

if (!localStorage.getItem("sepet")) {
  localStorage.setItem("sepet", "");
}

const urunlerCardDiv = document.querySelector("#shoppingCards");
var sepeteEklenenler = localStorage.getItem("sepet").split(",");
var siparisTutari = 0;

function cardCreate(index) {
  var urunlerCard = document.createElement("div");
  const urunlerImg = document.createElement("img");
  const urunlerName = document.createElement("p");
  const urunlerFiyat = document.createElement("p");
  const urunlerButton = document.createElement("button");
  urunlerCard.setAttribute(
    "class",
    "d-flex gap-1 flex-column w-25 justify-content-center align-items-center shoppingCard p-3 text-center"
  );
  urunlerButton.setAttribute("class", "btn btn-success");
  urunlerButton.setAttribute("buttonID", index);
  urunlerName.setAttribute("id", "name");
  urunlerImg.src = urunler[index].img;
  urunlerName.innerHTML = urunler[index].isim;
  urunlerFiyat.innerHTML =
    urunler[index].fiyat.tutar + " " + urunler[index].fiyat.cins;
  urunlerButton.innerHTML = "Sepete Ekle";
  if (urunlerCardDiv) {
    urunlerCardDiv.appendChild(urunlerCard);
  }
  urunlerCard.appendChild(urunlerImg);
  urunlerCard.appendChild(urunlerName);
  urunlerCard.appendChild(urunlerFiyat);
  urunlerCard.appendChild(urunlerButton);
  urunlerButton.addEventListener("click", function sepeteEkle() {
    const buttonID = this.getAttribute("buttonID");
    sepeteEklenenler.push(urunler[buttonID].id);
    localStorage.setItem((key = "sepet"), (value = sepeteEklenenler));
  });
}

function searchLetter() {
  urunlerCardDiv.innerHTML = "";
  const input = document.getElementById("search").value.toUpperCase();

  for (let index = 0; index < urunler.length; index++) {
    const isimUpper = urunler[index].isim.toUpperCase();

    if (isimUpper.includes(input)) {
      cardCreate(index);
    }
  }
}

for (let index = 0; index < urunler.length; index++) {
  cardCreate(index);
}

function filterCategory() {
  urunlerCardDiv.innerHTML = "";
  for (let index = 0; index < urunler.length; index++) {
    if (urunler[index].categoryID == 0) {
      cardCreate(index);
    }
  }
}

function filterCategory1() {
  urunlerCardDiv.innerHTML = "";
  for (let index = 0; index < urunler.length; index++) {
    if (urunler[index].categoryID == 1) {
      cardCreate(index);
    }
  }
}

function filterCategory2() {
  urunlerCardDiv.innerHTML = "";
  for (let index = 0; index < urunler.length; index++) {
    if (urunler[index].categoryID == 2) {
      cardCreate(index);
    }
  }
}

function filterCategory3() {
  urunlerCardDiv.innerHTML = "";
  for (let index = 0; index < urunler.length; index++) {
    if (urunler[index].categoryID == 3) {
      cardCreate(index);
    }
  }
}

function filterCategory4() {
  urunlerCardDiv.innerHTML = "";
  for (let index = 0; index < urunler.length; index++) {
    if (urunler[index].categoryID == 4) {
      cardCreate(index);
    }
  }
}

function filterCategory5() {
  urunlerCardDiv.innerHTML = "";
  for (let index = 0; index < urunler.length; index++) {
    if (urunler[index].categoryID == 5) {
      cardCreate(index);
    }
  }
}

function filterCategory6() {
  urunlerCardDiv.innerHTML = "";
  for (let index = 0; index < urunler.length; index++) {
    if (urunler[index].categoryID == 6) {
      cardCreate(index);
    }
  }
}

function filterCategory7() {
  urunlerCardDiv.innerHTML = "";
  for (let index = 0; index < urunler.length; index++) {
    if (urunler[index].categoryID == 7) {
      cardCreate(index);
    }
  }
}

function filterCategory8() {
  urunlerCardDiv.innerHTML = "";
  for (let index = 0; index < urunler.length; index++) {
    if (urunler[index].categoryID == 8) {
      cardCreate(index);
    }
  }
}

for (let index = 0; index < sepeteEklenenler.length - 1; index++) {
  const sepetimDiv = document.querySelector("#sepetim");
  const sepettekiler = document.createElement("div");
  sepettekiler.setAttribute(
    "class",
    "listBasket d-flex gap-3 justify-content-around align-items-center bg-light rounded-3 p-3"
  );

  if (sepetimDiv) {
    sepetimDiv.appendChild(sepettekiler);
  }

  const sepetIMG = document.createElement("img");
  sepetIMG.src = urunler[sepeteEklenenler[index + 1]]?.img;
  sepettekiler.appendChild(sepetIMG);

  const urunAdi = document.createElement("p");
  urunAdi.innerHTML = urunler[sepeteEklenenler[index + 1]]?.isim;
  sepettekiler.appendChild(urunAdi);

  const urunFiyati = document.createElement("p");
  urunFiyati.innerHTML =
    urunler[sepeteEklenenler[index + 1]]?.fiyat.tutar +
    urunler[sepeteEklenenler[index + 1]]?.fiyat.cins;
  sepettekiler.appendChild(urunFiyati);

  const urunSilme = document.createElement("i");
  urunSilme.setAttribute("class", "fa-solid fa-trash");
  urunSilme.setAttribute("deleteID", index + 1);
  sepettekiler.appendChild(urunSilme);

  urunSilme.addEventListener("click", function () {
    const silinenUrun = this.getAttribute("deleteID");
    const eskiSepet = localStorage.getItem("sepet").split(",");
    eskiSepet.splice(silinenUrun, 1);
    localStorage.setItem("sepet", eskiSepet);
    location.reload();
  });

  siparisTutari =
    siparisTutari + parseInt(urunler[sepeteEklenenler[index + 1]]?.fiyat.tutar);
  const siparisTutariP = document.getElementById("siparisTutariP");
  siparisTutariP.innerText =
    siparisTutari + " " + urunler[sepeteEklenenler[index + 1]]?.fiyat.cins;

  const kargoUcreti = document.getElementById("kargoUcreti");
  if (siparisTutari > 500) {
    kargoUcreti.innerHTML = "500 TL ve Üzeri Kargo Ücretsiz";
    kargoUcreti.style.textDecoration = "underline";
  }
  const toplamTutar = document.getElementById("toplamTutar");
  if (siparisTutari > 500) {
    toplamTutar.innerHTML = siparisTutari + " " + "TL";
  } else {
    toplamTutar.innerHTML = siparisTutari + 30 + " " + "TL";
  }
}

function odemeyiTamamla(){
  window.location.href = "./odemeTamamlandi.html";
}