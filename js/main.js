//Obteniendo nodos del DOM para poder modificarlos después
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

    nombreH2 = document.getElementById('nombreH2'),
    tituloH2 = document.getElementById('tituloH2'),
    pUno = document.getElementById('pUno'),
    pDos = document.getElementById('pDos'),
    pTres = document.getElementById('pTres');

//Se agrega un Event Listener para poder cambiar el texto
uneBtn.addEventListener('click', uneF);
eicBtn.addEventListener('click', eicF);
erdjBtn.addEventListener('click', erdjF);
lafBtn.addEventListener('click', lafF);
eadlcBtn.addEventListener('click', eadlcF);
lvdlsBtn.addEventListener('click', lvdlsF);
eddlfBtn.addEventListener('click', eddlfF);
lujBtn.addEventListener('click', lujF);

//Se agrega un Event Listener para poder cambiar la música
temaPrincipalBtn.addEventListener('click', temaPrincipalF);
laMarchaImperialBtn.addEventListener('click', laMarchaImperialF);
cantinaBtn.addEventListener('click', cantinaF);

//Se agrega un Event Listener para poder controlar la música
playPausaBtn.addEventListener('click', playPausaF);
reiniciarBtn.addEventListener('click', reiniciarF);
bajarVolumenBtn.addEventListener('click', bajarVolumenF);
subirVolumenBtn.addEventListener('click', subirVolumenF);

//Lo siguiente es para cambiar los textos por el de cada película
//Función para poder quitar la clase select del nombre del episodio
function quitarSelectEpisodio(){
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
}

//Función que cambia el texto por el de Una Nueva Esperanza
function uneF(){
    quitarSelectEpisodio();
    uneBtn.classList.add('select');
    nombreH2.textContent = une.name;
    tituloH2.textContent = une.title;
    pUno.textContent = une.textoUno;
    pDos.textContent = une.textoDos;
    pTres.textContent = une.textoTres;
}

//Función que cambia el texto por el de El Imperio Contraataca
function eicF(){
    quitarSelectEpisodio();
    eicBtn.classList.add('select');
    nombreH2.textContent = eic.name;
    tituloH2.textContent = eic.title;
    pUno.textContent = eic.textoUno;
    pDos.textContent = eic.textoDos;
    pTres.textContent = eic.textoTres;
}

//Función que cambia el texto por el de El Retorno del Jedi
function erdjF(){
    quitarSelectEpisodio();
    erdjBtn.classList.add('select');
    nombreH2.textContent = erdj.name;
    tituloH2.textContent = erdj.title;
    pUno.textContent = erdj.textoUno;
    pDos.textContent = erdj.textoDos;
    pTres.textContent = erdj.textoTres;
}

//Función que cambia el texto por el de La Amenaza Fantasma
function lafF(){
    quitarSelectEpisodio();
    lafBtn.classList.add('select');
    nombreH2.textContent = laf.name;
    tituloH2.textContent = laf.title;
    pUno.textContent = laf.textoUno;
    pDos.textContent = laf.textoDos;
    pTres.textContent = laf.textoTres;
}

//Función que cambia el texto por el de El Ataque de los Clones
function eadlcF(){
    quitarSelectEpisodio();
    eadlcBtn.classList.add('select');
    nombreH2.textContent = eadlc.name;
    tituloH2.textContent = eadlc.title;
    pUno.textContent = eadlc.textoUno;
    pDos.textContent = eadlc.textoDos;
    pTres.textContent = eadlc.textoTres;
}

//Función que cambia el texto por el de La Venganza de los Sith
function lvdlsF(){
    quitarSelectEpisodio();
    lvdlsBtn.classList.add('select');
    nombreH2.textContent = lvdls.name;
    tituloH2.textContent = lvdls.title;
    pUno.textContent = lvdls.textoUno;
    pDos.textContent = lvdls.textoDos;
    pTres.textContent = lvdls.textoTres;
}

//Función que cambia el texto por el de El Despertar de la Fuerza
function eddlfF(){
    quitarSelectEpisodio();
    eddlfBtn.classList.add('select');
    nombreH2.textContent = eddlf.name;
    tituloH2.textContent = eddlf.title;
    pUno.textContent = eddlf.textoUno;
    pDos.textContent = eddlf.textoDos;
    pTres.textContent = eddlf.textoTres;
}

//Función que cambia el texto por el de Los Últimos Jedi
function lujF(){
    quitarSelectEpisodio();
    lujBtn.classList.add('select');
    nombreH2.textContent = luj.name;
    tituloH2.textContent = luj.title;
    pUno.textContent = luj.textoUno;
    pDos.textContent = luj.textoDos;
    pTres.textContent = luj.textoTres;
}

//Lo siguiente es para poder cambiar y controlar la música
//Se fija el volumen del audio a la mitad
audio.volume = 0.5;

//Función para poder quitar la clase select del nombre de la música
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
    playPausaBtn.classList.remove('fa-pause');
    playPausaBtn.classList.add('fa-play');
}

//Función que cambia la cancion por el Tema Principal
function temaPrincipalF(){
    quitarSelectMusica();
    temaPrincipalBtn.classList.add('select');
    audio.src = 'mp3/TemaPrincipal.mp3';
}

//Función que cambia la cancion por La Marcha Imperial
function laMarchaImperialF(){
    quitarSelectMusica();
    laMarchaImperialBtn.classList.add('select');
    audio.src = 'mp3/LaMarchaImperial.mp3';
}

//Función que cambia la cancion por la cancon de la Cantina
function cantinaF(){
    quitarSelectMusica();
    cantinaBtn.classList.add('select');
    audio.src = 'mp3/Cantina.mp3';
}

//Función que cambia el ícono de play o pausa según sea el estado del audio
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

//Función que reinicia el audio solo si el usuario lo desea
function reiniciarF(){
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

//Función de bajar el volumen al audio
function bajarVolumenF(){
    audio.volume -= 0.05;
}

//Función de subir el volumen al audio
function subirVolumenF(){
    audio.volume += 0.05;
}