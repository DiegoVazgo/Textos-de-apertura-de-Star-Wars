var uneBtn = document.getElementById('uneBtn'),
    eicBtn = document.getElementById('eicBtn'),
    erdjBtn = document.getElementById('erdjBtn'),
    lafBtn = document.getElementById('lafBtn'),
    eadlcBtn = document.getElementById('eadlcBtn'),
    lvdlsBtn = document.getElementById('lvdlsBtn'),
    eddlfBtn = document.getElementById('eddlfBtn'),
    lujBtn = document.getElementById('lujBtn'),

    temaPrincipalBtn = document.getElementById('temaPrincipalBtn'),
    laMarchaImperialBtn = document.getElementById('laMarchaImperialBtn'),
    cantinaBtn = document.getElementById('cantinaBtn'),
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

uneBtn.addEventListener('click', uneF);
eicBtn.addEventListener('click', eicF);
erdjBtn.addEventListener('click', erdjF);
lafBtn.addEventListener('click', lafF);
eadlcBtn.addEventListener('click', eadlcF);
lvdlsBtn.addEventListener('click', lvdlsF);
eddlfBtn.addEventListener('click', eddlfF);
lujBtn.addEventListener('click', lujF);

temaPrincipalBtn.addEventListener('click', temaPrincipalF);
laMarchaImperialBtn.addEventListener('click', laMarchaImperialF);
cantinaBtn.addEventListener('click', cantinaF);

playPausaBtn.addEventListener('click', playPausaF);
reiniciarBtn.addEventListener('click', reiniciarF);
bajarVolumenBtn.addEventListener('click', bajarVolumenF);
subirVolumenBtn.addEventListener('click', subirVolumenF);

function quitarSelectEpisodio(){
    audio.pause();
    playPausaBtn.classList.remove('fa-pause');
    playPausaBtn.classList.add('fa-play');
    audio.currentTime = 0;
    if(uneBtn.classList.contains('select')){
        uneBtn.classList.remove('select');
    }
    else if(eicBtn.classList.contains('select')){
        eicBtn.classList.remove('select');
    }
    else if(erdjBtn.classList.contains('select')){
        erdjBtn.classList.remove('select');
    }
    else if(lafBtn.classList.contains('select')){
        lafBtn.classList.remove('select');
    }
    else if(eadlcBtn.classList.contains('select')){
        eadlcBtn.classList.remove('select');
    }
    else if(lvdlsBtn.classList.contains('select')){
        lvdlsBtn.classList.remove('select');
    }
    else if(eddlfBtn.classList.contains('select')){
        eddlfBtn.classList.remove('select');
    }
    else if(lujBtn.classList.contains('select')){
        lujBtn.classList.remove('select');
    }
    playPausaBtn.classList.remove('fa-play');
    playPausaBtn.classList.add('fa-pause');
    audio.play();
}

function uneF(){
    quitarSelectEpisodio();
    uneBtn.classList.add('select');
    nameH2.textContent = une.name;
    titleH2.textContent = une.title;
    pUno.textContent = une.textoUno;
    pDos.textContent = une.textoDos;
    pTres.textContent = une.textoTres;
}

function eicF(){
    quitarSelectEpisodio();
    eicBtn.classList.add('select');
    nameH2.textContent = eic.name;
    titleH2.textContent = eic.title;
    pUno.textContent = eic.textoUno;
    pDos.textContent = eic.textoDos;
    pTres.textContent = eic.textoTres;
}

function erdjF(){
    quitarSelectEpisodio();
    erdjBtn.classList.add('select');
    nameH2.textContent = erdj.name;
    titleH2.textContent = erdj.title;
    pUno.textContent = erdj.textoUno;
    pDos.textContent = erdj.textoDos;
    pTres.textContent = erdj.textoTres;
}

function lafF(){
    quitarSelectEpisodio();
    lafBtn.classList.add('select');
    nameH2.textContent = laf.name;
    titleH2.textContent = laf.title;
    pUno.textContent = laf.textoUno;
    pDos.textContent = laf.textoDos;
    pTres.textContent = laf.textoTres;
}

function eadlcF(){
    quitarSelectEpisodio();
    eadlcBtn.classList.add('select');
    nameH2.textContent = eadlc.name;
    titleH2.textContent = eadlc.title;
    pUno.textContent = eadlc.textoUno;
    pDos.textContent = eadlc.textoDos;
    pTres.textContent = eadlc.textoTres;
}

function lvdlsF(){
    quitarSelectEpisodio();
    lvdlsBtn.classList.add('select');
    nameH2.textContent = lvdls.name;
    titleH2.textContent = lvdls.title;
    pUno.textContent = lvdls.textoUno;
    pDos.textContent = lvdls.textoDos;
    pTres.textContent = lvdls.textoTres;
}

function eddlfF(){
    quitarSelectEpisodio();
    eddlfBtn.classList.add('select');
    nameH2.textContent = eddlf.name;
    titleH2.textContent = eddlf.title;
    pUno.textContent = eddlf.textoUno;
    pDos.textContent = eddlf.textoDos;
    pTres.textContent = eddlf.textoTres;
}

function lujF(){
    quitarSelectEpisodio();
    lujBtn.classList.add('select');
    nameH2.textContent = luj.name;
    titleH2.textContent = luj.title;
    pUno.textContent = luj.textoUno;
    pDos.textContent = luj.textoDos;
    pTres.textContent = luj.textoTres;
}

function quitarSelectMusica(){
    audio.pause();
    audio.currentTime = 0;
    if(temaPrincipalBtn.classList.contains('select')){
        temaPrincipalBtn.classList.remove('select');
    }
    else if(laMarchaImperialBtn.classList.contains('select')){
        laMarchaImperialBtn.classList.remove('select');
    }
    else if(cantinaBtn.classList.contains('select')){
        cantinaBtn.classList.remove('select');
    }
    playPausaBtn.classList.remove('fa-play');
    playPausaBtn.classList.add('fa-pause');
}

function temaPrincipalF(){
    quitarSelectMusica();
    temaPrincipalBtn.classList.add('select');
    audio.src = 'mp3/TemaPrincipal.mp3';
    audio.play();
}

function laMarchaImperialF(){
    quitarSelectMusica();
    laMarchaImperialBtn.classList.add('select');
    audio.src = 'mp3/LaMarchaImperial.mp3';
    audio.play();
}

function cantinaF(){
    quitarSelectMusica();
    cantinaBtn.classList.add('select');
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