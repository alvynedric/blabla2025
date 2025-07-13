// // CONTOH ARRAY
// let numbers = [1,2,3,4,5]
// let items = ["laptop", "hp", "mouse"]
// let students = ["name", 3.50, true]
// // Index array dimulai dari 0 1 2
// console.log(numbers[1])
// console.log(items[1])
// console.log(students[1])

// Membuat Coffe list
// BEGIN
// let coffees = ["Arabica", "Robusta", "Mix Blend"];

// console.log("Coffee list :");
// for (var i = 0; i < coffees.length; i++) {
//   console.log(i + 1 + ". " + coffees[i]);
// }
// END

// ARRAY MULTIDIMENSIONAL
// BEGIN
// let scores = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90]
// ];
// console.log(scores[0][1]);
// END

/**
 * BUAT CODINGAN YG HASILNYA
 * 1. Vincent, IPK = 3.5, Lulus
 * 2. Udin, IPK = 3.0, Lulus
 * 3. Mamang, IPK = 2.1, Gagal
 (Syarat lulus IPK minimum 3,0)
 */
// BEGIN
var murid = [
  [1, "Vincent", 3.5],
  [2, "Udin", 3.0],
  [3, "Mamang", 2.1]
];

for(var i = 0; i < murid.length; i++) {
    var id = murid[i][0];
    var nama = murid[i][1];
    var ipk = murid[i][2];

var status = "";
if(ipk >= 3.0) {
    status = "Lulus";
}else{
    status = "Tidak Lulus";
}
console.log(id+ ". " + nama + " "+ "IPK : " + ipk +" " + status);
}
// END

// HITUNG JUMLAH DARI SEMUA VALUE DAN CARI RATA RATA NYA!!
// let scores = [5, 2, 3, 1, 7, 8, 10, 12, 17];

// let sum = 0;
// for (let i = 0; i < scores.length; i++) {
//   sum = sum + scores[i];
// }

// let mean = sum / scores.length;

// // Tampilkan hasil dengan 2 angka di belakang koma
// console.log("Sum = " + sum);
// console.log("Mean = " + mean.toFixed(2));
// END

// CARA MEMECAH KATA MENGGUNAKAN .SPLIT DAN MANUAL
// VERSI .SPLIT
// BEGIN
// var str = "minum";
// var result = str.split('');

// console.log(result);
// END

// VERSI MANUAL
// var str = "makan";
// var temp = [];
// for (var i = 0; i <str.length; i++) {
//     temp.push(str[i]);
// }console.log(temp);
// END

// let watches1 = ["Swiss Army", "Dublot", "Patek Philippe"];
// let watches2= ["A", "B", "C", "D", "E"];

// let result = "Saya punya ";
// for(let a = 0; a < watches1.length; a+= 1) {
//     let lastIndex = watches1.length - 1;
//     if(a !== lastIndex) {
//         result += watches1[a] + ", ";
//     }else {
//         result += " dan " + watches1[a] + ".";
//     }
// }
// console.log(result);