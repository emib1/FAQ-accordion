document.addEventListener('DOMContentLoaded', function () {
    // Get all question elements
    var questions = document.querySelectorAll('.question');

    questions.forEach(function (question) {
      // Find elements within each question
      var title = question.querySelector('.title');
      var plusIcon = title.querySelector('.plus');
      var minusIcon = title.querySelector('.minus');
      var answer = question.querySelector('.answer');

      // Initial state: hide the answer and minus icon
      answer.style.display = 'none';
      minusIcon.style.display = 'none';

      // Add click event listener to toggle visibility
      title.addEventListener('click', function () {
        if (answer.style.display === 'none') {
          // Show answer and minus icon, hide plus icon
          answer.style.display = 'block';
          minusIcon.style.display = 'inline';
          plusIcon.style.display = 'none';
        } else {
          // Hide answer and minus icon, show plus icon
          answer.style.display = 'none';
          minusIcon.style.display = 'none';
          plusIcon.style.display = 'inline';
        }
      });
    });
  });