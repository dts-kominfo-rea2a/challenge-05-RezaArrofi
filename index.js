const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (list_utama, cbSort) =>{
  // kirim list_utama ke fungsi cvSort
  sortlist = cbSort(list_utama);

  // buat array kosong untuk hasil
  let data = [];
  // looping nama di list_utama
  for(let i=0; i<list_utama.length; i++){
    // push kedalam array data
    data.push(' '+(i+1)+'. '+list_utama[i]);
  }

  // mengembalikan array data
  return data;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (param) => {
  let data = param.sort();
  return data;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (param) => {
  let data = param.sort().reverse();
  return data;
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
