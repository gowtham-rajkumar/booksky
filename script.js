// Selecting 'popup-overlay'  and 'popup-box'
var popupoverlay=document.querySelector(".popup-overlay");
var popupbox=document.querySelector(".popup-box");

// Selecting 'add-book-button'
var add_book_button=document.getElementById("add-book-button");

add_book_button.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
});


// Selecting 'cancel-btn'
var cancel_btn=document.getElementById("cancel-btn");

cancel_btn.addEventListener("click",function(event){
    event.preventDefault(); //To prevent default 'refresh action in web-page'  (If we did not mention 'action atrribute value' in <form> tag, 
                                // then submit button will refresh the page)  (NOTE: if the button 'type attribute is not mentioned',
                                //  it will be default 'submit button')
    popupoverlay.style.display="none";
    popupbox.style.display="none";
});


// Selecting 'book-title', 'book-author' and 'book-description'
var book_title=document.getElementById("book-title");
var book_author=document.getElementById("book-author");
var book_description=document.getElementById("book-description");

// Selection 'add-btn' and 'container'
var add_btn=document.getElementById("add-btn");
var container=document.querySelector(".container");

add_btn.addEventListener("click",function(event){
    event.preventDefault(); //To prevent default web-page refresh action (Similar to 'cancel-btn')

   /* console.log(book_title.value);
    console.log(book_author.value);
    console.log(book_description.value);

    console.log(typeof book_title.value);
    console.log(typeof book_author.value);
    console.log(typeof book_description.value); */

    if( (book_title.value.trim().length===0)||(book_author.value.trim().length===0)||(book_description.value.trim().length===0) )
    {
        alert("Kindly Mention All the Data in the Given Respective Fields");
        return;
    }



    var book_container=document.createElement("div");
    book_container.setAttribute("class","book-container");
    book_container.innerHTML=`<h2>${book_title.value}</h2>
    <h5>${book_author.value}</h5>
    <p>${book_description.value}</p>
    <button onclick="deleteBook(event)">Delete</button>` ;

    container.append(book_container);

    popupoverlay.style.display="none";
    popupbox.style.display="none";
});

//Delete Function
function deleteBook(event)
{
    event.target.parentElement.remove();
}


