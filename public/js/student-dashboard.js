// student-dashboard.js

// Function to load student data
function loadStudentData() {
    // Fetch student data from the server
    fetch('/api/students')
        .then(response => response.json())
        .then(data => {
            displayStudentData(data);
        })
        .catch(error => console.error('Error loading student data:', error));
}

// Function to display student data
function displayStudentData(data) {
    const studentContainer = document.getElementById('studentContainer');
    studentContainer.innerHTML = '';
    data.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.className = 'student';
        studentDiv.innerHTML = `<h3>${student.name}</h3><p>Grade: ${student.grade}</p><p>Performance: ${student.performance}</p>`;
        studentContainer.appendChild(studentDiv);
    });
}

// Call the function to load student data
loadStudentData();
