// Function to handle the luggage tracking form submission
function handleTrackingFormSubmit(event) {
    event.preventDefault();  // Prevents page reload on form submission
  
    // Get the tracking ID entered by the user
    const trackingId = document.getElementById('trackingId').value;
    const trackingStatus = document.getElementById('trackingStatus');
  
    // Simulate an API call to track the luggage (for demo purposes)
    if (trackingId) {
      // Fake tracking response
      setTimeout(() => {
        trackingStatus.innerHTML = `Tracking information for ID: ${trackingId} <br> Luggage is on its way to the airport!`;
      }, 1000); // Simulate a delay
    } else {
      trackingStatus.innerHTML = "Please enter a valid Tracking ID.";
    }
  }
  
  // Function to scroll to the luggage tracking section
  function scrollToTrack() {
    const trackSection = document.getElementById('track');
    trackSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Chatbot functionality to send and display messages
  function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatArea = document.getElementById('chatArea');
  
    // Get user message and reset input field
    const userMessage = chatInput.value.trim();
    if (userMessage) {
      // Add user message to chat area
      const userMessageDiv = document.createElement('div');
      userMessageDiv.classList.add('userMessage');
      userMessageDiv.textContent = userMessage;
      chatArea.appendChild(userMessageDiv);
  
      // Clear the chat input field
      chatInput.value = '';
  
      // Simulate a chatbot response (for demo purposes)
      setTimeout(() => {
        const botResponseDiv = document.createElement('div');
        botResponseDiv.classList.add('chatBotMessage');
        botResponseDiv.textContent = "Thank you for reaching out. How can I assist you with your luggage today?";
        chatArea.appendChild(botResponseDiv);
  
        // Scroll to the bottom of the chat
        chatArea.scrollTop = chatArea.scrollHeight;
      }, 1000); // Simulate a bot response delay
    }
  }
  
  // Event listener for the luggage tracking form submission
  const trackingForm = document.getElementById('trackingForm');
  trackingForm.addEventListener('submit', handleTrackingFormSubmit);
  
  // Optional: Focus on the input field when the page loads
  window.onload = function() {
    const trackingInput = document.getElementById('trackingId');
    trackingInput.focus();
  };
  