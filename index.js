const baseURL = 'http://localhost:3000'
const articlesURL = baseURL + '/articles'

const attrList = document.getElementById("article-attrs")
const divAttributes = document.getElementById("attributes-container")
const btnContainer = document.getElementById("btn-container")
const newArticleForm = document.getElementById("article-form")

const nameField = document.getElementById("grid-name")
const numberField = document.getElementById("grid-number")
const priceField = document.getElementById("grid-price")
const sizeField = document.getElementById("grid-size")
const locationDropdown = document.getElementById("grid-location")
const categoryField = document.getElementById("grid-category")

const locationContainer = document.getElementById("location-container")
const sortBtn = document.createElement('button')



newArticleForm.addEventListener("submit", handleFormSubmit)

function handleFormSubmit(e) {
    e.preventDefault()
    
    articleApi.createArticle()
    
}

articleApi.fetchArticles()

locationApi.fetchLocations()


function sortButton() {
   
    sortBtn.innerText = "Sort"
    sortBtn.setAttribute("class", "ml-5 tems-center justify-center rounded-md border border-gray-300")
    locationContainer.append(sortBtn)
}

sortButton()

sortBtn.addEventListener("click", handleSortBtn)

function handleSortBtn(e) {
    e.preventDefault()
    Article.sortArticles()
    
}

