function initMap() {
    const mapInstance = new google.maps.Map(document.querySelector('#parksMap'),
        {
            center: directions.ironhackMAD.coords,
            zoom: 12,
            styles: mapStyles.yellowParks
        }
    )


    new google.maps.Marker({
        map: mapInstance,
        position: directions.ironhackBCN.coords,
        title: directions.ironhackBCN.title
    })
}