//spread array
const family = ['michael','Hannah'];
const newFamily = [...family, "Jonas"];
console.log(newFamily);

//spread object
const user = {
    name: "abiyyu cakra",
    age: 29
};

const newUser = {
    ...user,
    major: "Informatocs",
};
console.log(newUser);