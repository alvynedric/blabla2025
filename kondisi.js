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
let power = 49;

if (power > 100) {
    console.log("Character is Expert");
}else if (power > 70 && power <=100) {
    console.log("Character is Pro");
}else if (power > 50 && power <=70) {
    console.log("Character is Normal");
}else if (power > 30 && power <= 50) {
    console.log("Character is Basic");
}else if (power <= 30) {
    console.log("Character is Beginner");
}