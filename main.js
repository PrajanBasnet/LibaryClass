let addBook = document.querySelector("#addItems");
let dialog = document.querySelector("dialog");
let closebtn = document.querySelector("dialog button");
let submit = document.querySelector("#submit");

//values
let author = document.querySelector("#author");
let bookTitle = document.querySelector("#bookTitle");
let pages = document.querySelector("#pages");

//dialog  open and closing 
addBook.addEventListener("click", () => {
    dialog.showModal();
})
closebtn.addEventListener("click", () => {
    dialog.close();
})

let libary = []
let idd = 0;
class Book {
    constructor(author, bookTitle, pages, read) {
        this.author = author;
        this.bookTitle = bookTitle;
        this.pages = pages;
        this.read = read;
    }
    displayBook() {
        let card = document.querySelector(".card");

        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <h3>${author.value} </h3>
            <h5> ${bookTitle.value} </h5>
            <h5> ${this.pages} </h5>
            <p> ${this.read} </p>  
             <p onclick='changeRead(${idd})' class='r${idd}'>${this.read}</p>
            <br>
            <button onclick='deleteBook(${idd})' > Delete </button>
            
        `
        newDiv.setAttribute("id",idd);
        idd += 1;
        console.log(idd)
        let test = document.querySelector(".test");
     
        newDiv.className = "cardBook";
      
        card.appendChild(newDiv)
    }
    addIn(data){
        libary.push(data);
    }
    removeBook(){
        console.log('cod')
    }
    
}

function deleteBook(id){
    console.log(id);
    let rmv = document.getElementById(`${id}`);
    return rmv.parentNode.removeChild(rmv)
}

function changeRead(id){
    let readChange = document.querySelector(`.r${id}`);
    console.log(readChange.checked)
    if(readChange.innerHTML === "Read"){
        readChange.innerHTML = "Not Read"
    }else{
        readChange.innerHTML = "Read"

    }

}


submit.addEventListener("click", (event) => {
    event.preventDefault();
    let mybook = new Book(author.value, bookTitle.value, pages.value, read.checked ? "Read" : "Not read");
    let data = [ author.value, bookTitle.value, pages.value, read.innerHTML ]

    mybook.displayBook()
    mybook.addIn(data);
    console.log(libary)
})



