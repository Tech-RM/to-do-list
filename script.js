var itemAddButton=document.getElementById("addItemButton");
var itemInputField=document.getElementById("inputItem");
var itemList=document.querySelector("ol");



function newItemAddingProcess(){
        var li=document.createElement("li"); //create a li element in DOM
        var newItemValue=document.createTextNode(itemInputField.value); //adds input field value to the text node
        li.appendChild(newItemValue); // it adds the value of input field to the "li" element.
        itemList.appendChild(li); // it adds the new "li" element to "ul" list.
        inputItem.value=""; //it resets the input field to blance;

}

//I need to create a list item with a delete button//
var i=0;
function newItemAddWithADeleteButton(){
    var li=document.createElement("li");
    var delButton=document.createElement("button");
    var newItem=document.createTextNode(itemInputField.value);
    li.appendChild(newItem);
    li.appendChild(delButton); 
    delButton.innerHTML="Delete";
    delButton.classList.add("deleteButton");// adding css class for applying some css.
    delButton.setAttribute("onClick", "deletingItem()");
    itemList.append(li);
    inputItem.value="";
    li.setAttribute("i",i);
    i++;

}


//if i click on the item name, it will be marked done//

function markingItemDone(event){
    //it is done by simply changing the css property of the following tag.
    //It is very simple when there is only one element under list.
    //
    var i=event.target.getAttribute("i");
    var li=document.querySelectorAll("li")[i];
    li.classList.toggle("done");
}



//if i click the delete button , the item will be removed//
function deletingItem(){
    event.target.parentNode.remove();
    console.log("clicked");
}







function addItemOnClick(){
        // add items to ul and reset input field
        if(inputItem.value.length>0){ //it checks and ensure the input field is not blank.
          newItemAddWithADeleteButton();  
        }
}

function addItemOnKyepress(e){
    // add items to ul and reset input field
    if(inputItem.value.length>0 && (event.keyCode===13||KeyboardEvent.keyCode===13||event.which===13)){ //it checks and ensure the input field is not blank.
        newItemAddWithADeleteButton();
    }
}

itemAddButton.addEventListener("click", addItemOnClick);

itemInputField.addEventListener("keypress", addItemOnKyepress);

itemList.addEventListener("click", markingItemDone);