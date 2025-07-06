/**
 * FUNCTION
 */
// CARA CEK GANJIL GENAP
function cekGanjilGenap(number) {
    if (number % 2 === 0) {
        console.log(number + " adalah bilangan genap");
    }else {
        console.log(number + " adalah bilangan ganjil");
    }
}
// contoh pemakaian :
cekGanjilGenap(10);