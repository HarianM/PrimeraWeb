if(!sessionStorage.getItem('lang')){
    sessionStorage.setItem('lang', window.navigator.language.substring(0,2))
}