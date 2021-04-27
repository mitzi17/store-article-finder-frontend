
const attrList = document.getElementById("article-attrs")
const articleName = document.getElementById("article-name")
const articlePrice = document.getElementById("article-price")

fetch('http://localhost:3000/articles')
.then(response => response.json())
.then(dataArray => renderArticles(dataArray))

function renderArticles(articleResp) {
    const articles = articleResp.data
    articles.forEach(article => {

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

        attrList.append(pName, pPrice, pNumber, pSize, pLocation, pCategory)
        debugger})
    
}
