


    console.log(" ")
    //#region 1. Crear un objeto Persona
    console.log(" ====================== 1. Crear un objeto Persona ======================")    
    // Enunciado:
        // Crea un objeto persona que tenga las propiedades: nombre, edad, y ciudad. Luego, imprime cada propiedad por separado en la consola.

        let persona = {
            nombre: "Jhon_Doe",
            edad: 29,
            ciudad: "England"
        }
    function imprimiArray(objeto) {
        console.log(objeto["nombre"]);
        console.log(objeto["edad"]);
        console.log(objeto["ciudad"]);
        
    }
    imprimiArray(persona)

//#endregion


    console.log(" ")
    //#region 2. Modificar propiedades
    console.log("====================== 2. Modificar propiedades ======================")    
    // Enunciado:
        // A partir del objeto persona anterior, cambia el valor de la propiedad ciudad y añade una nueva propiedad llamada profesión. Luego, imprime el objeto actualizado en la consola.
        persona = {
            nombre: "Jhon_Doe",
            edad: 29,
            ciudad: "England"
        }
        function cambiarPropiedad (argument) {
           delete argument.ciudad;
           argument.profesion = "carpintero"
            return console.log(argument)
        }
        cambiarPropiedad(persona);

//#endregion


    console.log(" ")
    //#region 3. Objeto Libro
    console.log("====================== 3. Objeto Libro ======================")    
    // Enunciado:
        // Crea un objeto llamado libro con las propiedades titulo, autor, y añoPublicacion. Añade un método llamado resumen que devuelva una cadena con un resumen del libro. Ejemplo de salida: "El libro 'Cien años de soledad' fue escrito por Gabriel García Márquez en 1967."
        const libro = {
            titulo: "Cien años de soledad" ,
            autor: "Gabriel Garcia Marquez",
            anioPublicacion: 1967,
            resumen () {
                return `El libro '${this.titulo}' fue escrito por ${this.autor} en ${this.anioPublicacion}.`;
            }
        }
        console.log(libro.resumen());
//#endregion


    console.log(" ")
    //#region 4. Array de objetos
    console.log("====================== 4. Array de objetos ======================")    
    // Enunciado:
        // Crea un array llamado estudiantes que contenga tres objetos. Cada objeto debe representar un estudiante con las propiedades: nombre, edad, y notaFinal. Luego, recorre el array e imprime el nombre y la nota final de cada estudiante.

        const estudiantes = [
            {
                nombre: "Jhon_Doe",
                edad: 17,
                notaFinal: 7
            },
            {
                nombre: "Mike",
                edad: 15 ,
                notaFinal: 8
            },
            {
                nombre: "Jane_Doe",
                edad: 19,
                notaFinal: 8
            }
        ]

        function imprimirNota(estudianteArray){
            for (const clave of estudianteArray) {
                console.log(`${clave.nombre}: Nota final =  ${clave.notaFinal}`) 
            }
        }
 
        imprimirNota(estudiantes)

//#endregion


    console.log(" ")
    //#region 5. Método para calcular la edad
    console.log("====================== 5. Método para calcular la edad ======================")    
    // Enunciado:
        // Crea un objeto persona con las propiedades nombre, anioNacimiento, y un método llamado calcularEdad que devuelva la edad actual de la persona basado en el año de nacimiento.

        const person = {
            nombre: "Jane",
            anioNacimiento: 1978,
            calcularEdad(añoActual) {
                const edad = añoActual -this.anioNacimiento;
                return `${this.nombre} tiene ${edad} años`
            }
        }
        console.log(person.calcularEdad(2025))

