let addBook = document.querySelector("#addItems");
let dialog = document.querySelector("dialog");
let closebtn = document.querySelector("dialog button");
let submit = document.querySelector("#submit");

//values
let author = document.querySelector("#author");
let bookTitle = document.querySelector("#bookTitle");
let pages = document.querySelector("#pages");

//dialog  open and closing 
addBook.addEventListener("click",()=>{
    dialog.showModal();
})
closebtn.addEventListener("click",()=>{
    dialog.close();
    })


class Book{
    constructor(author,bookTitle,pages){
        this.author = author;
        this.bookTitle = bookTitle;
        this.pages = pages;
    }

    displayBook(){
        let card = document.querySelector(".card");

        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <h3>${author.value} </h3>
            <h5> ${bookTitle.value} </h5>
        `
        newDiv.className = "cardBook";
       

        card.appendChild(newDiv)
    }

}

class AddBook extends Book{

}

submit.addEventListener("click",(event)=>{
    event.preventDefault();
    let newBook = new Book(author.value);
    newBook.displayBook()
})



