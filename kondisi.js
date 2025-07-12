/**
 * LATIHAN KONDISI
 */
// let umur = 17;
// let tinggi = 170;
// let berat = 60;

// if(umur >=17)
//     if(tinggi >= 165)
//     if(berat >=65) {
//         console.log("Anda Memenuhi Syarat");
//     }else {
//         console.log("Anda Tidak Memenuhi Syarat");
//     }

/**
 * LATIHAN if dan else dan else if
 * let angka = 1;

if(angka === 1) {
    console.log ("Angka 1");
}else{
    console.log("Angka Selain 1");
}

let number = 4;

if(number < 2) {
    console.log("Angka di bawah 2");
}else if(number > 2) {
    console.log("Angka di atas 2");
}else{
    console.log("Angka 2");
}
*/
// let pilihan = 'teh';
//     switch(pilihan) {
//         case 'teh':
//             console.log("Pilihan Anda Teh");
//             break;
//         case 'kopi':
//             console.log("Pilihan Anda Kopi");
//             break;
//         default:
//             console.log("Pilihan Anda Tidak Ada");
//     }
/**
 * FOR AND WHILE
 */
// BEGIN
// for(var i = 0; i <= 5; i++) {
//     console.log(i);
// }
// // END

// // BEGIN
// var i = 0;
// while (i <= 5){
//     console.log(i);
//     i++;
// }
// END
// for (i = 1; i <= 5; i++) {
//     baris = "";
// for (j = 1; j <= i; j++) {
//     baris += j;
// }
// console.log(baris);
// }
/**
 * CEK BILANGAN GANJIL GENAP
 * ALGORITMA
 * 1. buat variable angka
 * 2. cek apakah angka tersebut habis dibagi 2
 *  2.1 jika habis maka bilangan genap
 *  2.2 jika tidak habis maka bilangan ganjil
 * 3. Cetak Hasil
 *
 * PSEUDOCODE
 * BEGIN
 * 1. STORE angka WITH ANY NUMBER
 * 2. IF angka MOD 2 = 0 THEN
 *      PRINT "genap"
 * 3. ELSE IF angka MOD 2 = 1 THEN
 *      PRINT "ganjil"
 * END IF
 * END
 */
// let angka = 10;
// if(angka % 2 === 0) {
//     console.log(angka + " adalah Bilangan Genap");
// }else {
//     console.log(angka + " adalah Bilangan Ganjil");
// }
// STUDY CASE 2
// let choose = "sweet tea";
// switch(choose) {
//     case 'sweet tea':
//         console.log("You Choose Sweet Tea");
//         break;
//     case 'plain tea':
//         console.log("You Choose Plain Tea");
//         break;
//     case 'Boba':
//         console.log("You Choose Boba");
//         break;
//     case 'milk coffee':
//         console.log("You Choose Milk Coffee");
//         break;
//     case 'choco ice':
//         console.log("You Choose Choco Ice");
//         break;
//     default :
//     console.log("Not Ready");
// }

/**
 * STUDY CASE 3
 */
//BEGIN
// let power = 49;
// let status;
// if (power > 100) {
//     status = "Expert";
// }else if (power >=70 && power <= 100) {
//     status = "Pro";
// }else if (power >=50 && power < 70) {
//     status = "Normal";
// }else if (power >= 30 && power < 50) {
//     status = "Basic";
// }else {
//     status = "Beginner";
// }
// console.log("Character is " + status);
//END

//BEGIN
// let power = 49;

// if (power > 100) {
//     console.log("Character is Expert");
// }else if (power > 70 && power <=100) {
//     console.log("Character is Pro");
// }else if (power > 50 && power <=70) {
//     console.log("Character is Normal");
// }else if (power > 30 && power <= 50) {
//     console.log("Character is Basic");
// }else if (power <= 30) {
//     console.log("Character is Beginner");
// }
//END

