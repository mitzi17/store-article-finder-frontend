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

    static updateArticle(article){
        
        let {name, number, price, size, location_id, category} = article
        const articleInfo = {
            name,
            number,
            price,
            size,
            location_id: locationDropdown.value,
            category
        }

        const configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(articleInfo)
        }
  
        fetch(`${this.baseURL}/${article.id}`, configObj)
        .then(r => r.json())
        .then(json => {
            article.renderArticle()
        })
    }

    static deleteArticle(id){
        const configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }
        
        fetch(`${this.baseURL}/${id}`, configObj)
            .then(r => r.json())
            .then(json => alert(json.message))
    }

    

        
}