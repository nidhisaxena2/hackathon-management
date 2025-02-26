document.getElementById('submissionForm')?.addEventListener('submit', async function (e) {
    e.preventDefault();

    const projectData = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        github: document.getElementById('github').value
    };

    const response = await fetch('http://localhost:5000/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectData)
    });

    if (response.ok) {
        alert('Project submitted successfully!');
        window.location.href = 'dashboard.html';
    } else {
        alert('Error submitting project.');
    }
});
