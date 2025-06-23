document.getElementById('voteForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();

  if (!name || !age) {
    alert("Please enter valid details"); // ✅ fixed here
    return;
  }

  const userAge = parseInt(age, 10);

  new Promise((resolve, reject) => {
    setTimeout(() => {
      userAge > 18 ? resolve() : reject();
    }, 4000);
  })
    .then(() => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
