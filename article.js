class Article {

    static all = [ ]
    static attrList = document.getElementById("article-attrs")
    //creates new artile instance
    constructor({id, name, number, price, size, location_id, category}) {
        this.id = id
        this.name = name
        this.number = number
        this.price = price
        this.size = size
        this.location_id = location_id
        this.category = category

        this.element = document.createElement('div')
        this.element.id = `article-${id}`
        this.element.dataset.id = id

        this.element.addEventListener('click', this.articleFormClick)
        Article.all.push(this)
    }

    articleFormClick = (e) => {
        if (e.target.innerText === "Update") {
            this.createUpdateFields(e.target)
            e.target.innerText = "Save"
        } else if (e.target.innerText === "Delete") {
            this.deleteArticle(e)
        } else if(e.target.innerText === "Save"){
            this.saveUpdatedArticle()
            e.target.innerText = "Update"
        }
    }
    // this updates the HTML
    renderArticle() {
        const divAttributes = document.createElement('div')
        divAttributes.setAttribute("id", "attributes-container")

        const pName = document.createElement('p')
        pName.setAttribute("id", "name")
        const nodeName = document.createTextNode(`${this.name}`)
        pName.appendChild(nodeName)

        const pPrice = document.createElement('p')
        pPrice.setAttribute("id", "price")
        const nodePrice = document.createTextNode(`${this.price}`)
        pPrice.appendChild(nodePrice)

        const pNumber = document.createElement('p')
        pNumber.setAttribute("id", "number")
        const nodeNumber = document.createTextNode(`Number: ${this.number}`)
        pNumber.appendChild(nodeNumber)

        const pSize = document.createElement('p')
        pSize.setAttribute("id", "size")
        const nodeSize = document.createTextNode(`Size: ${this.size}`)
        pSize.appendChild(nodeSize)

        const pLocation = document.createElement('p')
        pLocation.setAttribute("id", "location")
        const nodeLocation = document.createTextNode(`Location: ${this.location_id}`)
        pLocation.appendChild(nodeLocation)

        const pCategory = document.createElement('p')
        pCategory.setAttribute("id", "category")
        const nodeCategory = document.createTextNode(`Category: ${this.category}`)
        pCategory.appendChild(nodeCategory)

        const updateBtn = document.createElement('button')
        updateBtn.innerText = "Update"
        updateBtn.setAttribute("class", "mt-1 w-1/2 flex items-center justify-center rounded-md bg-black text-white")
        updateBtn.setAttribute("id", `update-${this.id}`)
      
        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Delete"
        deleteBtn.setAttribute("class", "mt-2 mb-5 w-1/2 flex items-center justify-center rounded-md border border-gray-300")
        deleteBtn.setAttribute("id", `delete-${this.id}`)

        divAttributes.append(pName, pPrice, pNumber, pSize, pLocation, pCategory)
        this.element.append(divAttributes, updateBtn, deleteBtn)
        attrList.append(this.element)
        
    }

    attachToDom() {
        attrList.append(this.renderArticle())
    }

    deleteArticle = (e) => {
        this.element.remove()
        articleApi.deleteArticle(this.id)
    }

    createUpdateFields = (updateBtn) =>{
        
       
        const divElement = updateBtn.parentElement.getElementsByTagName('div')[0]
        const pElement = updateBtn.parentElement.getElementsByTagName('p')
        
        const name = pElement.name.innerText
        const price = pElement.price.innerText
        const number = pElement.number.innerText
        const size = pElement.size.innerText
        const location = pElement.location.innerText
        const category = pElement.category.innerText
        
        // update the html and interpolate values:
        divElement.innerHTML = `
        <input type="text" name="name" class="edit-name" value="${name}">
        <input type="number" name="price" class="edit-price" min="0" step=".01" value="${price}">
        <input type="text" name="number" class="edit-number" value="${number}">
        <input type="text" name="size" class="edit-number" value="${size}">
        <input type="text" name="location" class="edit-number" value="${location}">
        <input type="text" name="category" class="edit-number" value="${category}">
        `
    }

    saveUpdatedArticle = () => {
        this.name = this.element.querySelector("#name").value
        this.name = this.element.querySelector("#price").value
        this.number = this.element.querySelector("#number").value
        this.size = this.element.querySelector("#size").value
        this.location = this.element.querySelector("#location").value
        this.category = this.element.querySelector("#category").value
    
        articleApi.updateArticle(this) // moved fetch to itemApi for separation of concerns
    }



    static filterByLocation(filteredLocation) {
        if (filteredLocation) {
            const filteredArticles = Article.all.filter((article) => {
                return article.location_id === parseInt(filteredLocation.id)
            })
            Article.attrList.innerHTML = ''
            for (const article of filteredArticles) {
            article.attachToDom()
            }
         } else {
            Article.attrList.innerHTML = ''
            for (const article of Article.all) {
                article.attachToDom()
                }
         }
         
    }

    

}