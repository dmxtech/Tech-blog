const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const description = document.querySelector('#post-desc').value.trim();

    if (title && description) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
            alert('Created new post');
        } else {
            alert('Failed to create post');
        }
    }
};

// const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('delete-btn')) {
//         const id = event.target.getAttribute('delete-btn');

//         const response = await fetch(`/api/posts/${id}`, {
//             method: 'DELETE',
//         });

//         if (response.ok) {
//             document.location.replace('/profile');
//         } else {
//             alert('Failed to delete post');
//         }
//     }
// };

document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);

// document
//     .querySelector('.delete-btn')
//     .addEventListener('click', delButtonHandler);
