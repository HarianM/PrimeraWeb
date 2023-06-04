if(!sessionStorage.getItem('lang')){
    sessionStorage.setItem('lang', window.navigator.language.substring(0,2))
};

document.addEventListener('DOMContentLoaded',function(event){

    let includeHTML = (element, file) =>  {
        const path = "view/include/";
        const xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        xhr.addEventListener("readystatechange", (event) => {
            if(xhr.readyState === 4 && xhr.status === 200){
                element.outerHTML = xhr.responseText;
            }
        })
        xhr.open("GET", path + file);
        xhr.setRequestHeader("Content-type","text/html; charset=utf-8");
        xhr.send();
    }

    document.querySelectorAll("[data-include]").forEach(function(element){
        includeHTML(element, element.getAttribute("data-include"));
        console.log(element)
    });

    var crear = function(elemento){ return document.createElement(elemento);};




    /* Prueba de Loops */
    function prueba_loops(){
        let resultados = document.getElementById("resultados");
        let conn = new XMLHttpRequest(); 
        conn.onreadystatechange = function(){
            if(conn.readyState === 4 && conn.status === 200){
                let obj = JSON.parse(conn.responseText);
                Object.entries(obj).map(elemento => {
                    const[clave, objeto] = elemento;
                    Object.entries(objeto).map(elementos => {
                        const[key] = elementos;
                        resultados.innerHTML += `<p>${clave}:${key}</p>`;
                    });
                });
            }
        }
        conn.open("GET","assets/json/events.json",false);
        conn.send();

        

        // let elementos = JSON.parse(consulta);

        // console.log(consulta || "no encontre resultados");
        // Object.entries(elementos).map(elemento => {
        //     const [clave, objeto] = elemento;
        //     resultado.innerHTML += `<p>${objeto}</p>`
        //     if(objeto.flow === "inline"){
        //         a = document.createElement("a");
        //         a.setAttribute("href", "#");
        //         a.appendChild(document.createTextNode(`${clave} `));
        //         fragmento.appendChild(a);
        //     // }
        // });
        // contenedor.appendChild(fragmento);
    }
    prueba_loops();
    
    function entidades(){
        // let conn = new Xhr({path:"json/entities.json"}).result;
        let conn = new XMLHttpRequest(); 
        conn.onreadystatechange = function(){
            if(conn.readyState === 4 && conn.status === 200){
    
                let fragmento = document.createDocumentFragment();
                let elemento = document.getElementById("resultados");
                let obj = JSON.parse(conn.responseText);
    
                table = crear("table");
                table.className = "mod-table";
                tr = crear("tr");
                
                for(let entidad in obj){
                    if(JSON.stringify(entidad).endsWith(";\"")){
                        for(let key in obj[entidad]){
                            if(key === "codepoints"){
                                p3 = crear("p");
                                p3.appendChild(document.createTextNode(obj[entidad][key]));
                            }
                            if(key === "characters"){
                                td = crear("td");
                                p1 = crear("p");
                                p2 = crear("p");
                                p1.appendChild(document.createTextNode(obj[entidad][key]));
                                p2.appendChild(document.createTextNode(entidad));
                                td.appendChild(p1);
                                td.appendChild(p2);
                                td.appendChild(p3);
                            }
                        }
                        tr.appendChild(td);
                    }
                }
                
                table.appendChild(tr);
                fragmento.appendChild(table);
                elemento.appendChild(fragmento);
            }
        };
        conn.open("GET","../../json/entities.json",false);
        conn.send();
    }

    // entidades();
});

// Tipos de datos en Javascript
/**
 * Caracteres: Letras
 * Enteros: 1, 2, 3
 * Flotantes: 3.1416
 * Booleanos: TRUE || FALSE
 * funtion nombre(){
 * }
 */

// Como definir una variable en Javascript
/**
 * A través de palabra "VAR"
 * A través de palabra "LET"
 */

// Contexto global y contexto local

// Operadores de Javascript
/**
 * Suma: +
 * Resta: -
 * Multiplicación: *
 * División: /
 * Residuo: %
 */

// Como seleccionar un elemento
/**
 * ID
 * Etiqueta
 * Nombre de la clase
 */

// Condicionales
/**
 * if(1 < 2){...}
 * else{...}
 */

// LOOPS
/**
 * 1. for(variable, condicion, manejador){}
 * 2. while(){...}
 * 3. Do () While ()
 */

// var formulario = document.getElementById("formulario_de_prueba");
// var resultado = document.getElementById("formulario_resultados");
// formulario.addEventListener("submit", function(e){
//     e.preventDefault();
//     resultado.innerHTML = '<p>Mi nombre es: ' + e.target.nombre.value + ' mi contraseña es: ' + e.target.contraseña.value;
//     console.log(e.target.nombre.value);
// });