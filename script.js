var circle = document.createElement('div');

document.onmousemove = function(e)
{
    var event = e || window.event;
    window.mouseX = event.clientX;
    window.mouseY = event.clientY;
}

function mousemov()
{
    let cwidth = Number(circle.offsetWidth);
    let cheight = Number(circle.offsetHeight);
    console.log(window.mouseX, window.mouseY);
    circle.style.left = Number(window.mouseX - cwidth / 2) + 'px';
    circle.style.top = Number(window.mouseY - cheight / 2) + 'px';
}

function CarregarMagias(classe)
{
    let magianome;
    if (classe === 'cavaleiro')
    {
        magianome = ["Pancada",
                     "Vitalidade",
                     "Força",
                     "Resistência",
                     "Vida eterna",
                     "Postura ofensiva",
                     "Ataque penetrante",
                     "Sangue grosso",
                     "Batida poderosa",
                     "Bloqueio",
                     "Resistência neutra",
                     "Condição física",
                     "Postura defensiva",
                     "Ataque de espada"];
    }
    else if (classe === 'mago')
    {
        magianome = ["Chama",
                     "Onda",
                     "Meditação",
                     "Sopro",
                     "Tremida",
                     "Ataque mágico",
                     "Tornado",
                     "Tsunami",
                     "Tarô",
                     "Pantâno",
                     "Cura",
                     "Inspiração mística",
                     "Fogaréu",
                     "Terremoto",
                     "Ataque místico"];
    }
    else if (classe === 'arqueiro')
    {
        magianome = ["Flechada forte",
                     "Arco e flecha",
                     "Flechada flamejante",
                     "Flechada dupla",
                     "Perícia em flechas",
                     "Flechada de neve",
                     "Flechada penetrante",
                     "Intensidade",
                     "Flechas elementais",
                     "Flechada venenosa",
                     "Táticas de caça",
                     "Flechada trovejante",
                     "Flechada impulsionante",
                     "Flechada saltitante",
                     "Tiro mágico"];
    }
    else if (classe === 'animal')
    {
        magianome = ["Patada",
                    "Quatro patas",
                    "Mordida profunda",
                    "Pontos críticos",
                    "Erva em dobro",
                    "Cabeçada",
                    "Roar!",
                    "Elementos naturais",
                    "Abanando o rabinho",
                    "Robusto",
                    "Ajudinha natural",
                    "Salto",
                    "Instinto de sobrevivência",
                    "Melhor amigo"];
    }
    else if (classe === 'ladrão')
    {
        magianome = ["Ataque furtivo",
                    "Rapidez",
                    "Ataque pelas costas",
                    "Roubo",
                    "Prática de combate",
                    "Golpe certeiro",
                    "Saboroso",
                    "Arranhão nos olhos",
                    "Armas cotidianas",
                    "Poção venenosa",
                    "Esquiva",
                    "Ataque surpresa",
                    "Assassinato",
                    "Duro de matar"];
    }

    let magias_div = document.getElementById("magiasdiv");
    for (let m = 0; m <= magianome.length - 1; m += 1)
    {
        let magia_div = document.createElement('div');
        magia_div.className = "magia";
        magias_div.append(magia_div) ;
        magia_div.append(magianome[m]) ;
    }

    circle.id = 'div_circle';
    circle.style.width = '50px';
    circle.style.height = '50px';
    circle.style.backgroundColor = 'aqua';
    circle.style.borderRadius = '50%';
    circle.style.border = '1px solid black';
    circle.style.position = 'fixed';
    document.body.appendChild(circle);
    setInterval(mousemov, 1000);
}

function ReadCSVFile()
{
    var allText =[];
    var allTextLines = [];
    var Lines = [];

    var txtFile = new XMLHttpRequest();
    txtFile.open("GET", "file://C:\Users\SALVIO.005867\Desktop", true);
    alert($.csv.toObjects("file://C:\Users\SALVIO.005867\Desktop"));
    txtFile.onreadystatechange = function()
    {
        allText = txtFile.responseText;
        allTextLines = allText.split(/\r\n|\n/);
    };
}



