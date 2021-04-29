class Article {

    static all = [ ]
    //creates new artile instance
    constructor({id, name, number, price, size, location_id, category_id}) {
        this.id = id
        this.name = name
        this.number = number
        this.price = price
        this.size = size
        this.location_id = location_id
        this.category_id = category_id

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

        const pName = document.createElement('p')
        const nodeName = document.createTextNode(`${this.name}`)
        pName.appendChild(nodeName)

        const pPrice = document.createElement('p')
        const nodePrice = document.createTextNode(`${this.price}`)
        pPrice.appendChild(nodePrice)

        const pNumber = document.createElement('p')
        const nodeNumber = document.createTextNode(`Number: ${this.number}`)
        pNumber.appendChild(nodeNumber)

        const pSize = document.createElement('p')
        const nodeSize = document.createTextNode(`Size: ${this.size}`)
        pSize.appendChild(nodeSize)

        const pLocation = document.createElement('p')
        const nodeLocation = document.createTextNode(`Location: ${this.location}`)
        pLocation.appendChild(nodeLocation)

        const pCategory = document.createElement('p')
        const nodeCategory = document.createTextNode(`Category: ${this.category}`)
        pCategory.appendChild(nodeCategory)

        const updateBtn = document.createElement('button')
        updateBtn.innerText = "Update"
        updateBtn.setAttribute("class", "w-1/2 flex items-center justify-center rounded-md bg-black text-white")
        updateBtn.setAttribute("id", `update-${this.id}`)
      
        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Delete"
        deleteBtn.setAttribute("class", "w-1/2 flex items-center justify-center rounded-md border border-gray-300")
        deleteBtn.setAttribute("id", `delete-${this.id}`)

        this.element.append(pName, pPrice, pNumber, pSize, pLocation, pCategory, updateBtn, deleteBtn)
        attrList.append(this.element)
        return this.element
    }

    attachToDom() {
        attrList.append(this.renderArticle())
    }

}