let library = []
function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = false

    this.toggleStatus = function(){
        this.status = !this.status
    }
}

let hobbit = new Book('Hobbit', 'Tolkien', 310)
let LOTR_1 = new Book('Fellowship of the Ring', 'Tolkien', 423)
let LOTR_2 = new Book('Two Towers', 'Tolkien', 352)
let LOTR_3 = new Book('Return of the King', 'Tolkien', 416)

library.push(hobbit, LOTR_1, LOTR_2, LOTR_3)

//////////////////////////////////////////////////////////////

const button  = document.querySelector('.add')
const dialog  = document.querySelector('dialog')
const add     = document.querySelector('form > button')
const content = document.querySelector('.content')

button.addEventListener('click', function(){
    dialog.showModal()
})

add.addEventListener('click', function(){
    const title  =   document.querySelector('#title')
    const author =   document.querySelector('#author')
    const pages  =   document.querySelector('#pages')
    const read   =   document.querySelector('#read')

    if(title.value != '' && author.value != '' && pages.value != ''){
        let newBook = new Book(title.value, author.value, pages.value)
        if(read.value){
            newBook.toggleStatus()
        }

        addEntry(newBook)

        console.log(newBook)


    }

    
})

function addEntry(book){
    const newDiv = document.createElement('div')
    newDiv.style = 'border: 1px solid black; border-radius: 8px; width: 10vw; display: flex; flex-direction:column;'
    
    const newTitle = document.createElement('div')
    const newH3 = document.createElement('h3')
    newH3.appendChild(document.createTextNode(`Title: ${book.title}`))
    newTitle.appendChild(newH3)
    newDiv.appendChild(newTitle)

    const newAuthor = document.createElement('div')
    const newH3Au = document.createElement('h3')
    newH3Au.appendChild(document.createTextNode(`Author: ${book.author}`))
    newAuthor.appendChild(newH3Au)
    newDiv.appendChild(newAuthor)

    content.appendChild(newDiv)
}