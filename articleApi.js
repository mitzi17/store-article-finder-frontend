class articleApi {
    static baseURL = 'http://localhost:3000/articles'

    static fetchArticles() {
        fetch(this.baseURL)
        .then(response => response.json())
        .then(dataArray => dataArray["data"].forEach(article => { 
            
        const newArticle = new Article({id: article.id, ...article.attributes})
        
        newArticle.renderArticle()
        })
    )}

    static createArticle() {
        const formData = {
            name: nameField.value,
            number: numberField.value,
            price: priceField.value,
            size: sizeField.value,
            category: categoryField.value,
            location_id: locationDropdown.value,
            location: locationDropdown.selectedOptions[0].innerText
            }
            
        
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
            .then(newArticleData => {
                
                
                const newArticle = new Article({id: newArticleData.id, name: newArticleData.name, number: newArticleData.number, price: newArticleData.price, size: newArticleData.size, category: newArticleData.category, location_id: newArticleData.location_id, location: newArticleData.location.area})
                newArticle.renderArticle()
                newArticleForm.reset()
            })
    }

    


}