/*function CalcTaxaUnitAtual(area)
{
  let taxaunit = 0;
  if (area <= 80)
  {
    taxaunit = 0.8897198;
  }
  else if (80 < area & area <= 200)
  {
    taxaunit = 4.973812;
  }
  else if (200 < area & area <= 400)
  {
    taxaunit = 8.978;
  }
  else if (400 < area)
  {
    taxaunit = 24.06104;
  }
  
  return taxaunit;
}

function CalcTaxaUnitProposta(area)
{
  let taxaunit = 0;
  if (area <= 80)
  {
    taxaunit = (1.7794 - 0) / (80 - 0) * area  + 0;
  }
  else if (80 < area & area <= 200)
  {
    taxaunit = (8.1682 - 1.7794) / (200 - 80) * (area - 80)  + 1.7794;
  }
  else if (200 < area & area <= 400)
  {
    taxaunit = (9.7878 - 8.1682) / (400 - 200) * (area - 200)  + 8.1682;
  }
  else if (400 < area)
  {
    taxaunit = (38.3342 - 9.7878) / (500 - 400) * (area - 400)  + 9.7878;
  }
  
  return taxaunit;
}

function CalcArrecadacaoMetodo1(N, calctaxa)
{
  let total = 0;
  let qtd = 1.0 / N;
  let taxaunit = 0;
  for (let area = 0; area <= 500; area += 1.0 / N)
  {
    if (calctaxa === 'taxa atual')
    {
      taxaunit = CalcTaxaUnitAtual(area);
    }
    else if (calctaxa === 'taxa proposta')
    {
      taxaunit = CalcTaxaUnitProposta(area);
    }
    total += area * qtd * taxaunit ;
  }

  return total;
}
function CalcArrecadacaoMetodo2(N, calctaxa)
{
  let total = 0;
  let u = 250;
  let sigma = 100;
  let qtd = 1;
  let taxaunit = 0;
  for (let area = 0; area <= 500; area += 1.0 / N)
  {
    qtd = 1 / N * 500 / (sigma * Math.sqrt(2 * Math.PI)) * Math.exp(-1/2 * Math.pow((area - u) / sigma, 2));
    if (calctaxa === 'taxa atual')
    {
      taxaunit = CalcTaxaUnitAtual(area);
    }
    else if (calctaxa === 'taxa proposta')
    {
      taxaunit = CalcTaxaUnitProposta(area);
    }
    total += area * qtd * taxaunit ;
  }

  return total;
}

let N;  // número de licenciamentos x 500
let arrecadacao;

document.getElementById('calc').innerHTML+= "<b>Método 1</b> <br><br>";
N = 1;
arrecadacao = CalcArrecadacaoMetodo1(N, 'taxa atual');
document.getElementById('calc').innerHTML+= "N° licenciamentos = " + N * 500 + "<br>arrecadação = R$ " + arrecadacao.toFixed(2) + "<br><br>";

N = 1;
arrecadacao = CalcArrecadacaoMetodo1(N, 'taxa proposta');
document.getElementById('calc').innerHTML+= "N° licenciamentos = " + N * 500 + "<br>arrecadação = R$ " + arrecadacao.toFixed(2) + "<br><br>";

N = 10000;
arrecadacao = CalcArrecadacaoMetodo1(N, 'taxa atual');
document.getElementById('calc').innerHTML+= "N° licenciamentos = " + N * 500 + "<br>arrecadação = R$ " + arrecadacao.toFixed(2) + "<br><br>";

N = 10000;
arrecadacao = CalcArrecadacaoMetodo1(N, 'taxa proposta');
document.getElementById('calc').innerHTML+= "N° licenciamentos = " + N * 500 + "<br>arrecadação = R$ " + arrecadacao.toFixed(2) + "<br><br>";

document.getElementById('calc').innerHTML+= "<b>Método 2</b> <br><br>";
N = 1;
arrecadacao = CalcArrecadacaoMetodo2(N, 'taxa atual');
document.getElementById('calc').innerHTML+= "N° licenciamentos = " + N * 500 + "<br>arrecadação = R$ " + arrecadacao.toFixed(2) + "<br><br>";

N = 1;
arrecadacao = CalcArrecadacaoMetodo2(N, 'taxa proposta');
document.getElementById('calc').innerHTML+= "N° licenciamentos = " + N * 500 + "<br>arrecadação = R$ " + arrecadacao.toFixed(2) + "<br><br>";

N = 10000;
arrecadacao = CalcArrecadacaoMetodo2(N, 'taxa atual');
document.getElementById('calc').innerHTML+= "N° licenciamentos = " + N * 500 + "<br>arrecadação = R$ " + arrecadacao.toFixed(2) + "<br><br>";


N = 10000;
arrecadacao = CalcArrecadacaoMetodo2(N, 'taxa proposta');
document.getElementById('calc').innerHTML+= "N° licenciamentos = " + N * 500 + "<br>arrecadação = R$ " + arrecadacao.toFixed(2) + "<br><br>";
*/
