

let library = [];

console.log("hello")



function createCard(book){


const body = document.body;

const card = document.createElement("div");
card.classList.add("card");
body.append(card);

const cardContent = document.createElement("div");
cardContent.className = "card-content";


const cardTitle = document.createElement("h2");
cardTitle.className = "card-title";
cardTitle.textContent = book.name;
cardContent.append(cardTitle);

const cardBody = document.createElement("p");
cardBody.className = "card-body";

cardBody.textContent = "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, provident. Totam voluptatem";
cardContent.append(cardBody);




const button = document.createElement("a");
button.className = "button";
button.textContent = "Learn More";
cardContent.append(button);

card.append(cardContent);
}







function Book(name, pages, status) {

    this.name = name;
    this.pages = pages;
    this.status = status;

    library.push(this);


}


function newBook() {

    let title = document.querySelector('input[name="title"]').value;
    let pages = document.querySelector('input[name="pages"]').value;
    let status = document.querySelector('input[name = "status"] ').value

    library.push(new Book(title, pages, status));


}



function setStatus() {

    return "Incomplete";

}

Book.prototype.getInfo = function () {

    return [this.name, this.pages, this.status];
}


let book1 = new Book("Harry Potter", 153);

let book2 = new Book("Harry Potter 2", 192);

let book3 = new Book("Harry Potter 2", 195);

displayLibrary();

function displayLibrary() {

    library.forEach(e => {

        console.log(e.getInfo().toString())

    });
}

createCard(book1);
createCard(book2);
createCard(book3);

document.querySelector(".close").addEventListener('click', function(){

    document.querySelector(".modal").style.display = "none";
});
