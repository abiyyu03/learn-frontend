const users = [
    {
      name: "Aufa",
      age: 22,
      major: "Frontend Engineer",
    },
    {
      name: "Isfa",
      age: 20,
      major: "Android Engineer",
    },
    {
      name: "Agung",
      age: 24,
      major: "Data Engineer",
    },
    {
      name: "Nurul",
      age: 24,
      major: "English",
    },
    {
      name: "Jaki",
      age: 27,
      major: "English",
    },
  ];
const formatUser = (title) => {
    const formatedName = users.map((result) => `${title} ${result.name}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(formatedName);
        },3000);
    })
};
formatUser("Mr").then((result)=>{
    console.log(result);
})
const findUserByName = users.find((user) => user.name == "Nur" );
console.log(findUserByName);