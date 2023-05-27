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
    
    function entidades(){
        // let conn = new Xhr({path:"json/entities.json"}).result;
        let conn = new XMLHttpRequest(); 
        conn.onreadystatechange = function(){
            if(conn.readyState === 4 && conn.status === 200){
    
                let fragmento = document.createDocumentFragment();
                let elemento = document.getElementById("entidades");
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

    entidades();
});