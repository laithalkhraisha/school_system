// function sendData(){
//     var name =document.getElementById("name").value;
//     let Date =document.getElementById("Date").value;
//     let gender =document.getElementById("gender").value;
//     let phone =document.getElementById("phone").value;
//     let grade =document.getElementById("grade").value;
    
   
//     let div1 = document.createElement("tr");
//      let p1 = document.createElement("td");
//       let ul1 = document.createElement("td"); 
//       let li1 = document.createElement("td");
//        let li2 = document.createElement("td"); 
//        let li3 = document.createElement("td");
       
//       p1.textContent = ` ${name}`;
//       ul1.textContent = `${Date}`; 
//       li3.textContent = ` ${grade}`; 
//       li2.textContent = ` ${phone}`;
//         li1.textContent = ` ${gender}`;

//        div1.appendChild(p1);
//         div1.appendChild(ul1);
//         div1.appendChild(li1);
//         div1.appendChild(li2); 
//         div1.appendChild(li3); 
   
//         document.getElementById("tbody").appendChild(div1);


//         localStorage.setItem(`students`,JSON.stringify(students));
// }

// class Student {
 
//     constructor(fullName,date,gender,major,imageUrl,phoneNumber) {
//         this.fullName = fullName;
//         this.date = date;
//         this.gender = gender;
//         this.major = major;
//         this.imageUrl = imageUrl;
//         this.phoneNumber = phoneNumber;
        
        
//     }
   
    

//   }
 
    
    

 
// const all=[];
// function setdata() {
//     const fullName = document.getElementById("name").value;
//         const date = document.getElementById("Date").value;
//         const gender = document.getElementById("gender").value;
//         const major = document.querySelector('.major:checked').value;
//         const imageUrl = document.getElementById("imageUrl").value;
//         const phoneNumber = document.getElementById("phone").value;
//         const newstudent= new Student(fullName,date,gender,major,imageUrl,phoneNumber);
//         all.push(newstudent);

//         localStorage.setItem("newstudent",JSON.stringify(all) ) 

      
// }

// function cards() {
//   var card = JSON.parse(localStorage.getItem('newstudent'));
//       card.forEach(element => {
        
      
//         let div1 = document.createElement("img");
//              let p1 = document.createElement("p");
//               let ul1 = document.createElement("p"); 
//               let li1 = document.createElement("p");
//                let li2 = document.createElement("p"); 
//                let li3 = document.createElement("p");
               
              

//                        document.getElementById("card").appendChild(div1);
//               });
  
// }

// Student constructor
const mm=[];
function Student(fullName, dob, gender, major, imageUrl, phoneNumber) {
  this.fullName = fullName;
  this.dob = dob;
  this.gender = gender;
  this.major = major;
  this.imageUrl = imageUrl;
  this.phoneNumber = phoneNumber;
}

// Example students
const students=[];
function setdata() {
  const fullName = document.getElementById("name").value;
        const dob = document.getElementById("Date").value;
        const gender = document.getElementById("gender").value;
        const major = document.querySelector('.major:checked').value;
        const imageUrl = document.getElementById("imageUrl").value;
        const phoneNumber = document.getElementById("phone").value;
students.push(new Student(fullName, dob, gender, major, imageUrl, phoneNumber));
 





localStorage.setItem('students', JSON.stringify(students));
}
// const students = [
//   new Student("John Doe", "1995-05-15", "Male", "IT", "assets/student1.jpg", "123-456-7890"),
//   new Student("Jane Smith", "1998-02-20", "Female", "Science", "assets/student2.jpg", "987-654-3210"),
 
// ]
// localStorage.setItem('students', JSON.stringify(students));

function renderStudents() {
  const studentsContainer = document.getElementById('students-container');


  const storedStudents = JSON.parse(localStorage.getItem('students'));


  

  
  storedStudents.forEach((student) => {
    const card = document.createElement('div');
    

    card.innerHTML = `
    <div class="col-sm-4 text-center">
      <img src="image/icon-256x256.png" alt="${student.fullName}" class="student-image">
      <div class="student-info">
        <h2>${student.fullName}</h2>
        <p>Date of Birth: ${student.dob}</p>
        <p>Gender: ${student.gender}</p>
        <p>Major: ${student.major}</p>
        <p>Phone Number: ${student.phoneNumber}</p>
      </div>
      </div>
    `;

    studentsContainer.appendChild(card);
  });
}

// Call renderStudents to display the students on the home page
renderStudents();
