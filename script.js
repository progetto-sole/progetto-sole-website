// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get references to elements
  const infoButton = document.getElementById('info-button');
  const infoOverlay = document.getElementById('info-overlay');
  const closeOverlay = document.querySelector('.close-overlay');
  
  // Show overlay when info is clicked
  infoButton.addEventListener('click', function() {
    // First make it visible
    infoOverlay.style.display = 'block';
    
    // Force browser to recognize the element is now visible before adding the active class
    setTimeout(function() {
      infoOverlay.classList.add('active');
    }, 10);
    
    // Prevent scrolling on the body when overlay is open
    document.body.style.overflow = 'hidden';
  });
  
  // Hide overlay when close is clicked
  closeOverlay.addEventListener('click', function() {
    // First remove the active class to trigger the animation
    infoOverlay.classList.remove('active');
    
    // Wait for the animation to complete before hiding the overlay
    setTimeout(function() {
      infoOverlay.style.display = 'none';
    }, 500); // Same duration as the CSS transition
    
    // Restore scrolling on the body
    document.body.style.overflow = 'auto';
  });
  
  // Also close overlay when clicking outside the content (optional)
  infoOverlay.addEventListener('click', function(event) {
    if (event.target === infoOverlay) {
      infoOverlay.classList.remove('active');
      
      setTimeout(function() {
        infoOverlay.style.display = 'none';
      }, 500);
      
      document.body.style.overflow = 'auto';
    }
  });
});