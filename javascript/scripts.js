// Confirm Logout Function
function confirmLogout() {
    const confirmAction = confirm("Are you sure you want to log out?");
    if (confirmAction) {
      window.location.href = "login.html"; // Redirect to login page after logout confirmation
    }
  }
  
  // Enable Profile Editing
  function enableEdit() {
    document.getElementById("admin-name").disabled = false;
    document.getElementById("admin-email").disabled = false;
    document.getElementById("admin-department").disabled = false;
    document.querySelector(".edit-buttons").style.display = "block"; // Show save/cancel buttons
  }
  
  // Save Profile Changes (Simulated)
  function saveProfile() {
    const name = document.getElementById("admin-name").value;
    const email = document.getElementById("admin-email").value;
    const department = document.getElementById("admin-department").value;
  
    alert(`Profile saved! Name: ${name}, Email: ${email}, Department: ${department}`);
    
    // Disable fields after saving
    document.getElementById("admin-name").disabled = true;
    document.getElementById("admin-email").disabled = true;
    document.getElementById("admin-department").disabled = true;
    document.querySelector(".edit-buttons").style.display = "none";
    
    // In future, make a POST request to update profile in the backend
  }
  
  // Handle Form Submission for Login
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission for now
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const department = document.getElementById("department").value;
  
    // Simple validation check
    if (username === "" || password === "" || department === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    // Simulate login process (backend can handle authentication later)
    alert(`Logging in as ${username} from ${department}`);
    
    // Redirect to dashboard
    window.location.href = "dashboard.html"; // Replace with real login process once backend is connected
  });
  
  // Scroll to Latest Message in Chat History
  function scrollToBottom() {
    const chatHistory = document.querySelector(".chat-history");
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }
  
  // Automatically scroll to the bottom of the chat history on page load
  window.onload = function() {
    if (document.querySelector(".chat-history")) {
      scrollToBottom();
    }
  };
  
  // Simulated Message Sending in Counseling Chats
  function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value.trim();
    
    if (message === "") {
      alert("Please enter a message.");
      return;
    }
  
    // Create a new chat message element (Admin's message)
    const chatHistory = document.querySelector(".chat-history");
    const newMessage = document.createElement("div");
    newMessage.classList.add("chat-message", "admin");
    newMessage.innerHTML = `<strong>Admin:</strong> ${message}`;
  
    // Append the new message to the chat history
    chatHistory.appendChild(newMessage);
  
    // Clear the input and scroll to the latest message
    messageInput.value = "";
    scrollToBottom();
  
    // In future, this can be sent to the backend and stored in a database
  }
// Function to filter the students based on selected mood
function filterStudents() {
  const filterValue = document.getElementById('mood-filter').value;
  const studentRows = document.querySelectorAll('.student-row');

  // Loop through each student row and toggle visibility based on the selected mood
  studentRows.forEach(row => {
    const studentMood = row.getAttribute('data-mood');

    // Show all students if 'All' is selected or show only those matching the filter
    if (filterValue === 'all' || filterValue === studentMood) {
      row.style.display = ''; // Show row
    } else {
      row.style.display = 'none'; // Hide row
    }
  });
}
const chatHistory = {
  student1: [
    { sender: 'student', message: 'Hello Admin, I need help with my course.' },
    { sender: 'admin', message: 'Sure, how can I assist you?' }
  ],
  student2: [
    { sender: 'student', message: 'Hi Admin, I have a question about the project.' },
    { sender: 'admin', message: 'Of course! What would you like to know?' }
  ]
};

function openChat(studentId) {
  const chatBox = document.getElementById('chat-box');
  const chatHeader = document.getElementById('chat-header');
  chatBox.innerHTML = ''; // Clear the current chat box

  // Get chat history for selected student
  const messages = chatHistory[studentId];
  const studentName = document.querySelector(`#${studentId} .name`).textContent;
  chatHeader.textContent = `Chat with ${studentName}`;

  // Load chat history into chat box
  messages.forEach(msg => {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', msg.sender);
    messageDiv.textContent = msg.message;
    chatBox.appendChild(messageDiv);
  });

  // Show chat container and hide inbox
  document.getElementById('chat-container').style.display = 'flex';
  document.querySelector('.inbox').style.display = 'none';
}

