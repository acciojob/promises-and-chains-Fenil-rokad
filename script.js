document.getElementById('voteForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent actual form submission

  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();

  // Validation
  if (!name || !age) {
    alert("Please enter valid details.");
    return;
  }

  const userAge = parseInt(age, 10);

  // Promise logic
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userAge > 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000);
  })
    .then(() => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
