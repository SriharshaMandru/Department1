document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addDepartment').addEventListener('click', function () {
        document.getElementById('formDiv').style.display = 'block';
    });

    document.getElementById('formSubmit').addEventListener('submit', function (event) {
        event.preventDefault();

        const sNo = document.getElementById('sNo').value;
        const department = document.getElementById('department').value;
        const table = document.getElementById('departmentTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        const sNoCell = newRow.insertCell(0);
        const departmentCell = newRow.insertCell(1);
        const actionCell = newRow.insertCell(2);

        sNoCell.textContent = sNo;
        departmentCell.textContent = department;

        const updateBtn = document.createElement('button');
        updateBtn.textContent = 'Update';
        updateBtn.classList.add('update-btn');
        updateBtn.style.backgroundColor = 'green';
        updateBtn.style.margin = '2px';
        updateBtn.style.color = 'white';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.style.backgroundColor = 'red';
        deleteBtn.style.color = 'white';
        deleteBtn.style.margin = '2px';

        const icon = document.createElement('ion-icon');
        icon.setAttribute('name', 'ellipsis-vertical-outline');
        actionCell.appendChild(icon);
        actionCell.appendChild(updateBtn);
        actionCell.appendChild(deleteBtn);

        updateBtn.addEventListener('click', function () {
            if (!sNoCell.querySelector('input') && !departmentCell.querySelector('input')) {
                const sNoInput = document.createElement('input');
                sNoInput.type = 'text';
                sNoInput.value = sNo;
                sNoCell.textContent = '';
                sNoCell.appendChild(sNoInput);

                const departmentInput = document.createElement('input');
                departmentInput.type = 'text';
                departmentInput.value = department;
                departmentCell.textContent = '';
                departmentCell.appendChild(departmentInput);

                const saveBtn = document.createElement('button');
                saveBtn.textContent = 'Save';
                saveBtn.classList.add('save-btn');
                saveBtn.style.backgroundColor = 'blue';
                saveBtn.style.color = 'white';
                saveBtn.style.margin = '2px';

                saveBtn.addEventListener('click', function () {
                    sNoCell.textContent = sNoInput.value;
                    departmentCell.textContent = departmentInput.value;
                    actionCell.removeChild(saveBtn);
                });

                actionCell.appendChild(saveBtn);
            }
        });

        document.getElementById('formSubmit').reset();
        document.getElementById('formDiv').style.display = 'none';
    });

    document.getElementById('departmentTable').addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
            const row = event.target.closest('tr');
            row.parentNode.removeChild(row);
        }
    });
});