function closeChat() {
  document.getElementById('chat-container').style.display = 'none';
  document.querySelector('.inbox').style.display = 'block';
}

function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();
  const chatBox = document.getElementById('chat-box');

  if (message !== '') {
    const newMessage = document.createElement('div');
    newMessage.classList.add('message', 'admin');
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);

    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    messageInput.value = ''; // Clear input
  }
}

function confirmLogout() {
  return confirm('Are you sure you want to log out?');
}
// Sample student data with mood attempts
const students = [
  {
    name: 'student one',
    department: 'ITE',
    moodHistory: [
      { mood: 'Happy', percentage: '80%', date: '2024-09-10' },
      { mood: 'Happy', percentage: '85%', date: '2024-09-11' }
    ],
  },
  {
    name: 'student two',
    department: 'CICS',
    moodHistory: [
      { mood: 'Sad', percentage: '40%', date: '2024-09-10' },
      { mood: 'Sad', percentage: '45%', date: '2024-09-11' },
      { mood: 'Sad', percentage: '50%', date: '2024-09-12' },
      { mood: 'Sad', percentage: '55%', date: '2024-09-13' },
      { mood: 'Sad', percentage: '60%', date: '2024-09-14' }
    ],
  },
  {
    name: 'student three',
    department: 'CAHSS',
    moodHistory: [
      { mood: 'Angry', percentage: '15%', date: '2024-09-11' },
      { mood: 'Angry', percentage: '20%', date: '2024-09-12' },
      { mood: 'Angry', percentage: '25%', date: '2024-09-13' },
      { mood: 'Angry', percentage: '30%', date: '2024-09-14' },
      { mood: 'Angry', percentage: '35%', date: '2024-09-15' },
      { mood: 'Angry', percentage: '40%', date: '2024-09-16' },
      { mood: 'Angry', percentage: '45%', date: '2024-09-17' },
      { mood: 'Angry', percentage: '50%', date: '2024-09-18' },
      { mood: 'Angry', percentage: '55%', date: '2024-09-19' },
      { mood: 'Angry', percentage: '60%', date: '2024-09-20' }
    ],
  },
  {
    name: 'student four',
    department: 'CAHSS',
    
    moodHistory: [
      { mood: 'Disappointed', percentage: '30%', date: '2024-09-12' },
      { mood: 'Disappointed', percentage: '35%', date: '2024-09-13' },
      { mood: 'Disappointed', percentage: '40%', date: '2024-09-14' },
      { mood: 'Disappointed', percentage: '45%', date: '2024-09-15' },
      { mood: 'Disappointed', percentage: '50%', date: '2024-09-16' }
    ],
  },
];

// Function to determine status based on mood attempts
function determineStatus(attempts) {
  if (attempts >= 10) {
    return 'Not safe';
  } else if (attempts >= 5) {
    return 'Under Observation';
  } else {
    return 'Safe';
  }
}

// Function to open the modal with student data
function showStudentInfo(studentName) {
  const student = students.find(s => s.name === studentName);
  if (student) {
    document.getElementById('modal-student-name').textContent = student.name;
    document.getElementById('modal-student-department').textContent = student.department;

    // Count mood attempts
    const moodCount = {
      'Happy': 0,
      'Sad': 0,
      'Angry': 0,
      'Disappointed': 0
    };
    student.moodHistory.forEach(mood => {
      if (moodCount.hasOwnProperty(mood.mood)) {
        moodCount[mood.mood]++;
      }
    });

    // Populate mood attempts in the modal
    const moodAttemptsList = document.getElementById('modal-mood-attempts');
    moodAttemptsList.innerHTML = '';
    let totalAttempts = 0;
    student.moodHistory.forEach(mood => {
      const listItem = document.createElement('li');
      listItem.textContent = `${mood.mood}: ${mood.percentage} on ${mood.date}`;
      moodAttemptsList.appendChild(listItem);
      totalAttempts++;
    });

    // Determine and display status
    const status = determineStatus(totalAttempts);
    document.getElementById('modal-student-status').textContent = status;

    // Update table status
    document.getElementById(`status-${studentName}`).textContent = status;
    document.getElementById(`status-${studentName}`).className = `status ${status.replace(' ', '-').toLowerCase()}`;

    // Show the modal
    document.getElementById('studentModal').style.display = 'flex';
  }
}

