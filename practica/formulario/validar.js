function validar() {
    var name, lastname, email, fono;
    var expLetras, expNumero, expCorreo;
    expLetras = /^[a-zA-Z]+(\s+[a-zA-Z]+)*$/;
    expNumero = /^\d{6}$|^\d{9}$/;
    expCorreo = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3}$/;

    name = document.getElementById("nombre").value;
    lastname = document.getElementById("apellidos").value;
    email = document.getElementById("correo").value;
    fono = document.getElementById("celular").value;

    var arr = [name,lastname,email,fono];
    /*var expArr = [expLetras,expLetras,expCorreo,expNumero];*/

    for(let i=0;i<arr.length;i++){
        if(arr[i] === ""){
            alert("es obligatorio llenar este espacio");
            return false;
        }
    }
    
    if(!expLetras.test(name)){
        alert("Nombre no valido");
        return false;
    }
    else if(!expLetras.test(lastname)){
        alert("Apellido no valido");
        return false;
    }
    else if(!expCorreo.test(email)){
        alert("Correo no valido");
        return false;
    }
    /*else if(fono.length>9){
        alert("Numero muy grande");
        return false;
    }*/
    else if(!expNumero.test(fono)){
        alert("Telefono no valido");
        return false;
    }
    /*else if(isNaN(fono)){
        alert("Numero no valido");
        return false;
    }*/
}
    /* for(let j=0;j<arr.length;j++){
        if(!expArr[j].test(arr[j])){
            alert("expresion no valida");
            return false;
        }
    }*/

