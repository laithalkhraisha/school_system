function sendData(){

    var name =document.getElementById("name").value;
    let Date =document.getElementById("Date").value;
    let gender =document.getElementById("gender").value;
    let phone =document.getElementById("phone").value;
    let grade =document.getElementById("grade").value;
    
   
    let div1 = document.createElement("tr");
     let p1 = document.createElement("td");
      let ul1 = document.createElement("td"); 
      let li1 = document.createElement("td");
       let li2 = document.createElement("td"); 
       let li3 = document.createElement("td");
       
      p1.textContent = ` ${name}`;
      ul1.textContent = `${Date}`; 
      li3.textContent = ` ${grade}`; 
      li2.textContent = ` ${phone}`;
        li1.textContent = ` ${gender}`;

       div1.appendChild(p1);
        div1.appendChild(ul1);
        div1.appendChild(li1);
        div1.appendChild(li2); 
        div1.appendChild(li3); 
   
        document.getElementById("tbody").appendChild(div1);
}