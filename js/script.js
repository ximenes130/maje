function scroll(){
    var lc = document.getElementsByClassName('mdl-layout__content')[0]
    lc.scrollTop = lc.getElementsByClassName('header-splash')[0].scrollHeight
}