

let library = [];

console.log("hello")



function createCard(book){


const main= document.querySelector(".main");

const card = document.createElement("div");
card.classList.add("card");

const deleteButton = document.createElement("div");
deleteButton.classList.add("close");
deleteButton.textContent = "+";
deleteButton.style.color = "hsl(142, 90%, 61%)";
deleteButton.style.fontSize = "60px";

card.append(deleteButton);

const cardContent = document.createElement("div");
cardContent.className = "card-content";


const cardTitle = document.createElement("h2");
cardTitle.className = "card-title";
cardTitle.textContent = book.name;
cardContent.append(cardTitle);

const cardBody = document.createElement("p");
const numbers = document.createElement("p");
cardBody.className = "card-body";
numbers.className = "card-body";


cardBody.textContent =   "Author:" + `${book.author}`;
numbers.textContent = "Pages:" + `${book.pages}`  ;
cardContent.append(cardBody);
cardContent.append(numbers);




const button = document.createElement("a");
button.className = "button";
button.textContent = "Learn More";
cardContent.append(button);

card.append(cardContent);
main.append(card);

deleteButton.addEventListener("click", function(){
    book.remove();
    
    main.removeChild(card);
})
}



document.querySelector("#addBook").addEventListener("click", function(){


    document.querySelector(".modal").style.display = "flex";
    document.body.style.overflow = "hidden";
    
})





function Book(name,author, pages) {

    this.name = name;
    this.pages = pages;
    // this.status = status;
    this.author = author;

    


}

document.querySelector("#add").addEventListener("click", function(){

    console.log("add");
    
    newBook();
    document.querySelector(".modal").style.display = "none";

});

function newBook() {

    let title = document.querySelector('input[id="title"]').value;
    let pages = document.querySelector('input[id="pages"]').value;
    // let status = document.querySelector('input[name = "status"] ').value
    let author = document.querySelector('input[id="author"]').value;

    library.push(new Book(title, author, pages));
    
    createCard(library[library.length-1]);

}



function setStatus() {

    return "Incomplete";

}

Book.prototype.getInfo = function () {

    return [this.name, this.pages, this.author];
}


Book.prototype.remove = function(){
    library.splice(library.indexOf(this), 1);

}



displayLibrary();

function displayLibrary() {

    library.forEach(e => {

        console.log(e.getInfo().toString());

    });
}



document.querySelector(".close").addEventListener('click', function(){

    document.querySelector(".modal").style.display = "none";
    document.body.style.overflow = "visible";
});
