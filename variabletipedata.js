/*STUDY CASE 1
ALGORITMA 
LUAS PERMUKAAN BALOK

1. buat variable p, l ,t
2. hitung luas = 2* (p * l + p * t + l * t) 
3. cetak hasilnya

PSEUDOCODE
1. STORE p 
2. STORE l
3. STORE t
4. SET luasPermukaanBalok TO 2 MUL (p MUL l) ADD (p MUL t) ADD (l MUL t)
5. PRINT luasPermukaanBalok
END */

// let p = 10;
// let l = 5;
// let t = 3;
// let luasPermukaanBalok = 2 * (p * l + p * t + l * t);
// console.log(luasPermukaanBalok);



/* STUDY CASE 2 
ALGORITMA
MASSA JENIS SUATU BENDA
1. masukkan var massa
2. masukkan var volume
3. masukkan var rho
4. hitung rho
5. rumus massa jenis = massa/volume
6. cetak hasilnya

PSEUDOCODE
1. STORE massa WITH ANY NUMBER
2. STORE volume WITH ANY NUMBER
3. SET rho TO massa DIV volume
4. PRINT rho
END */

// let massa = 10;
// let volume = 3;
// let rho = massa / volume;
// console.log(rho.toFixed(2));

/** STUDY CASE 3 
ALGORITMA 
1. buat variable r
2. buat variable t
3. buat varibale phi
4. hitung volume tabung
5. rumus volume tabung = phi * r * r * t
6. cetak hasilnya
*/
/**
 * PSEUDOCODE
 * BEGIN
 * STORE phi WITH 3.14
 * STORE r WITH ANY NUMBER
 * STORE t WITH ANY NUMBER
 * SET volume TO phi MUL r MUL r MUL t
 * PRINT volume
 * END
 */

const phi = 3.14;
let r = 7;
let t = 5;

let volume = phi * r * r * t;
console.log(volume);