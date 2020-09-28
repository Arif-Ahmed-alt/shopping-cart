const mbl_add=document.getElementById("mbl-add");
const mbl_min=document.getElementById("mbl-min");
const catch_add=document.getElementById("catch-add");
const catch_min=document.getElementById("catch-min");
const mbl_count=document.getElementById("mbl-count");
const catch_count=document.getElementById("catch-count");
const mbl_price=document.getElementById("mbl_price");
const catch_price=document.getElementById("catch_price");
const subTotal=document.getElementById("sub-total");
const final=document.getElementById("total")
let mblPrice=Number(mbl_price.textContent.slice(1));
let catchPrice=Number(catch_price.textContent.slice(1));
let i=0,j=0;
let totalMblPrice=0;
let totalCatchPrice=0;

mbl_add.addEventListener("click",function(){
    i++;
    mbl_count.textContent=i;
    totalMblPrice=mblPrice*i;
    subTotal.textContent="$"+(totalMblPrice+totalCatchPrice);
    final.textContent="$"+(totalMblPrice+totalCatchPrice)

});

mbl_min.addEventListener("click",function(){
    i--;
    if(i<=0){
        i=0
    }
    mbl_count.textContent=i;
    totalMblPrice=mblPrice*i
    subTotal.textContent="$"+(totalMblPrice+totalCatchPrice);
    final.textContent="$"+(totalMblPrice+totalCatchPrice)
    
});
catch_add.addEventListener("click",function(){
    j++;
    catch_count.textContent=j;
    totalCatchPrice=catchPrice*j;
    subTotal.textContent="S"+(totalCatchPrice+totalMblPrice);
    final.textContent="S"+(totalCatchPrice+totalMblPrice);
});
catch_min.addEventListener("click",function(){
    j--;
    if(j<=0){
        j=0
    }
    catch_count.textContent=j;
    totalCatchPrice=catchPrice*j;
    subTotal.textContent="$"+(totalCatchPrice+totalMblPrice);
    final.textContent="$"+(totalCatchPrice+totalMblPrice)

})