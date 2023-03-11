function sum(...numbers)
{
    let hasil = 0;

    for (let i = 0; i < numbers.length; i++) {
        hasil = hasil + numbers[i];
    }

    console.log(hasil);
}

sum(1,2,3,4,5);