class Xhr{
    constructor(data){
        this.xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        this.xhr.addEventListener("readystatechange", (event) => {
            if(this.xhr.readyState === 4 && this.xhr.status === 200){
                element.outerHTML = xhr.responseText;
            }
        });
        this.xhr.open(data.method, data.path, data.asynchronous);
        this.xhr.setRequestHeader(data.requestHeader, data.requestValues);
        this.xhr.send(data.send || null);
    }

    get response(){
        return this.xhr.response;
    }
}