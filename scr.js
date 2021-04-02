let todoList=document.querySelector('ul');
let btn=document.getElementsByTagName('button')[0];
function addItem(val,parent){
    let listItem=document.createElement('LI');
    listItem.innerHTML='<span>' +val +'</span>'+ '<button class="set"> x </button>';
    parent.appendChild(listItem);
    let close=listItem.lastElementChild;
    close.addEventListener('click',function(){
    this.parentElement.remove();
}); 
}

btn.addEventListener('click',(e) => {
    e.preventDefault();
    let formInput=document.getElementsByTagName('input')[0].value;
    if(formInput){
        addItem(formInput,todoList);
    }
});
( async function(){
    let res=await fetch("http://localhost:5000/todoData");
    let data= await res.json();
    // console.log(data);
    let fetchData=data.slice(0,10);
    for(var item of fetchData){
        addItem(item.title,todoList);
    }
})()



