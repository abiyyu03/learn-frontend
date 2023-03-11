import users from "./data.js";

const index = () => {
    // for (const data of users) {
        console.log(users['nama']);
        console.log(users['age']);
    // }
}

const store = () => {
    console.log("store data");
}

export {
    index,
    store,
};