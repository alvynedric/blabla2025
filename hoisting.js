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

hello = "Selamat Siang";
console.log(hello);
var hello;  // var dinaikkan ke atas


