function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function activar(){
    poscion = 50;
    var elemento ;
    var clase ;
    elemento = document.getElementById('foo');
    alert(elemento.offsetWidth + ' left ' +elemento.offsetLeft);
    for(let i = 0; i<30;i++)
    {
        await sleep(10);
        poscion = i;
        elemento.style.boxShadow = '3px ' + poscion +'px 10px 10px red';
    }
    for(let i = 30; i>0;i--)
    {
        await sleep(10);
        poscion = i;
        elemento.style.boxShadow = '3px ' + poscion +'px 10px 10px red';
    }

} 