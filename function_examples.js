// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyon yap

function kelimeYazdir(kelime,adet){
for (let i=0; i < adet; i++){
    console.log(kelime)
}
}

kelimeYazdir("Şampiyon Cimbom!",2)

// 2- Dikdörtgenin alan ve çevresini hesaplayan bir fonksiyon yapalım

function alanCevreHesapla(kısa,uzun) {
    let alan = kısa * uzun;
    let cevre = (kısa + uzun) *2;

   return `alan : ${alan} çevre : ${cevre}`; 
}

let sonuc = alanCevreHesapla(7,10);

console.log(sonuc)

// 3- Yazı tura fonksiyon

function yaziTuraAt(){
    let random = Math.random()
    if (random < 0.5){
        console.log("Yazı")
    }
    else{
        console.log("Tura")
    }
    console.log(random)
}

console.log("Yazı mı Tura mı ?")

yaziTuraAt();

// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde ekrana yazdırsın

function tamBolenler(sayi){
    let sayilar = [];

    for (let i=2; i < sayi; i++){
        if (sayi % i == 0){
            sayilar.push(i);
        }
    }

    return sayilar;
}


console.log(tamBolenler(10))

// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.

function toplam(){
let sonuc = 0;

for (let i = 0; i < arguments.length; i++)

sonuc += arguments[i]

return sonuc
}

console.log(toplam(4,6,6,7,8,89,2))