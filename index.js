// =====================================================================================================
// // Array
// const arr = [1, "dhea", true, [4, 5, 6]];
// console.log(arr[3][1]);
// =====================================================================================================

// =====================================================================================================
// // Manipulasi Array
// // 1. Menambah isi Array
// let arr = [];
// arr[0] = "dhea";
// arr[1] = "ramdani";
// arr[2] = "afani";
// arr[3] = "akhira";
// console.log(arr);

// // 2. Menghapus isi Array
// let arr = ["dhea", "ramdani", "afani"];
// arr[1] = undefined;
// console.log(arr);

// // 3. Menampilkan isi Array
// let arr = ["dhea", "ramdani", "afani", "akhira"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(`Mahasiswa ke ${i + 1} : ${arr[i]}`);
// }

// // Array Method
// // 1. Method JOIN ( Menggabungkan isi array dan mengubahnya menjadi string )
// let arr = ["dhea", "ramdani", "afani", "akhira"];
// console.log(arr.join(" - "));
// dhea - ramdani - afani - akhira

// // 2. Method PUSH & POP
// // Method PUSH ( Menambah Element di akhir Array)
// let arr = ["dhea", "ramdani", "afani", "akhira"];
// arr.push("kartaman");
// console.log(arr.join(" - "));
// dhea - ramdani - afani - akhira - kartaman

// // Method POP ( Menghapus Element terahir Array)
// let arr = ["dhea", "ramdani", "afani", "akhira"];
// arr.pop();
// console.log(arr.join(" - "));
// dhea - ramdani - afani

// // 3. Method UNSHIFT & SHIFT
// // Method UNSHIFT ( Menambah Element di awal Array)
// let arr = ["dhea", "ramdani", "afani", "akhira"];
// arr.unshift("kartaman");
// console.log(arr.join(" - "));
// kartaman - dhea - ramdani - afani

// // Method SHIFT ( Menghapus Element awal Array)
// let arr = ["dhea", "ramdani", "afani", "akhira"];
// arr.shift();
// console.log(arr.join(" - "));
// ramdani - afani - akhira

// // 4. Method SPLICE & SLICE
// // Method SPLICE ( Menyambung element ke dalam Array)
// // splice(indexAwal, mauDiremoveBerapa, elementBaru1, elementBaru2, ...)
// let arr = ["dhea", "ramdani", "afani", "akhira"];
// arr.splice(2, 2, "kartaman", "alkhais");
// console.log(arr.join(" - "));
// dhea - ramdani - kartaman - alkhais

// // Method SLICE ( Mengiris element yang ada di dalam Array dan menghasilkan Array baru )
// // slice(indexAwal, indexAkhir)
// let arr = ["dhea", "ramdani", "afani", "akhira"];
// let arr2 = arr.slice(1, 3);
// console.log(arr2.join(" - "));
// ramdani - afani

// // 5. Method FOREACH & MAP
// // Method FOREACH
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let nama = ["dhea", "afani", "akhira"];
// arr.forEach(function (e) {
//   console.log(e);
// });
// nama.forEach(function (e, i) {
//   console.log(`Mahasiswa ke- ${i + 1} adalah : ${e}`);
// });

// // Method MAP ( Mengembalikan nilai Array )
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 4];
// let arr2 = arr.map(function (e) {
//   return e * 2;
// });
// console.log(arr2);

// // 6. Method SORT ( Mengurutkan )
// let arr = [1, 4, 5, 20, 3, 2, 7, 10, 8, 6];
// let lowest = arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(lowest.join(" - "));

// // 7. Method FIND ( Mencari dan mengembalikan 1 nilai )
// let arr = [1, 4, 5, 20, 3, 2, 7, 10, 8, 6];
// let arr2 = arr.find(function (e) {
//   return e > 5;
// });
// console.log(arr2);

// // 8. Method FILTER ( Mencari dan mengembalikan banyak nilai )
// let arr = [1, 4, 5, 20, 3, 2, 7, 10, 8, 6];
// let arr2 = arr.filter(function (e) {
//   return e > 5;
// });
// arr2.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr2.join(" - "));
// =====================================================================================================

// =====================================================================================================
// // LATIHAN
// let penumpang = [];
// let addPenumpang = function (namaPenumpang, penumpang) {
//   // jika angkot kosong
//   if (penumpang.length == 0) {
//     // tambah penumpang di awal array
//     penumpang.push(namaPenumpang);
//     // kembalikan isi array & keluar dari function
//     return penumpang;
//   } else {
//     // telusuri seluruh kursi dari awal
//     for (let i = 0; i < penumpang.length; i++) {
//       // jika ada kursi kosong
//       if (penumpang[i] == undefined) {
//         // tambah penumpang di kursi tersebut
//         penumpang[i] = namaPenumpang;
//         // kembalikan isi array dan keluar dari function
//         return penumpang;
//         // jika sudah ada nama yang sama
//       } else if (penumpang[i] == namaPenumpang) {
//         // tampilkan pesan kesalahannya
//         console.log(
//           `penumpang dengan nama ${namaPenumpang} sudah ada di dalam angkot`
//         );
//         // kembalikan isi array dan keluar dari function
//         return penumpang;
//         // jika kursi penumpang sudah penuh
//       } else if (i == penumpang.length - 1) {
//         // tambahkan penumpang di akhir
//         penumpang.push(namaPenumpang);
//         // kembalikan isi  array dan keluar dari function
//         return penumpang;
//       }
//     }
//   }
// };

// let deletePenumpang = function (namaPenumpang, penumpang) {
//   // jika angkot masih kosong
//   if (penumpang.length == 0) {
//     // tampilkan pesan, bahwa angkot masih kosong
//     console.log("Tidak ada penumpang di dalam angkot!");
//     // kembalikan isi array dan keluar dari function
//     return penumpang;
//   } else {
//     // telusuri terlebih dahulu isi array
//     for (let i = 0; i < penumpang.length; i++) {
//       // jika nama penumpang sama
//       if (penumpang[i] == namaPenumpang) {
//         // hapus penumpang dan ubah namanya menjadi undifined
//         penumpang[i] = undefined;
//         // kembalikan isi array dan keluar dari function
//         return penumpang;
//         // jika tidak ada nama yang sesuai
//       } else if (i == penumpang.length - 1) {
//         // tampilkan pesan kesalahannya
//         console.log(`Tidak ada nama ${namaPenumpang} di dalam angkot!`);
//         // kembalikan isi array dan keluar dari function
//         return penumpang;
//       }
//     }
//   }
// };
// =====================================================================================================
