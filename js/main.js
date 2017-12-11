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
    playPausaBtn = document.getElementById('playPausaBtn'),
    reiniciarBtn = document.getElementById('reiniciarBtn'),
    bajarVolumenBtn = document.getElementById('bajarVolumenBtn'),
    subirVolumenBtn = document.getElementById('subirVolumenBtn'),

    nameH2 = document.getElementById('nameH2'),
    titleH2 = document.getElementById('titleH2'),
    pUno = document.getElementById('pUno'),
    pDos = document.getElementById('pDos'),
    pTres = document.getElementById('pTres');

audio.volume = 0.5;

uneDiv.addEventListener('click', uneF);
eicDiv.addEventListener('click', eicF);
erdjDiv.addEventListener('click', erdjF);
lafDiv.addEventListener('click', lafF);
eadlcDiv.addEventListener('click', eadlcF);
lvdlsDiv.addEventListener('click', lvdlsF);
eddlfDiv.addEventListener('click', eddlfF);
lujDiv.addEventListener('click', lujF);

temaPrincipalDiv.addEventListener('click', temaPrincipalF);
laMarchaImperialDiv.addEventListener('click', laMarchaImperialF);
cantinaDiv.addEventListener('click', cantinaF);
playPausaBtn.addEventListener('click', playPausaF);
reiniciarBtn.addEventListener('click', reiniciarF);
bajarVolumenBtn.addEventListener('click', bajarVolumenF);
subirVolumenBtn.addEventListener('click', subirVolumenF);

function quitarSelectEpisodio(){
    audio.pause();
    playPausaBtn.classList.remove('fa-pause');
    playPausaBtn.classList.add('fa-play');
    audio.currentTime = 0;
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
    playPausaBtn.classList.remove('fa-play');
    playPausaBtn.classList.add('fa-pause');
    audio.play();
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

function quitarSelectMusica(){
    audio.pause();
    audio.currentTime = 0;
    if(temaPrincipalDiv.classList.contains('select')){
        temaPrincipalDiv.classList.remove('select');
    }
    else if(laMarchaImperialDiv.classList.contains('select')){
        laMarchaImperialDiv.classList.remove('select');
    }
    else if(cantinaDiv.classList.contains('select')){
        cantinaDiv.classList.remove('select');
    }
    playPausaBtn.classList.remove('fa-play');
    playPausaBtn.classList.add('fa-pause');
}

function temaPrincipalF(){
    quitarSelectMusica();
    temaPrincipalDiv.classList.add('select');
    audio.src = 'mp3/TemaPrincipal.mp3';
    audio.play();
}

function laMarchaImperialF(){
    quitarSelectMusica();
    laMarchaImperialDiv.classList.add('select');
    audio.src = 'mp3/LaMarchaImperial.mp3';
    audio.play();
}

function cantinaF(){
    quitarSelectMusica();
    cantinaDiv.classList.add('select');
    audio.src = 'mp3/Cantina.mp3';
    audio.play();
}

function playPausaF(){
    if(audio.paused){
        playPausaBtn.classList.remove('fa-play');
        playPausaBtn.classList.add('fa-pause');
        audio.play();
    }else {
        playPausaBtn.classList.remove('fa-pause');
        playPausaBtn.classList.add('fa-play');
        audio.pause();
    }
}

function reiniciarF(){
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

function bajarVolumenF(){
    audio.volume -= 0.05;
}

function subirVolumenF(){
    audio.volume += 0.05;
}