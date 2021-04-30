class articleApi {
    static baseURL = 'http://localhost:3000/articles'

    static fetchArticles() {
        fetch(this.baseURL)
        .then(response => response.json())
        .then(dataArray => dataArray["data"].forEach(article => { 
        const newArticle = new Article({id: article.id, ...article.attributes})
        newArticle.attachToDom()
        })
    )}

    static createArticle() {
        const formData = {
            name: nameField.value,
            number: numberField.value,
            price: priceField.value,
            size: sizeField.value,
            location_id: locationDropdown.value,
            category: categoryDropdown.value
            
        }
        debugger
    
        const configObj = {
            method: 'POST', 
            headers: { 
                "Content-Type": "application/json", 
                Accept: "application/json"
            },
            body: JSON.stringify(formData) 
        }
    
        fetch(this.baseURL, configObj)
            .then(response => response.json())
            .then(data => {
                const article = data.data
                const newArticle = new Article({id: article.id, ...article.attributes})
                newArticle.attachToDom()
            })
    }

    addCategoryToDropDown(){
        const option = document.createElement('option')
        
        option.innerText = this
        categoryDropdown.append(option)
    }

        
}