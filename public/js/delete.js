const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('delete-btn')) {
        const id = event.target.getAttribute('delete-btn');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete post');
        }
    }
};

document
    .querySelector("#delete-btn")
    .addEventListener("click", delButtonHandler);