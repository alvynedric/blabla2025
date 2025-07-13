// CEK GANJIL GENAP
// function ganjilGenap(numb) {
//   if (numb % 2 == 0) {
//     return "Genap";
//   } else {
//     return "Ganjil";
//   }
// }
// console.log(ganjilGenap(15));
// END

/** mengubah kelimat menjadi larik
 * menghitung jumlah elemen dalam larik
 * contoh: masukan "helo selamat pagi" maka yg keluar 3
 */
// function ubahKata(kata){
//     let kataArray = kata.split(" ");
//     return kataArray.length;
// }
// console.log(ubahKata("Hello Bitch"));
// END
// CARA 2
// function splitToArray(str){
//     var tempArray = str.split(" ");
//     return tempArray;
// }
// function jumlahKata(kalimat){
//     var result = splitToArray(kalimat);
//     var arrayLength = result.length;
//     return arrayLength;
// }
// console.log(jumlahKata("Hello selamat pagi"))

// Laatihan
// ubah menjadi hasil
// jenis : durian
// harga : 75000
// enak : true
// BEGIN
// var buah = ["durian", 7500, true];

// function ubahObject(array){
//      var object = {}
//      object.jenis = array[0]
//      object.harga = array[1]
//      object.enak = array[2]
//     return object;
// }
// console.log(ubahObject(buah));
// END

// var caca = {
//     nama : "caca",
//     berat : "45 Kg",
//     tinggi : "155 cm",
//     hobi : ["nonton","makan","membaca"],

//     sebutkanHobby : function(){
//         console.log("Hobby Caca : ")
//         for(let i = 0; i < this.hobi.length; i++){
//             console.log(this.hobi[i]);
//             }
//             }
//     }
// caca.sebutkanHobby()
// END

// BEGIN
// var students = {
//     name : "admin",
//     gpa : 3.21,
//     address : {
//         city : "Jakarta",
//         country : "Indonesia",
//     },

//     // methods
//     mentionName : function(){
//         console.log(`My Name is ${this.name}`);
//     },

//     mentionGpa : function(){
//         console.log("GPA = " + this.gpa);
//     },
//     mentionAddress : function(){
//         console.log(`My Address is ${this.address.city}, ${this.address.country}`);
//     }

// }
// students.mentionName()
// students.mentionAddress()
// students.mentionGpa()
// END

// var items = [
//   {
//     id: 1,
//     name: "Iphone 15 Pro Max",
//     type: "Apple",
//     price: 20000000,
//     isAvailable: true,
//   },
//   {
//     id: 2,
//     name: "Samsung S25 Ultra",
//     type: "Samsung",
//     price: 15000000,
//     isAvailable: false,
//   },
// ];

// function showItem(){
//     console.log("List Item :")
//     for(let i = 0; i < items.length; i++){
//         if(items [i].isAvailable == true){
//             console.log(`${i + 1}. [X], ${items[i].name}`);
//         }else{
//             console.log(`${i + 1}. [ ], ${items[i].name}`);
//         }
//     }
// }
// showItem(items)
