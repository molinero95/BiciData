function getDistricts(){
    let chamberi = [
        {lat: 40.4461822, lng: -3.6913631}, //Castellana con Joaquín Costa
        {lat: 40.4411563, lng: -3.6919231}, //Plz San Juan de la Cruz
        {lat: 40.4377533, lng: -3.6905757}, //Gregorio Marañón
        {lat: 40.4351075, lng: -3.6887196}, //Monumento a Emilio Castelar
        {lat: 40.4330838, lng: -3.6887263}, //Ruben Darío
        {lat: 40.4250743, lng: -3.6903732}, //Colón
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
    return chamberi
}

function paint(){
    //Antes de pintar calcular los accidentes y establecer color
    let chamberiPinta = new google.maps.Polygon({
        path: distritos,
        geodesic: true,
        fillColor: '#FF0000',
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    chamberiPinta.setMap(map);
}
function initMap() {
    let distritos = getDistricts();
    var madrid = {lat: 40.416775, lng: -3.703790};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: madrid
    });
    
}
