let x = v;


let library = [];

console.log("hello")

const addButton = document.querySelector("#add");
const editor = document.createElement("a");
editor.classList.add("button");
editor.classList.add("editor");
editor.textContent = "OK";




function createCard(book) {




    const main = document.querySelector(".main");

    const card = document.createElement("div");
    card.classList.add("card");

    const deleteButton = document.createElement("div");
    deleteButton.classList.add("close");
    deleteButton.textContent = "+";
    deleteButton.style.color = "hsl(142, 90%, 61%)";
    deleteButton.style.fontSize = "60px";


    const editButton = document.createElement("div");
    editButton.classList.add("edit");

    editButton.style.color = "hsl(142, 90%, 61%)";

    card.append(editButton);


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


    cardBody.textContent = "Author:" + `${book.author}`;
    numbers.textContent = "Pages:" + `${book.pages}`;
    cardContent.append(cardBody);
    cardContent.append(numbers);

    


    const button = document.createElement("a");
    button.className = "button";
    button.classList.add("statusButton");
    button.textContent = "Unread";
    button.style.backgroundColor = "red";
    cardContent.append(button);

    button.addEventListener("click", function(){
            if(button.textContent === "Unread"){
                button.textContent = "Read";
                button.style.backgroundColor = "hsl(142, 90%, 61%)";
                
            }else if(button.textContent === "Read"){
                button.textContent = "Unread";
                button.style.backgroundColor = "red";
               
            }
    })

    card.append(cardContent);
    main.append(card);

    deleteButton.addEventListener("click", function () {
        book.remove();

        main.removeChild(card);
    })



    editButton.addEventListener("click", function () {

        document.querySelector(".modal").style.display = "flex";
        document.body.style.overflow = "hidden";

        document.querySelector('input[id="title"]').value = book.name;
        document.querySelector('input[id="pages"]').value = book.pages;
        // let status = document.querySelector('input[name = "status"] ').value
        document.querySelector('input[id="author"]').value = book.author;

      


        

        
        document.querySelector("#add").replaceWith(editor);
      
       
        editor.addEventListener("click", function () {
            

            library[library.indexOf(book)].name =document.querySelector('input[id="title"]').value;
            book.pages =  document.querySelector('input[id="pages"]').value;
            book.author =  document.querySelector('input[id="author"]').value; 


            cardTitle.textContent = book.name;
            cardBody.textContent = "Author:" + `${book.author}`;
            numbers.textContent = "Pages:" + `${book.pages}`;

            
            document.querySelector(".modal").style.display = "none";
            document.body.style.overflow = "visible";
            editor.replaceWith(addButton);

            
            
        })




    })
}






document.querySelector("#addBook").addEventListener("click", function () {


    document.querySelector(".modal").style.display = "flex";
    document.body.style.overflow = "hidden";

})



function replaceButton(){
    console.log("replace");

     editor.replaceWith(addButton);

}


function Book(name, author, pages) {

    this.name = name;
    this.pages = pages;
    // this.status = status;
    this.author = author;




}



document.querySelector("#add").addEventListener("click", function () {

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

    createCard(library[library.length - 1]);

}



function setStatus() {

    return "Incomplete";

}

Book.prototype.edit = function () {


}

Book.prototype.getInfo = function () {

    return [this.name, this.pages, this.author];
}


Book.prototype.remove = function () {
    library.splice(library.indexOf(this), 1);

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
    document.body.style.overflow = "visible";
});



