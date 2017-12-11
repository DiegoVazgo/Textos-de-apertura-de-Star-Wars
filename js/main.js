var uneDiv = document.getElementById('uneDiv'),
    eicDiv = document.getElementById('eicDiv'),
    erdjDiv = document.getElementById('erdjDiv'),
    lafDiv = document.getElementById('lafDiv'),
    eadlcDiv = document.getElementById('eadlcDiv'),
    lvdlsDiv = document.getElementById('lvdlsDiv'),
    eddlfDiv = document.getElementById('eddlfDiv'),
    lujDiv = document.getElementById('lujDiv'),

    temaPrincipalDiv = document.getElementById('temaPrincipalDiv'),
    laMarchaImperialDiv = document.getElementById('laMarchaImperialDiv'),
    cantinaDiv = document.getElementById('cantinaDiv'),
    audio = document.getElementById('audio'),

    nameH2 = document.getElementById('nameH2'),
    titleH2 = document.getElementById('titleH2'),
    pUno = document.getElementById('pUno'),
    pDos = document.getElementById('pDos'),
    pTres = document.getElementById('pTres');

uneDiv.addEventListener('click', uneF);
eicDiv.addEventListener('click', eicF);
erdjDiv.addEventListener('click', erdjF);
lafDiv.addEventListener('click', lafF);
eadlcDiv.addEventListener('click', eadlcF);
lvdlsDiv.addEventListener('click', lvdlsF);
eddlfDiv.addEventListener('click', eddlfF);
lujDiv.addEventListener('click', lujF);

/*temaPrincipalDiv.addEventListener('click', temaPrincipalF);
laMarchaImperialDiv.addEventListener('click', laMarchaImperialF);
cantinaDiv.addEventListener('click', cantinaF);*/

function quitarSelectEpisodio(){
    if(uneDiv.classList.contains('select')){
        uneDiv.classList.remove('select');
    }
    else if(eicDiv.classList.contains('select')){
        eicDiv.classList.remove('select');
    }
    else if(erdjDiv.classList.contains('select')){
        erdjDiv.classList.remove('select');
    }
    else if(lafDiv.classList.contains('select')){
        lafDiv.classList.remove('select');
    }
    else if(eadlcDiv.classList.contains('select')){
        eadlcDiv.classList.remove('select');
    }
    else if(lvdlsDiv.classList.contains('select')){
        lvdlsDiv.classList.remove('select');
    }
    else if(eddlfDiv.classList.contains('select')){
        eddlfDiv.classList.remove('select');
    }
    else if(lujDiv.classList.contains('select')){
        lujDiv.classList.remove('select');
    }
}

function uneF(){
    quitarSelectEpisodio();
    uneDiv.classList.add('select');
    nameH2.textContent = une.name;
    titleH2.textContent = une.title;
    pUno.textContent = une.textoUno;
    pDos.textContent = une.textoDos;
    pTres.textContent = une.textoTres;
}

function eicF(){
    quitarSelectEpisodio();
    eicDiv.classList.add('select');
    nameH2.textContent = eic.name;
    titleH2.textContent = eic.title;
    pUno.textContent = eic.textoUno;
    pDos.textContent = eic.textoDos;
    pTres.textContent = eic.textoTres;
}

function erdjF(){
    quitarSelectEpisodio();
    erdjDiv.classList.add('select');
    nameH2.textContent = erdj.name;
    titleH2.textContent = erdj.title;
    pUno.textContent = erdj.textoUno;
    pDos.textContent = erdj.textoDos;
    pTres.textContent = erdj.textoTres;
}

//

function lafF(){
    quitarSelectEpisodio();
    lafDiv.classList.add('select');
    nameH2.textContent = laf.name;
    titleH2.textContent = laf.title;
    pUno.textContent = laf.textoUno;
    pDos.textContent = laf.textoDos;
    pTres.textContent = laf.textoTres;
}

function eadlcF(){
    quitarSelectEpisodio();
    eadlcDiv.classList.add('select');
    nameH2.textContent = eadlc.name;
    titleH2.textContent = eadlc.title;
    pUno.textContent = eadlc.textoUno;
    pDos.textContent = eadlc.textoDos;
    pTres.textContent = eadlc.textoTres;
}

function lvdlsF(){
    quitarSelectEpisodio();
    lvdlsDiv.classList.add('select');
    nameH2.textContent = lvdls.name;
    titleH2.textContent = lvdls.title;
    pUno.textContent = lvdls.textoUno;
    pDos.textContent = lvdls.textoDos;
    pTres.textContent = lvdls.textoTres;
}

function eddlfF(){
    quitarSelectEpisodio();
    eddlfDiv.classList.add('select');
    nameH2.textContent = eddlf.name;
    titleH2.textContent = eddlf.title;
    pUno.textContent = eddlf.textoUno;
    pDos.textContent = eddlf.textoDos;
    pTres.textContent = eddlf.textoTres;
}

function lujF(){
    quitarSelectEpisodio();
    lujDiv.classList.add('select');
    nameH2.textContent = luj.name;
    titleH2.textContent = luj.title;
    pUno.textContent = luj.textoUno;
    pDos.textContent = luj.textoDos;
    pTres.textContent = luj.textoTres;
}
