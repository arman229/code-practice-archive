function sayHello(){
     let nameInputTag=document.getElementById("name");
     var name=nameInputTag.value;

     
     if(name==undefined || name==''){
        nameInputTag.style.borderColor='red';
     }else{
        nameInputTag.style.borderColor='black';
        var hellowOutputP = document.getElementById('helloOutput');
     hellowOutputP.innerText= "Hello :"+ name;
     console.log("hello: "+ name);
     window.alert("hello: "+ name);
     }
     
}