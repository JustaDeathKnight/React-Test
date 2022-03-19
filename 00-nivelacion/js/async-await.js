// const saludo = () => {
//     return new Promise((resolve, reject) => {
//         resolve('hola mundo');
//     });
// };

// const saludo = async () => {
//     return 'hola mundo';
//     };

// saludo().then((response) => console.log(response));

const peticion = async () => {
    setTimeout(() => {
        const datos = {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
        };
        console.log(datos);
    }, 1000)
};

peticion().then(console.log);