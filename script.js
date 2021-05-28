/* With the HTML DOM, JavaScript can access and change all the elements of an HTML document. */
var bTn = document.getElementsByClassName("plus")
for(var i=0; i<bTn.length; i++){
    bTn[i].addEventListener("click", increment)
}

function increment(event){
    var btnPlus = event.target
    var divElt = btnPlus.parentElement

    var QuantityTag = divElt.querySelector("p")
    var quantity = Number(QuantityTag.innerHTML)
    quantity++
    
    QuantityTag.innerHTML = quantity
    //console.log(quantity)

    var UnitpriceTag = divElt.parentElement.parentElement.querySelector(".unitPrice")
    var PriceTag = divElt.parentElement.parentElement.querySelector(".price")
    var Unitprice = Number(UnitpriceTag.innerHTML)
    var Price = Unitprice * quantity

    PriceTag.innerHTML = Price

}


// checkbox total sum 
var checkTags = document.querySelectorAll(".check")
for(var j=0; j<checkTags.length; j++){
    checkTags[j].addEventListener("click", totalPrice)
}

function totalPrice(event){


    var checkTag = event.target
    //Button check
    var btnPlus = checkTag.parentElement.parentElement.querySelector(".plus")
    var btnMinus = checkTag.parentElement.parentElement.querySelector(".minus")

    //Total&Price calcul
    var priceTag = checkTag.parentElement.parentElement.querySelector(".price")
    var price = Number(priceTag.innerHTML)
    var totalTag = document.getElementById("total")
    console.log(totalTag)
    var total = Number(totalTag.innerHTML)

    var condition = checkTag.checked === true
    if(condition){

        total = total + price
        btnPlus.setAttribute("disabled", true)
        btnMinus.setAttribute("disabled", true)
    }else{

        total = total - price
        btnPlus.removeAttribute("disabled")
        btnMinus.removeAttribute("disabled")
    }

    totalTag.innerHTML = total
}

//check THE DELETE CART ELEMENT
var delTags = document.getElementsByClassName("delete")
for(var k=0; k<delTags.length; k++){
    delTags[k].addEventListener("click", deleteCart)
}

function deleteCart(event){
    var text;
    var Btndel = event.target
    var cartElement = Btndel.parentElement.parentElement.parentElement.parentElement
    //var tr = cartElement.getElementsByTagName("tr")
    console.log(cartElement)
    var r = confirm("Delete This Cart !")
    if(r == true){
        cartElement.remove()
        text = "you delete OK!."
    }
    else{
        text = "you delete Cancel!."
    }
   
}

//check THE LIKE CART ELEMENT
var likeTags = document.getElementsByClassName("like")
for(var n=0; n<likeTags.length; n++){
    likeTags[n].addEventListener("click", doLike)
}
 
function doLike(event){

    var changeColor = event.target
    changeColor.style.color="red" 
    console.log(changeColor)
}

//check the Decrement Element of Quantity 
var minusTags = document.getElementsByClassName("minus")
for(var l=0; l<minusTags.length; l++){
    minusTags[l].addEventListener("click", decrement)
}

function decrement(event){
    var btnMinus = event.target

    var divElementMinus = btnMinus.parentElement
    var quantityTag = divElementMinus.querySelector("p")
    var quantityminus = Number(quantityTag.innerHTML)
    if(quantityminus > 0)
    {
    quantityminus--
    quantityTag.innerHTML = quantityminus
    var UnitPTag = divElementMinus.parentElement.parentElement.querySelector(".unitPrice")
    var PrcTag = divElementMinus.parentElement.parentElement.querySelector(".price")
    var UnitP = Number(UnitPTag.innerHTML)
    var Prc = Number(UnitP * quantityminus)
    }
    PrcTag.innerHTML = Prc

}