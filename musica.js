function pesquisar() {
    let input = document.getElementById('barra').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('music');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
