const rowItem = document.getElementsByClassName("services-table__row");
const modal = document.getElementsByClassName("content-modal");
const cancel = document.getElementsByClassName("cancel");

cancel[0].addEventListener("click", () => {
    if(modal[0].style.display == "none"){
        modal[0].style.display = "flex";
        modal[0].style.zIndex = 10000;
    }
    else{
        modal[0].style.display = "none";
    }
})
for(let item of rowItem){
    item.addEventListener("click", ()=>{
        if(modal[0].style.display == "none"){
            modal[0].style.display = "flex";
            modal[0].style.zIndex = 10000;
        }
        else{
            modal[0].style.display = "none";
        }
    })
}

