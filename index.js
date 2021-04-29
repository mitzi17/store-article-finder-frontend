const baseURL = 'http://localhost:3000'
const articlesURL = baseURL + '/articles'

const attrList = document.getElementById("article-attrs")
const btnContainer = document.getElementById("btn-container")
const newArticleForm = document.getElementById("article-form")

const nameField = document.getElementById("grid-name")
const numberField = document.getElementById("grid-number")
const priceField = document.getElementById("grid-price")
const sizeField = document.getElementById("grid-size")
const locationField = document.getElementById("grid-location")
const categoryField = document.getElementById("grid-category")


newArticleForm.addEventListener("submit", handleFormSubmit)

function handleFormSubmit(e) {
    e.preventDefault()
    const formData = {
        name: nameField.value,
        number: numberField.value,
        price: priceField.value,
        size: sizeField.value,
        location: locationField.value,
        category: categoryField.value
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

    fetch(articlesURL, configObj)
        .then(response => response.json())
        .then(data => {
            debugger
            console.log(data)
        })
}

function fetchArticles() {
    fetch('http://localhost:3000/articles')
    .then(response => response.json())
    .then(dataArray => renderArticles(dataArray))
}

function renderArticles(articleResp) {
    const articles = articleResp.data
    articles.forEach(article => { renderArticle(article)
    })
}

function renderArticle(article) {

        const pName = document.createElement('p')
        const nodeName = document.createTextNode(`${article.attributes.name}`)
        pName.appendChild(nodeName)

        const pPrice = document.createElement('p')
        const nodePrice = document.createTextNode(`${article.attributes.price}`)
        pPrice.appendChild(nodePrice)

        const pNumber = document.createElement('p')
        const nodeNumber = document.createTextNode(`Number: ${article.attributes.number}`)
        pNumber.appendChild(nodeNumber)

        const pSize = document.createElement('p')
        const nodeSize = document.createTextNode(`Size: ${article.attributes.size}`)
        pSize.appendChild(nodeSize)

        const pLocation = document.createElement('p')
        const nodeLocation = document.createTextNode(`Location: ${article.attributes.location}`)
        pLocation.appendChild(nodeLocation)

        const pCategory = document.createElement('p')
        const nodeCategory = document.createTextNode(`Category: ${article.attributes.category}`)
        pCategory.appendChild(nodeCategory)

        const updateBtn = document.createElement('button')
        updateBtn.innerText = "Update"
        updateBtn.setAttribute("class", "w-1/2 flex items-center justify-center rounded-md bg-black text-white")
        updateBtn.setAttribute("id", `update-${article.id}`)
      
        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Delete"
        deleteBtn.setAttribute("class", "w-1/2 flex items-center justify-center rounded-md border border-gray-300")
        deleteBtn.setAttribute("id", `delete-${article.id}`)

        attrList.append(pName, pPrice, pNumber, pSize, pLocation, pCategory, updateBtn, deleteBtn)
    }

fetchArticles()
