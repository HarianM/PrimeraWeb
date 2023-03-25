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
});