/* MENGHITUNG VOLUME KUBUS  */
function hitungVolumeKubus(sisi) {
  if (sisi <= 0 || isNaN(sisi)) {
    return "Panjang sisi harus berupa angka positif.";
  }
  
  let volume = Math.pow(sisi, 3);
  return `Volume kubus dengan sisi ${sisi} adalah ${volume}`;
}

// Contoh pemakaian
let sisi = 5;
console.log(hitungVolumeKubus(sisi));

/* MENGHITUNG LUAS LINGKARAN */
function hitungLuasLingkaran(jariJari) {
  if (jariJari <= 0 || isNaN(jariJari)) {
    return "Jari-jari harus berupa angka positif.";
  }

  const phi = Math.PI;
  const luas = phi * Math.pow(jariJari, 2);
  return `Luas lingkaran dengan jari-jari ${jariJari} adalah ${luas.toFixed(2)}`;
}

// Contoh penggunaan
let r = 7;
console.log(hitungLuasLingkaran(r));
