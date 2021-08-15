

let library = [];
let cardArray = [];

console.log("hello")

const addButton = document.querySelector("#add");

const editor = document.createElement("a");
editor.classList.add("button");
editor.classList.add("editor");
editor.textContent = "OK";




const Library = () => {


    let bookID = 0;
    const getName = () => playerName;
    const getTeam = () => team;


    const addCard = (card) => {

        cardArray.push(card);
        library.push(card.book);



        displayLibrary();



    }


    const removeBook = (card)=>{

        library.splice(library.indexOf(card.book), 1);
        displayLibrary();
    }







    return { getName, getTeam, addCard ,removeBook};

}

const newLibrary = Library();

const main = document.querySelector(".main");



class Card {



    constructor(title, author, pages) {
        this.book = new Book(title, author, pages);
        this.cardID = 0;
        this.cardTitle = document.createElement("h2");
        this.cardTitle.textContent = this.book.title;


        this.cardAuthor = document.createElement("p");
        this.cardAuthor.textContent = "Author:" + `${this.book.author}`;

        this.card = document.createElement("div");

        this.cardPages = document.createElement("p")
        this.cardPages.textContent = "Pages:" + `${this.book.pages}`;

        this.deleteButton = document.createElement("div");

        this.editButton = document.createElement("div");
        this.cardContent = document.createElement("div");
        this.button = document.createElement("a");
        this.editor = document.createElement("a");

        this.buildCard();




    }



    setData() {



        this.cardTitle = (document.createElement("h2").textContent = this.book.title);
        this.cardAuthor = (document.createElement("p").textContent = "Author:" + `${this.book.author}`);
        this.cardPages = document.createElement("p").textContent = "Pages:" + `${this.book.pages}`;

    }






    getBook() {
        return this.book;
    }


    edit() {



        document.querySelector(".modal").style.display = "flex";
        document.body.style.overflow = "hidden";


        document.querySelector('input[id="title"]').value = this.book.title;
        document.querySelector('input[id="pages"]').value = this.book.pages;

        document.querySelector('input[id="author"]').value = this.book.author;



        let tempcard = this;


        document.querySelector("#add").replaceWith(this.editor);


        this.editor.addEventListener("click", function () {



            tempcard.book.title = document.querySelector('input[id="title"]').value;
            tempcard.book.pages = document.querySelector('input[id="pages"]').value;
            tempcard.book.author = document.querySelector('input[id="author"]').value;


            tempcard.cardTitle.textContent = tempcard.book.title;
            tempcard.cardAuthor.textContent = "Author:" + `${tempcard.book.author}`;
            tempcard.cardPages.textContent = "Pages:" + `${tempcard.book.pages}`;


            document.querySelector(".modal").style.display = "none";
            document.body.style.overflow = "auto";
            tempcard.editor.replaceWith(addButton);


            tempcard = null;

        });




    }




    buildCard() {



        this.card.classList.add("card");


        this.deleteButton.classList.add("close");
        this.deleteButton.textContent = "+";
        this.deleteButton.style.color = "hsl(142, 90%, 61%)";
        this.deleteButton.style.fontSize = "60px";



        this.editButton.classList.add("edit");
        this.editButton.style.color = "hsl(142, 90%, 61%)";

        this.card.append(this.editButton);
        this.card.append(this.deleteButton);


        this.cardContent.className = "card-content";

        this.cardTitle.className = "card-title";
        this.cardContent.append(this.cardTitle);


        this.cardAuthor.className = "card-body";
        this.cardPages.className = "card-body";


        this.cardContent.append(this.cardAuthor);
        this.cardContent.append(this.cardPages);



        this.button.className = "button";
        this.button.classList.add("statusButton");
        this.button.textContent = "Unread";
        this.button.style.backgroundColor = "red";
        this.cardContent.append(this.button);




        this.editor.classList.add("button", "editor");
        this.editor.textContent = "OK";



        this.card.append(this.cardContent);

        main.appendChild(this.card);


        this.button.addEventListener("click", this.setStatus.bind(this));
        this.deleteButton.addEventListener('click', this.deleteCard.bind(this));


        newLibrary.addCard(this);

        this.editButton.addEventListener("click", this.edit.bind(this));

    }



    deleteCard() {

        newLibrary.removeBook(this);
        main.removeChild(this.card);

    }

    setStatus() {



        if (this.button.textContent === "Unread") {
            this.button.textContent = "Read";
            this.button.style.backgroundColor = "hsl(142, 90%, 61%)";

        } else if (this.button.textContent === "Read") {
            this.button.textContent = "Unread";
            this.button.style.backgroundColor = "red";

        }
    }











}





document.querySelector("#addBook").addEventListener("click", function () {


    document.querySelector(".modal").style.display = "flex";
    document.body.style.overflow = "hidden";

})



function replaceButton() {
    console.log("replace");

    editor.replaceWith(addButton);

}




class Book {


    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }



    getInfo() {
        return [this.title, this.author, this.pages];
    }


    setTitle() {
        this.title = document.querySelector('input[id="title"]').value;
    }

    setAuthor() {
        this.author = document.querySelector('input[id="author"]').value;
    }

    setPages() {
        this.pages = document.querySelector('input[id="pages"]').value;
    }

    remove() {
        library.splice(library.indexOf(this), 1);

    }



    edit() {

        this.title = document.querySelector('input[id="title"]').value;
        this.pages = document.querySelector('input[id="pages"]').value;
        this.author = document.querySelector('input[id="author"]').value;
    }

}


document.querySelector("#add").addEventListener("click", function () {

    console.log("add");
    newBook();
    document.querySelector(".modal").style.display = "none";
    document.body.style.overflow = "auto";

});

function newBook() {

    let title = document.querySelector('input[id="title"]').value;
    let pages = document.querySelector('input[id="pages"]').value;
    // let status = document.querySelector('input[name = "status"] ').value
    let author = document.querySelector('input[id="author"]').value;


    (new Card(title, author, pages));


}


displayLibrary();

function displayLibrary() {

    library.forEach(e => {

        console.log(e.getInfo().toString());

    });
}



document.querySelector(".close").addEventListener('click', function () {


    replaceButton();
    document.querySelector(".modal").style.display = "none";
    document.body.style.overflow = "auto";
});



