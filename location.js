class Location {

static all = [ ]

static locationContainer = document.getElementById('location-container')

constructor({id, area }){
    this.id = id 
    this.area = area
    this.active = false

    this.element = document.createElement('button')

    Location.all.push(this)
}

render(){
    this.element.innerText = this.area 
    this.element.id = `location-${this.id}`
    return this.element
}

addToDom(){
    Location.locationContainer.append(this.render())
    this.addListeners()
}

addListeners(){
    this.element.addEventListener('click', this.setActiveLocation)
}

setActiveLocation = (e) => {
    let filteredLocation 
    Location.all.forEach(location => {

        if(location.element === this.element && !this.active){
            
            location.element.classList.add('activated')
            location.active = true
            filteredLocation = location
        } else{
            location.element.classList.remove('activated')
            location.active = false
        }
        
    }) 
    
    Article.filterByLocation(filteredLocation)
}

addLocationToDropDown(){
    const option = document.createElement('option')
    option.value  = this.id 
    option.innerText = this.area
    locationDropdown.append(option)
   
}

}