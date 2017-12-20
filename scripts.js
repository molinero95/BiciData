//Meter en un JSON
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
        {lat: 40.4659765, lng: -3.6893288}, //Plaza de Castilla
        {lat: 40.4462073, lng: -3.6912829}, //Nuevos Ministerios
    ];
    distritos.push(nuevosMinisterios);
    //Terminar
    let manoteras = [
        {lat: 40.48394, lng: -3.6733336}, //M11 con A1
        {lat: 40.4909269, lng: -3.6717726}, //A1
        {lat: 40.5034809, lng: -3.6579914}, //A1 via de servicio
        //Seguir por aqui
        {lat: 40.5091634, lng: -3.6254723}, //Curva colegio
        {lat: 40.5085406, lng: -3.6230203}, //Camino viejo del cura
        {lat: 40.5098617, lng: -3.6208385}, //Curva colegio
        {lat: 40.5097576, lng: -3.6177968}, //Curva colegio
        {lat: 40.5107299, lng: -3.6154616}, //Curva colegio
        {lat: 40.510477, lng: -3.6139978}, //Colegio Escandinavo
        {lat: 40.5012218, lng: -3.6016404}, //M12
        {lat: 40.4724417, lng: -3.6012862}, //Elipa
        {lat: 40.4700992, lng: -3.6024925}, //Ariadna/Elipa 
        {lat: 40.4713994, lng: -3.6066256}, //Calle Ariadna
        {lat: 40.4722702, lng: -3.6232352}, //M11
        {lat: 40.470457, lng: -3.6245469}, //Via Dublín
        {lat: 40.468595, lng: -3.6242277}, //IFEMA
        {lat: 40.4683971, lng: -3.6275209}, //M40 entrada 5
        {lat: 40.4604459, lng: -3.6213954}, //M40 salida 6
        {lat: 40.4550925, lng: -3.6120607}, //M40
        {lat: 40.4527905, lng: -3.6053651}, //M40
        {lat: 40.4533948, lng: -3.6045876}, //Osuna Camping
        {lat: 40.4496326, lng: -3.6038393}, //A2 Av América
        {lat: 40.4492287, lng: -3.6305219}, //A2
        {lat: 40.4484935, lng: -3.6366989}, //A2
        {lat: 40.4497676, lng: -3.6458168}, //A2
        {lat: 40.4493461, lng: -3.6480506}, //Asuna con A2
        {lat: 40.4593258, lng: -3.6562734}, //Asuna
        {lat: 40.4633048, lng: -3.6620066}, //Mesena
        {lat: 40.4764452, lng: -3.6657567}, //Golfo de Salónica
        {lat: 40.4776936, lng: -3.665413}, //Golfo de Salónica
        {lat: 40.4830271, lng: -3.6600191}, //Manuel Azaña
        {lat: 40.48394, lng: -3.6733336}, //M11 con A1
    ];
    distritos.push(manoteras);
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
    }).setMap(map);
    let tetuanPinta = new google.maps.Polygon({
        path: distritos[1],
        geodesic: true,
        fillColor: '#03AEB2',
        strokeColor: '#03AEB2',
        strokeOpacity: 1.0,
        strokeWeight: 2
    }).setMap(map);
    let manoteras = new google.maps.Polygon({
        path: distritos[2],
        geodesic: true,
        fillColor: '#03AEB2',
        strokeColor: '#03AEB2',
        strokeOpacity: 1.0,
        strokeWeight: 2
    }).setMap(map);

}

