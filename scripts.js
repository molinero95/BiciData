function getDistricts(){
    let distritos = [];
    let chamberi = [
        {lat: 40.4461822, lng: -3.6913631}, //Castellana con Joaquín Costa
        {lat: 40.4411563, lng: -3.6919231}, //Plz San Juan de la Cruz
        {lat: 40.4377533, lng: -3.6905757}, //Gregorio Marañón
        {lat: 40.4351075, lng: -3.6887196}, //Monumento a Emilio Castelar
        {lat: 40.4330838, lng: -3.6887263}, //Ruben Darío
        {lat: 40.4250743, lng: -3.6903732}, //Colón
        {lat: 40.4277602, lng: -3.6957562}, //Alonso Martinez
        {lat: 40.4288781, lng: -3.7022974}, //Bilbao
        {lat: 40.4294542, lng: -3.7058214}, //San Bernardo
        {lat: 40.4312285, lng: -3.7171189}, //Arguelles
        {lat: 40.4330264, lng: -3.7180536}, //Princesa con Meléndez Valdés
        {lat: 40.4332535, lng: -3.7174267}, //Meléndez Valdés con Arcipreste de Hita
        {lat: 40.4346921, lng: -3.7183339}, //Arcipreste de Hita con Isaac Peral. MEJORAR AQUI
        {lat: 40.4395967, lng: -3.7175963}, //Plaza cristo rey
        {lat: 40.4437752, lng: -3.7196728}, //Plaza Eugenio María de Hostos
        {lat: 40.4449521, lng: -3.7198333}, //Plaza Marqués de comillas
        {lat: 40.4466871, lng: -3.7181462}, //Metropolitano
        {lat: 40.4455946, lng: -3.7146164}, //Moncloa con Reina Victoria
        {lat: 40.4469749, lng: -3.7093029}, //Reina Victoria curva
        {lat: 40.4461822, lng: -3.6913631} //Vuelta
    ];
    distritos.push(chamberi);
    let nuevosMinisterios = [
        {lat: 40.4462073, lng: -3.6912829}, //Nuevos Ministerios
        {lat: 40.4470462, lng: -3.7083913}, //Hospital Cruz Roja
        {lat: 40.4523766, lng: -3.7117199}, //Jefatura Superior de Policia Nacional
        {lat: 40.4530123, lng: -3.7133721}, //Calle Numancia
        {lat: 40.4538879, lng: -3.7127794}, //Calle Numancia con av Pablo Iglesias
        {lat: 40.4551737, lng: -3.7131683}, //Curva Pablo Iglesias
        {lat: 40.4622533, lng: -3.7083296}, //Ofelia Nieto
        {lat: 40.4642287, lng: -3.7093381}, //Calle Villaamil
        {lat: 40.4656905, lng: -3.7104368}, //Calle Villaamil rotonda
        {lat: 40.4683599, lng: -3.7133185}, //Sinesio Delgado curva
        {lat: 40.4709074, lng: -3.7117574}, //Sinesio Delgado curva
        {lat: 40.4720276, lng: -3.7038315}, //Sinesio Delgado curva
        {lat: 40.4748255, lng: -3.7006464}, //Sinesio Delgado curva
        {lat: 40.4749609, lng: -3.6994624}, //Sinesio Delgado curva
        {lat: 40.4744949, lng: -3.6974073}, //Sinesio Delgado curva
        {lat: 40.4747362, lng: -3.6957706}, //Sinesio Delgado curva
        {lat: 40.4744983, lng: -3.6940098}, //Sinesio Delgado curva
        {lat: 40.4746939, lng: -3.6924514}, //Sinesio Delgado estrechamiento
        {lat: 40.474449, lng: -3.6909414}, //Sinesio Delgado 3 carriles
        {lat: 40.4746582, lng: -3.6892631}, //Sinesio Delgado rotonda
        {lat: 40.4741122, lng: -3.6870455}, //Sinesio Delgado con Castellana
        {lat: 40.4659765, lng: -3.6893288},
        {lat: 40.4462073, lng: -3.6912829}, //Nuevos Ministerios
    ];
    distritos.push(nuevosMinisterios);
    console.log(distritos);
    return distritos;
}

function initMap() {
    let distritos = getDistricts();
    var madrid = {lat: 40.416775, lng: -3.703790};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: madrid
    });
    //Antes de pintar calcular los accidentes y establecer color
    let chamberiPinta = new google.maps.Polygon({
        path: distritos[0],
        geodesic: true,
        fillColor: '#FF0000',
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    let tetuanPinta = new google.maps.Polygon({
        path: distritos[1],
        geodesic: true,
        fillColor: '#03AEB2',
        strokeColor: '#03AEB2',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    chamberiPinta.setMap(map);
    tetuanPinta.setMap(map);
}

