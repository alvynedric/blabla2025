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

// const angkagenap = angka.filter((item)=> item % 2 === 0);
// const angkakurang3 = angka.filter((item)=> item <3);

// console.log(angkagenap);
// console.log(angkakurang3);

// CARI PRODUK YG HARGANYA DIATAS 80000
// const produk = [
//   {
//     nama: "Kemeja",
//     harga: 250000,
//   },
//   {
//     nama: "Celana",
//     harga: 50000,
//   },
//   {
//     nama: "Sepatu",
//     harga: 80000,
//   },
// ];
// // CARI HARGA DIATAS 80000
// const hargaTertinggi = produk.filter((item) => item.harga >= 50000);
// hargaTertinggi.forEach((item) => console.log(`${item.nama} Rp. ${item.harga}`));
// // END
// MENGHASILKAN NAMA DAN HARGA PRODUK
// const arraybaru = produk.map((item) => (`Nama item : ${item.nama} Harga : Rp.${item.harga}`));
// arraybaru.forEach ((item)=>  console.log(item));

// INI CARA UNTUK MENAMBAHKAN ITEM MENGGUNAKAN PUSH
// produk.push ({
//   nama : "Tas",
//   harga : 30000
// })
// console.log(produk)
// // END

// // INI CARA UNTUK MENGHAPUS ITEM YG DITAMBAHKAN MENGGUNAKAN POP
// produk.pop ()
// console.log(produk)
// END

// // Cara Mencari Harga Di Atas 80000
// const produkHargaTinggi = produk.filter((item) => item.harga >= 80000);
// // Cara Memanggilnya
// produkHargaTinggi.forEach((item) => {
//   console.log(`${item.nama} - Rp${item.harga}`);
// });

// MATERI MAP!!!!!
// MEMBUAT ANGKA BARU (ANGKA LAMA DIKALI 2)
// BEGIN
// const angka = [1,2,4,6,8]

// const angkadikali2 = angka.map((item) => item * 2);
// console.log(angkadikali2);
// END

