const form = document.querySelector('.form');
const addButton = document.querySelector('.button');
const errorMsg = document.querySelector('.errorMsg');
const addedEmpContainer = document.querySelector('.employees');
const employeesList = document.querySelector('#employees-list');

var employeesArray = [];
var empCount=0;

function addEmployee(e){
 
    e.preventDefault();

    var name = document.getElementById('name').value;
    var prof = document.getElementById('profession').value;
    var age = document.getElementById('age').value;
    

    if(name=='' || prof=='' || age==''){
        errorMsg.style.color = '#FF4343';
        errorMsg.innerText = 'Error : Please Make sure All the fields are filled before adding in an employee !'
        return;
    }

    var removeText = document.querySelector('.addedEmpContainer > div');

    removeText.style.display='none';


    empCount++;

    employeesArray.push({
        id : empCount,
        name : name,
        profession : prof,
        age : age
    })

    errorMsg.style.color = '#43FF78';
    errorMsg.innerText = 'Success : Employee Added!'

    viewListEmployees();

    form.reset(); 

}

addButton.addEventListener('click',addEmployee);

function viewListEmployees(){

    const list = document.querySelector('#employees-list');
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }



    if(employeesArray.length==0){
        var removeText = document.querySelector('.addedEmpContainer > div');
        removeText.style.display='block';
        return;
    }



    employeesArray.forEach((emp)=>{

        var employee = document.createElement('li');
        employee.style.listStyle = 'none';

        employee.innerHTML = `<div class="emp"><div class="emp-data"><div>${emp.id}.</div> <div>Name: ${emp.name}</div><div>Profession: ${emp.profession}</div><div>Age: ${emp.age}</div> </div><button onclick='del(${emp.id})' class="delete">Delete User</button></div>`;
              
        list.appendChild(employee);


    })


}

function del(id){
    let pos;
    employeesArray.forEach((ele,index)=>{
        if(ele.id==id){
            pos=index;
        }
    })

    employeesArray.splice(pos,1);

    errorMsg.style.color = '#FF4343';
    errorMsg.innerText = 'Employee Deleted!'

    viewListEmployees();
}