var lista = [];
var fecha = ["Jan","Feb","Mar","Abr","May","Jun","Jul","Sep","Oct","Nov","Dec"]
var nombrePares = [];
var bnbData = [];
var btcData = [];
var ethData = [];
var usdtData = [];
var tiempo = [];

async function pares(){
    var req = new XMLHttpRequest();
    var cadena;
    var id;
    
    await req.open('GET', 'https://api.binance.com/api/v3/ticker/price', false);

    req.send(null);
    if (req.status == 200)
        dump(req.responseText);
        let aux = JSON.parse(req.responseText);
        let isiN = false;
    
        for (let i = 0; i < aux.length; i++) {


            cadena = aux[i]['symbol'];
            isiN = false;
            if(/^BNB/.test(cadena)){
                cadena = [cadena.slice(0, 3), "/", cadena.slice(3)].join('');
                //bnbData.push(cadena);
                id = "bnb_selector";
                isiN = true;
              
            }
            else if(/^BTC/.test(cadena))
            {
                cadena = [cadena.slice(0, 3), "/", cadena.slice(3)].join('');
                //btcData.push(cadena);
                id = "btc_selector";
                isiN = true;
            }
            else if(/^USDT/.test(cadena))
            {
                cadena = [cadena.slice(0, 4), "/", cadena.slice(4)].join('');
                //usdtData.push(cadena);
                id = "usdt_selector";
                isiN = true;
            }
            else if(/^ETH/.test(cadena))
            {
                cadena = [cadena.slice(0, 3), "/", cadena.slice(3)].join('');
                //ethData.push(cadena);
                id = "eth_selector";
                isiN = true;
            }

            if(isiN)
            {
              setOptionOn(id,cadena)
            }
      
                
           
        }
    
   
}
function setOptionOn(id,valor)
{
    let selectList = document.getElementById(id);
    let option = document.createElement("option");
    option.value = valor;
    option.text = valor;
    selectList.appendChild(option);
}


[
    [
      1499040000000,      // Open time      0
      "0.01634790",       // Open           1
      "0.80000000",       // High           2
      "0.01575800",       // Low            3
      "0.01577100",       // Close          4
      "148976.11427815",  // Volume         5
      1499644799999,      // Close time     6
      "2434.19055334",    // Quote asset volume             7
    ]
  ]

async function getDataOf(par){
    var req = new XMLHttpRequest();
    //var par = document.getElementsByTagName('h2')[0].innerText;
    await req.open('GET', 'https://api.binance.com/api/v3/klines?symbol='+par+'&interval=5m', false);
    req.send(null);
    if (req.status == 200)
        dump(req.responseText);
        let aux = JSON.parse(req.responseText);
     
    
        for (let i = 0; i < aux.length; i++) {
            lista.push(aux[i][3]);
            addTiempo(aux[i][6]);
            //lista_2.push(aux[i][5])
            
        }
    pintar() 
    //pintarPrueba()
}

function addTiempo(currentTime){
    let t = new Date(currentTime);
    tiempo.push(currentTime);
}