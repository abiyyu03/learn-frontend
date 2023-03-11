const req = {
    body : {
        nama:"Abiyyu Cakra",
        age:25,
        tinggi:179,
    },
};

//destruction object
const {nama, age, tinggi} = req.body;
console.log(nama, age, tinggi);

//destructiong array
const family = ['michael','hannah','jonas'];

const [suami, istri, anak] = family;
console.log(suami, istri, anak);