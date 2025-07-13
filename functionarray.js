/** HOISTING ADALAH MENAIKKAN VAR DI BAWAH KE ATAS
 * CONTOH SEBAGAI BERIKUT
 * BEGIN
 * x = "1";
var x;
console.log(x);
 */

/** NOTE:
 * YANG BISA DIHOISTING HANYA VAR, (LET DAN CONST TIDAK BISA DI HOISTING)
 *
 */

// hello = "Selamat Siang";
// console.log(hello);
// var hello;  // var dinaikkan ke atas
// let a = 10
// let b = 9

// function hitung(){
//     var data = "admin"
//     var nilai = (a+b)
//     var hasil = (`${data} ${nilai}`)
//     return hasil;
// }
// console.log(hitung());

// const angka = [1,2,3,4,5,6]

// const angkagenap = angka.filter((element)=> element % 2 === 0);
// const angkakurang3 = angka.filter((element)=> element <3);

// console.log(angkagenap);
// console.log(angkakurang3);

const produk = [
  {
    nama: "Kemeja",
    harga: 250000,
  },
  {
    nama: "Celana",
    harga: 50000,
  },
  {
    nama: "Sepatu",
    harga: 80000,
  },
];
// cari produk yg harganya 80000 ke atas

// Cara Mencari Harga Di Atas 80000
const produkHargaTinggi = produk.filter((element) => element.harga >= 80000);
// Cara Memanggilnya
produkHargaTinggi.forEach((item) => {
  console.log(`${item.nama} - Rp${item.harga}`);
});
