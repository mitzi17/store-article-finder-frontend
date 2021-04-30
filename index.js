const baseURL = 'http://localhost:3000'
const articlesURL = baseURL + '/articles'

const attrList = document.getElementById("article-attrs")
const btnContainer = document.getElementById("btn-container")
const newArticleForm = document.getElementById("article-form")

const nameField = document.getElementById("grid-name")
const numberField = document.getElementById("grid-number")
const priceField = document.getElementById("grid-price")
const sizeField = document.getElementById("grid-size")
const locationDropdown = document.getElementById("grid-location")
const categoryDropdown = document.getElementById("grid-category")




newArticleForm.addEventListener("submit", handleFormSubmit)

function handleFormSubmit(e) {
    e.preventDefault()
    
    articleApi.createArticle()
    form.reset()
}

articleApi.fetchArticles()

locationApi.fetchLocations()





