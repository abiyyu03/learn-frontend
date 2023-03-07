const user = {
    nama: "Abiyyu",
    umur: 20,
    tinggi:"180"
}

console.log(user.nama, user["umur"]);
for (const key in user) {
    console.log(key,":",user[key]);
}

// untuk panggil function dalam objek
// const user = {
//     nama: 'Fikri',
//     age: 22,
//     tinggi: 180,
//     test: () => {
//       console.log('testsss');
//     },
//   };
  
//   for (let key in user) {
//     if (typeof user[key] === 'function') {
//       user[key]();
//     }
  
//     console.log(user[key]);
//   }