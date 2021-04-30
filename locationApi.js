class locationApi {

    static baseURL = 'http://localhost:3000/locations'
            
    static fetchLocations(){
        fetch(this.baseURL)
        .then(r => r.json())
        .then( json => {
            json["data"].forEach(element => {
                const newLocation = new Location({id: element.id, ...element.attributes})
                newLocation.addToDom()
                newLocation.addLocationToDropDown()
            })
        })
    }
    
    
}