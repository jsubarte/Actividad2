// EJERCICIO 1

let objX = {};
const btnObj = document.getElementById("objProp");
btnObj.addEventListener('click', event => {
    let txtObj = document.getElementById("txtObjeto").value;
    let prop = txtObj.split(',');
    prop.forEach(element => {
        Object.defineProperty(objX, element.split(':')[0].trim(), {
            value: element.split(':')[1].trim(),
            enumerable: true
        });
    });
});
const btnListProp = document.getElementById("objListProp");
btnListProp.addEventListener('click', event => {
    const etiqueta = document.getElementById("listaProp");
    etiqueta.innerText = Object.getOwnPropertyNames(objX); // DEVUELVE ARREGLO DE STRING CON NOMBRES DE PROPIEDADES
});

// EJERCICIO 2


// EJERCICIO 3

function ejercicio3(){
    let invertida = document.getElementById("invertido");
    let fraseori = document.getElementById("frase").value;
    // FUNCION FLECHA
    let fraseinv = (frase) => frase.split('').reverse().join('');
    
    invertida.innerText = fraseinv(fraseori);
}

// EJERCICIO 4

class Validador{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
    login(){
        if( this.username === "admin" && this.password === "passwd" ){
            alert("User logged in");
        }
        else{
            alert("User or Password incorrect");
        }
    }
}

function ejercicio4(){
    let appLogin = new Validador(document.getElementById("user").value, document.getElementById("pass").value);
    appLogin.login();
}

// EJERCICIO 5

const btnLogin = document.getElementById("loginSuccess");
btnLogin.addEventListener('click', event => {
    let correcto = new Validador("admin","passwd");
    correcto.login();
} );

const btnError = document.getElementById("loginFailure");
btnError.addEventListener('click', event => {
    let error = new Validador("administrador","123456");
    error.login();
} );

// EJERCICIO 6

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
        setTimeout(() => {
        if (username === "admin" && password === "passwd") {
            resolve("User logged in");
        } else {
            rejected("Error: invalid username or password");
        }
        }, 200);
    });
};

const btnLoginAsync = document.getElementById("loginSuccessAsync");
btnLoginAsync.addEventListener('click', async event => {
    loginWitUsername("admin","passwd").then( respuesta => {
        alert(respuesta);
    });
} );

const btnErrorAsync = document.getElementById("loginFailureAsync");
btnErrorAsync.addEventListener('click', async event => {
    loginWitUsername("axdmin","paszwd").catch( error => alert(error) );
} );
