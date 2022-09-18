var circle = document.createElement('div');

document.onmousemove = function(e) // change
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
    alert(1)
    var txtFile = new XMLHttpRequest();
    txtFile.open("GET", "./craft.csv", true);
    alert($.csv.toObjects("./craft.csv"));
    txtFile.onreadystatechange = function()
    {
        allText = txtFile.responseText;
        allTextLines = allText.split(/\r\n|\n/);
    };
}

ReadCSVFile();
