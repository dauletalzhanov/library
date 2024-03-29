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
        if(read.checked){
            newBook.toggleStatus()
        }

        createNewBook(newBook)

        console.log(newBook)

        
    }

    
})

//////////////////////////////////////////////////////////////

function createNewBook(book = null){
    aBook = document.querySelector('.book')
    newBook = aBook.cloneNode(true)
    
    newBook.style = "display: flex"
    content.appendChild(newBook)

    if(book != null){
        newTitle = newBook.querySelector('.newTitle')
        newTitle.innerHTML = `${book.title}`
        
        newAuthor = newBook.querySelector('.newAuthor')
        newAuthor.innerHTML = `${book.author}`

        newPages = newBook.querySelector('.newPages')
        newPages.innerHTML = `${book.pages}`

        if(book.status){
            newStatus = newBook.querySelector('.newStatus')
            newStatus.checked = true;
        }
        
    }

    const remo = newBook.querySelector('.remove')
    remo.addEventListener('click', function(){
        remo.parentNode.parentNode.remove()
    })

    const edit = newBook.querySelector('.edit')
    edit.addEventListener('click', function(){
        if(this.innerHTML == 'Edit'){
            this.innerHTML = "Update"

            let updatedBook = this.parentNode.parentNode
            newTitle = updatedBook.querySelector('.newTitle')
            newAuthor = updatedBook.querySelector('.newAuthor')
            newPages = updatedBook.querySelector('.newPages')
            
            
            newTitle.innerHTML  =  `<input type='text' value='${book.title}'>`
            newAuthor.innerHTML =  `<input type='text' value='${book.author}'>`
            newPages.innerHTML  =  `<input type='number' min=0 value='${book.pages}'>`
        }
            
        else{
            edit.innerHTML = 'Edit'

            let updatedBook = this.parentNode.parentNode
            newTitle = updatedBook.querySelector('.newTitle > input')
            newAuthor = updatedBook.querySelector('.newAuthor > input')
            newPages = updatedBook.querySelector('.newPages > input')
            
            updatedTitle = newTitle.value
            updatedAuthor = newAuthor.value
            updatedPages = newPages.value
            
            newTitle.parentNode.innerHTML  =  `${updatedTitle}`
            newAuthor.parentNode.innerHTML =  `${updatedAuthor}`
            newPages.parentNode.innerHTML  =  `${updatedPages}`

            
        }
    })

    

}
    
for(let i=0; i<library.length; i++){
    createNewBook(library[i])
}