//STUDY CASE 4
// let access = "public";
// let level = 6;
// if(access === "") {
// console.log("Input Access")
// }else {
// switch(access) {
// case "public":
// if(level < 5) {
// console.log("Public di bawah 5");
// }else if(level > 5) {
// console.log("Public di atas 5");
// }else {
// console.log("Public Five");
// }
// break;
// case "private":
// if(level < 5) {
// console.log("Private di bawah 5");
// }else if(level > 5) {
// console.log("Private di atas 5");
// }else {
// console.log("Private is five");
// }
// break;
// case "protected":
// if(level < 5) {
// console.log("Protected di bawah 5");
// }else if(level > 5) {
// console.log("Protected di atas 5");
// }else {
// console.log("Protected is five");
// }
// break;
// default:
// console.log("Access is not defined");
// }
// }
//END

//STUDY CASE 5

// Data input
// let status = "WNI"; // atau "WNI"
// let lamaTinggal = 3; // dalam tahun
// let usia = 25;
// let wilayah = ""; // "Barat", "Tengah", "Timur" (hanya untuk WNI)
// let totalPembelian = 105000;
// let diskonPersen = 0;

// // Logika diskon berdasarkan status
// if (status === "WNA") {
//   if (lamaTinggal < 3) {
//     diskonPersen = 0;
//   } else if (lamaTinggal >= 3 && lamaTinggal <= 5) {
//     if (usia < 21) {
//       diskonPersen = 10;
//     } else {
//       diskonPersen = 5;
//     }
//   } else if (lamaTinggal > 5) {
//     if (usia < 21) {
//       diskonPersen = 5;
//     } else {
//       diskonPersen = 2.5;
//     }
//   }
// } else if (status === "WNI") {
//   switch (wilayah.toLowerCase()) {
//     case "barat":
//       diskonPersen = 10;
//       break;
//     case "tengah":
//       diskonPersen = 15;
//       break;
//     case "timur":
//       diskonPersen = 17.5;
//       break;
//     default:
//       console.log("Wilayah tidak dikenal untuk WNI");
//   }
// } else {
//   console.log("Status pembeli tidak valid");
// }

// // Hitung diskon dan total bayar
// let diskon = (diskonPersen / 100) * totalPembelian;
// let totalBayar = totalPembelian - diskon;

// // Tampilkan hasil
// console.log(`Warga merupakan : ${status} `);
// console.log(`Lama tinggal : ${lamaTinggal} tahun`);
// console.log(`Usia: ${usia} tahun`);
// console.log(`Total Pembelian: Rp. ${totalPembelian.toLocaleString()}`);
// console.log(`Diskon: ${diskonPersen}%`);
// console.log(`Total Bayar: Rp. ${totalBayar.toLocaleString()}`);

// let status = "WNA";
// let lamaTinggal = 4;
// let usia = 25;
// let wilayah = "";
// let totalPembelian = 100000;
// let diskonPersen = 0;

// if(status === "WNA"){
//   if(lamaTinggal < 3){
//     diskonPersen = 0;
//   }else{
//     if(usia < 21) {
//       diskonPersen = 10;
//     }else{
//       diskonPersen = 35;
//     }
//     }
//   } else if(status === "WNI"){
//     switch(wilayah){
//       case "barat":
//         diskonPersen = 15;
//         break;
//       case "tengah":
//         diskonPersen = 30;
//         break;
//       case "timur":
//       diskonPersen = 40;
//       break;
//       default:
//         console.log("Wilayah Tidak Valid");
//     }
//     }else{
//       console.log("Status Tidak Valid");
//     }
// let diskon = (diskonPersen / 100) * totalPembelian;
// let totalBayar = totalPembelian - diskon;
// console.log(`status : ${status}`);
// console.log(`lama tinggal : ${lamaTinggal}`);
// console.log(`Usia : ${usia}`);
// console.log(`Total Pembelian :${totalPembelian}`);
// console.log(`Diskon :${diskonPersen}%`);
// console.log(`Total Bayar : ${totalBayar}`);