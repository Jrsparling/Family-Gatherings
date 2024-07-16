const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#event-name').value.trim();
  const event_type = document.querySelector('#event-type').value.trim();
  const description = document.querySelector('#event-desc').value.trim();
console.log(title,event_type,description)
  if (title && event_type && description) {
    const response = await fetch(`/api/events`, {
      method: 'POST',
      body: JSON.stringify({ title, event_type, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('TODO create /api/events');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

//document
  //.querySelector('.project-list')
 // .addEventListener('click', delButtonHandler);
