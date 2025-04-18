document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.toggle').forEach(function(title) {
      title.addEventListener('click', function() {
        const content = this.nextElementSibling;
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    });
  });
   