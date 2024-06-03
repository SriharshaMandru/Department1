document.getElementById('addDepartment').addEventListener('click',function(){
    document.getElementById('formDiv').style.display = 'block';
});

document.getElementById('formSubmit').addEventListener('submit',function(event){
    event.preventDefault();
    
    const sNo = document.getElementById('sNo').value;
    const department = document.getElementById('department').value;
    const table = document.getElementById('departmentTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const sNoCell = newRow.insertCell(0);
    const departmentCell = newRow.insertCell(1);
    const actionCell = newRow.insertCell(2)
    sNoCell.textContent = sNo;
    departmentCell.textContent = department;
    const icon = document.createElement('ion-icon');
    icon.setAttribute('name','ellipsis-vertical-outline');
    actionCell.appendChild(icon);

    document.getElementById('formSubmit').reset();
    document.getElementById('formDiv').style.display = 'none';
})
