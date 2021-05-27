class Article {

    static all = [ ]
    static containerList = document.getElementById("article-attrs")
   static divAttributes = document.getElementById("attributes-container")
    //creates new artile instance
    constructor({id, name, number, price, size, location, location_id, category}) {
        this.id = id
        this.name = name
        this.number = number
        this.price = price
        this.size = size
        this.location = location
        this.location_id = location_id
        this.category = category
      
        this.element = document.createElement('div')
        this.element.id = `article-${id}`
        this.element.dataset.id = id

       
        Article.all.push(this)
    }

    
    
    renderArticle() {
        const divAttributes = document.createElement('div')
        divAttributes.setAttribute("id", "attributes-container")
        divAttributes.setAttribute("class", "mt-2 border")

        const pName = document.createElement('p')
        pName.setAttribute("id", "name")
        const nodeName = document.createTextNode(`${this.name}`)
        pName.appendChild(nodeName)

        const pPrice = document.createElement('p')
        pPrice.setAttribute("id", "price")
        const nodePrice = document.createTextNode(`$ ${this.price}`)
        pPrice.appendChild(nodePrice)

        const pNumber = document.createElement('p')
        pNumber.setAttribute("id", "number")
        const nodeNumber = document.createTextNode(`Number: ${this.number}`)
        pNumber.appendChild(nodeNumber)

        const pSize = document.createElement('p')
        pSize.setAttribute("id", "size")
        const nodeSize = document.createTextNode(`Size Availability: ${this.size}`)
        pSize.appendChild(nodeSize)

        const pLocation = document.createElement('p')
        pLocation.setAttribute("id", "location")
        const nodeLocation = document.createTextNode(`Location: ${this.location}`)
        pLocation.appendChild(nodeLocation)

        const pCategory = document.createElement('p')
        pCategory.setAttribute("id", "category")
        const nodeCategory = document.createTextNode(`Category: ${this.category}`)
        pCategory.appendChild(nodeCategory)

        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Delete"
        deleteBtn.setAttribute("class", "mb-3 w-1/2 flex items-center justify-center rounded-md bg-black text-white")
        deleteBtn.setAttribute("id", `delete-${this.id}`)
        deleteBtn.addEventListener('click', this.deleteArticle)

        divAttributes.append(pName, pPrice, pNumber, pSize, pLocation, pCategory, deleteBtn)
        attrList.append(divAttributes)
      
        //attrList.append(this.element)
        
        
    }

    attachToDom() {
        attrList.append(this.renderArticle())
    }

    deleteArticle = (e) => {
        e.preventDefault(e)
        
        
        this.element.remove()
        articleApi.deleteArticle(this.id)
       
    }

    



    static filterByLocation(filteredLocation) {
        if (filteredLocation) {
            const filteredArticles = Article.all.filter((article) => {
                return article.location_id === parseInt(filteredLocation.id)
               
            })
            Article.containerList.innerHTML = ''
            for (const article of filteredArticles) {
            article.renderArticle()
            
            }
         } else {
            Article.containerList.innerHTML = ''
            for (const article of Article.all) {
                article.renderArticle()
                }
         }
         
    }

    

}