// Function to close the modal
function closeModal() {
  document.getElementById('studentModal').style.display = 'none';
}

// Function to filter students by mood
function filterStudents() {
  const moodFilter = document.getElementById('mood-filter').value;
  const rows = document.querySelectorAll('.student-row');
  
  rows.forEach(row => {
    const studentMood = row.getAttribute('data-mood');
    if (moodFilter === 'all' || studentMood === moodFilter) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

// Function to confirm logout
function confirmLogout() {
  return confirm('Are you sure you want to log out?');
}
    // Enable profile editing
    function enableEdit() {
      document.getElementById("admin-name").disabled = false;
      document.getElementById("admin-email").disabled = false;
      document.getElementById("admin-department").disabled = false;
      document.querySelector(".edit-buttons").style.display = "block";
    }

    // Simulate saving profile changes (backend functionality can be added later)
    function saveProfile() {
      alert("Profile changes saved successfully!");
      // Logic to send updated profile data to backend can be added here.
    }
    
      // Sample chat data
  const chatHistory = {
    student1: [
      { sender: 'student', message: 'Hello Admin, I need help with my course.' },
      { sender: 'admin', message: 'Sure, how can I assist you?' },
    ],
    student2: [
      { sender: 'student', message: 'Hi Admin, I have a question about the project.' },
      { sender: 'admin', message: 'Of course! What would you like to know?' },
    ]
  };

  // Function to open the chat box
  function openChat(studentId) {
    const chatBox = document.getElementById('chat-box');
    const chatHeader = document.getElementById('chat-header');
    chatBox.innerHTML = ''; // Clear the current chat box

    // Get the chat history for the selected student
    const messages = chatHistory[studentId];
    const studentName = document.querySelector(`#${studentId} .name`).textContent;
    chatHeader.textContent = `Chat with ${studentName}`;

    // Load chat history into the chat box
    messages.forEach(msg => {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message', msg.sender);
      messageDiv.textContent = msg.message;
      chatBox.appendChild(messageDiv);
    });

    // Show the chat container
    document.getElementById('chat-container').style.display = 'flex';
  }

  // Function to close the chat box
  function closeChat() {
    document.getElementById('chat-container').style.display = 'none';
  }

  // Function to send a message
  function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    const chatBox = document.getElementById('chat-box');

    if (message !== '') {
      const newMessage = document.createElement('div');
      newMessage.classList.add('message', 'admin');
      newMessage.textContent = message;
      chatBox.appendChild(newMessage);

      chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
      messageInput.value = ''; // Clear the input field
    }
  }

// Burger Menu Toggle Script
document.getElementById("burger-toggle").addEventListener("change", function() {
  var sidebar = document.getElementById("sidebar");
  if (this.checked) {
    sidebar.style.left = "0"; // Open sidebar
  } else {
    sidebar.style.left = "-250px"; // Close sidebar
  }
});

// Example function to show student information (for the modal popup)
function showStudentInfo(studentName) {
  // You can replace this with dynamic data fetching for the modal.
  document.getElementById("modal-student-name").textContent = studentName;
  document.getElementById("studentModal").style.display = "block";
}

// Close modal function
function closeModal() {
  document.getElementById("studentModal").style.display = "none";
}
