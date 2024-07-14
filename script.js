var add = document.querySelector('button')
var freinds = document.querySelector('h5')
var flag = 0;
add.addEventListener("click",function(){
    if(flag == 0){
        freinds.innerHTML = "Friends"
        freinds.style.color = "green"
        add.innerHTML = "Cancel Request"
        flag = 1;
    }
    else{
        freinds.innerHTML = "Stranger"
        freinds.style.color = "red"
        add.innerHTML = "Send Request"

        flag = 0;
    }
})
