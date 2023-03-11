const names = ['Michael', 'Hannah', 'Jonas'];

//foreach untuk looping data
names.forEach(function(nama){
    console.log(nama);
});

// mpa untuk format data
const namaTerformat = names.map(function(nama){
    return `Mr/Mrs ${nama}`;
});


console.log(namaTerformat);