//#endregion


    console.log(" ")
    //#region 6. Objeto Coche
    console.log("====================== 6. Objeto Coche ======================")    
    // Enunciado:
        // Crea un objeto llamado coche con las propiedades marca, modelo, año y velocidadActual. Añade un método acelerar que incremente la velocidad actual en 10 unidades y otro método frenar que disminuya la velocidad actual en 10 unidades. Asegúrate de que la velocidad no sea negativa.

        let coche = {
            marca: "seat",
            modelo: "ateca",
            anio: 2023,
            velocidadActual: 50,
            acelerar() {
                    this.velocidadActual = this.velocidadActual + 10
                    console.log(`Velocidad actual: ${this.velocidadActual}`);
            },
            frenar(){
                let disminuirVelocidad = 10;
                if (this.velocidadActual <= disminuirVelocidad) {
                    return console.log(`EL coche esta detenido`)
                } else {
                    this.velocidadActual = this.velocidadActual - 10;
                    console.log(`Velocidad actual: ${this.velocidadActual}`);
                }
            }
        }
        coche.acelerar();
        coche.frenar();
        coche.frenar();
//#endregion


    console.log(" ")
    //#region 7. Recorrer un objeto
    console.log("====================== 7. Recorrer un objeto ======================")    
    // Enunciado:
        // Crea un objeto producto con las propiedades nombre, precio, cantidad. Usa un ciclo for...in para imprimir todas las propiedades y sus valores.

        const producto = {
            nombre: "Guitarra",
            precio: 178,
            cantidad: 7
        }
        function imprimirPropiedadValor(objeto){
            for (const clave in objeto) {
                console.log(`${clave}: ${objeto[clave]}`) 
            }
        }
        imprimirPropiedadValor(producto)
//#endregion


    console.log(" ")
    //#region 8. Contar propiedades
    console.log("====================== 8. Contar propiedades ======================")    
    // Enunciado:
        // Crea un objeto animal con al menos cinco propiedades. Luego, escribe una función que cuente y devuelva el número de propiedades que tiene el objeto.
        const gato = {
            nombre: "Happy",
            color: "marro_negro",
            patroPelaje: "atigrado",
            edad: 4,
            castrado: true
        }

        function contarPropiedades (objeto) {
            // Object.keys() y almacenar claves en un array. devolvver longitud del array
            const claves = Object.keys(objeto);
            return `EL objeto gato tiene ${claves.length} claves`;
        }
        console.log(contarPropiedades(gato));
//#endregion


    console.log(" ")
    //#region 9. Objeto dentro de otro objeto
    console.log("====================== 9. Objeto dentro de otro objeto ======================")    
    // Enunciado:
        // Crea un objeto empresa que tenga las propiedades nombre y direccion. La propiedad direccion debe ser otro objeto con calle, ciudad, y codigoPostal. Luego, accede a las propiedades del objeto anidado e imprímelas.

        const empresa = {
            nombre: "Taller Rueda",
            direccion: {
                calle: "Carrer del Dr. Ferran",
                ciudad: "Valencia" ,
                codigoPostal: 46021
            }
        }
        console.log(empresa.direccion);

//#endregion

    console.log(" ")

    //#region 10. Añadir métodos a objetos
    console.log("====================== 10. Añadir métodos a objetos ======================")    
    // Enunciado:
        // Crea un objeto cuentaBancaria con las propiedades titular, saldo. Añade métodos depositar y retirar que modifiquen el saldo según sea necesario. El método retirar debe asegurarse de que no se pueda retirar más dinero del que hay disponible.

        const cuentaBancaria = {
            titular: "Jhon_Doe",
            saldo: 400,
            depositar(cantidad) {   
                this.saldo = this.saldo + cantidad;
                return console.log(`Depósito realizado con éxito. Nuevo saldo: ${this.saldo}`);
            },
            retirar(cantidad) {
                if(this.saldo < cantidad) {
                    return console.log(`No tiene saldo suficinte para realizar esta operación`)
                } else {
                    this.saldo = this.saldo - cantidad;
                    return console.log(`Retiro realizado con éxito. Nuevo saldo: ${this.saldo}. No olvide retirar el dinero de la bandeja de salida y su tarjeta de crédito.`);
                }
            }
        }
        cuentaBancaria.retirar(60);
        cuentaBancaria.depositar(200);
        cuentaBancaria.retirar(600);
//#endregion
