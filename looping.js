// let i = 0;
// let status = true;
// while (status) {
//   console.log(i);
//   i++;
//   if (i > 5) {
//     status = false;
//   }
// }
// FOR;
// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }
// WHILE;
// i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// END
// BEGIN
// let temp = "";
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     temp += "x";
//   }
//   console.log(temp);
//   temp = "";
// }
// END

// BEGIN
// var murid = [
//   [1, "Vincent", 3.5],
//   [2, "Udin", 3.0],
//   [3, "Mamang", 2.1],
// ];

// for (var i = 0; i < murid.length; i++) {
//   var id = murid[i][0];
//   var nama = murid[i][1];
//   var ipk = murid[i][2];
//   var status = ipk >= 3.0 ? "Lulus" : "Gagal";

//   console.log(id + ". " + nama + ", IPK = " + ipk + ", " + status);
// }
//END

// BEGIN
// let i = 0;
// let status = true;
// while (status) {
//   console.log(i);
//   i++;
//   if (i > 5) {
//     status = false;
//   }
// }
//END

// FOR
// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }
// END

// WHILE;
// BEGIN
// i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// END

// BUAT LAH CODINGAN YG HASILNYA
// xxx
// xxx
// xxx
// BEGIN
// let temp = "";
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     temp += "x";
//   }
//   console.log(temp);
//   temp = "";
// }
// for (i = 0; i < 5; i++) {
//   for (j = 0; j < i; j++) {}
// }
// END

// PRINT ANGKA 1 - 5 BERURUTAN KE BAWAH
/** RESULT :
 * 1
 * 12
 * 123
 * 1234
 * 12345
 */
// BEGIN
// let temp = "";
// for (i = 1; i <= 5; i++) {
//   temp = "";
//   for (j = 1; j <= i; j++) {
//     temp += j;
//   }
//   console.log(temp);
// }
// END

// PRINT 10 ANGKA GENAP DAN GANJIL PERTAMA //
// BEGIN
// let numb = 10;
// for(let i = 1; i <= numb; i++) {
//     if(i % 2 == 0) {
//         console.log(`${i} adalah genap`);
//     }else{
//         console.log(`${i} adalah ganjil`);
//     }
// }
// END

//
// CEK FAKTOR BILANGAN
// BEGIN
// let num = 15;
// let factor = 0;

// for (let i = 1; i <= num; i++) {
//   if (num % i === 0) {
//     // factor = factor + 1;
//     // factor += 1;
//     factor++;
//   }
// }
// console.log(`Faktor dari ${num} adalah ${factor}`);
// END

// CEK BILANGAN PRIMA
// BEGIN

let num = 107;
let factor = 0;

for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    // factor = factor + 1;
    // factor += 1;
    factor++;
  }
}
if (factor === 2) {
  console.log(`${num} adalah bilangan prima`);
} else {
  console.log(`${num} bukan bilangan prima`);
}
// END