// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to elements
    const infoButton = document.getElementById('info-button');
    const infoOverlay = document.getElementById('info-overlay');
    const closeOverlay = document.querySelector('.close-overlay');
    
    // Show overlay when info is clicked
    infoButton.addEventListener('click', function() {
      infoOverlay.style.display = 'block';
      // Prevent scrolling on the body when overlay is open
      document.body.style.overflow = 'hidden';
    });
    
    // Hide overlay when close is clicked
    closeOverlay.addEventListener('click', function() {
      infoOverlay.style.display = 'none';
      // Restore scrolling on the body
      document.body.style.overflow = 'auto';
    });
    
    // Also close overlay when clicking outside the content (optional)
    infoOverlay.addEventListener('click', function(event) {
      if (event.target === infoOverlay) {
        infoOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  });