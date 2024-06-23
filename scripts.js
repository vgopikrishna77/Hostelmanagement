document.addEventListener('DOMContentLoaded', function() {
    // Student Management
    const studentForm = document.getElementById('student-form');
    const studentTable = document.getElementById('student-table').getElementsByTagName('tbody')[0];
    
    const studentFee=document.getElementById('Student-Fee');
    const studentTable1 = document.getElementById('student-table1').getElementsByTagName('tbody')[0];

 
    studentForm.addEventListener('submit', function(event) {
      event.preventDefault('');
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const gender = document.getElementById('gender').value;
      const contact = document.getElementById('contact').value;
      const course = document.getElementById('course').value;
     
  
      const row = studentTable.insertRow();
      row.insertCell(0).textContent = name;
      row.insertCell(1).textContent = age;
      row.insertCell(2).textContent = gender;
      row.insertCell(3).textContent = contact;
      row.insertCell(4).textContent = course;
  
      const actions = row.insertCell(5);
      // const editButton = document.createElement('button');
      // editButton.textContent = 'Edit';
      // editButton.onclick = () => editStudent(row, name, age, gender, contact, course);
      // actions.appendChild(editButton);
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = () => studentTable.deleteRow(row.rowIndex - 1);
      actions.appendChild(deleteButton);
  
      studentForm.reset();
    });
  

    // function editStudent(row, name, age, gender, contact, course) {
    //   document.getElementById('name').value = name;
    //   document.getElementById('age').value = age;
    //   document.getElementById('gender').value = gender;
    //   document.getElementById('contact').value = contact;
    //   document.getElementById('course').value = course;
  
    //   studentTable.deleteRow(row.rowIndex - 1);
    // }
    
  
    
  
    // Room Assignment
    const rooms = [
      { number: 101, capacity: 4, occupants: [] },
      { number: 102, capacity: 3, occupants: [] },
      // Add more rooms as needed
    ];
  
    const roomList = document.getElementById('room-list');
    function displayRooms() {
      roomList.innerHTML = '';
      rooms.forEach(room => {
        const roomDiv = document.createElement('div');
        roomDiv.classList.add('room');
        roomDiv.innerHTML = `<h3>Room ${room.number}:</h3><p>Capacity: ${room.capacity}</p><p>Occupants: ${room.occupants.join(', ')}</p>`;
        roomList.appendChild(roomDiv);
      });
    }
    displayRooms();
  
    // Maintenance Requests
    const maintenanceForm = document.getElementById('maintenance-form');
    const maintenanceDashboard = document.getElementById('maintenance-dashboard');
  
    maintenanceForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const description = document.getElementById('issue-description').value;
      const roomNumber = document.getElementById('room-number').value;
  
      const requestDiv = document.createElement('div');
      requestDiv.classList.add('request');
      requestDiv.innerHTML = `<p>Room ${roomNumber}: ${description}</p><button onclick="updateStatus(this)">Update Status</button>`;
      maintenanceDashboard.appendChild(requestDiv);
  
      maintenanceForm.reset();
    });
  
    window.updateStatus = function(button) {
      const requestDiv = button.parentElement;
      requestDiv.innerHTML += '<p>Status: Completed</p>';
      button.remove();
    };
    studentFee.addEventListener('submit',function(event){
      event.preventDefault('');
      const name1=document.getElementById('name1').value;
      const contact1=document.getElementById('contact1').value;
      const amount1=document.getElementById('amount').value;
      const row = studentTable1.insertRow();
        row.insertCell(0).textContent = name1;
        
        row.insertCell(1).textContent = amount1;
        row.insertCell(2).textContent = contact1;
        const actions = row.insertCell(3);
        const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = () => studentTable1.deleteRow(row.rowIndex - 1);
      actions.appendChild(deleteButton);
  
      studentFee.reset();
         
    
    })
    // Fee Management
    //const fees = [
     // { name: 'John Doe', amount: 500, dueDate: '2024-07-01', status: 'Paid' },
     // { name: 'Jane Smith', amount: 450, dueDate: '2024-07-05', status: 'Unpaid' },
      // Add more fees as needed
    //];
  
    const feeSummary = document.getElementById('fee-summary');
    function displayFees() {
      feeSummary.innerHTML = '';
      fees.forEach(fee => {
        const feeDiv = document.createElement('div');
        feeDiv.classList.add('fee');
        feeDiv.innerHTML = `<p>${fee.name}: $${fee.amount} due on ${fee.dueDate} - ${fee.status}</p>`;
        feeSummary.appendChild(feeDiv);
      });
    }
    
    displayFees();
  });
  