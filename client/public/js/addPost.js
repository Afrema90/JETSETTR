const addPost = async (e) => {
    e.preventDefault();

    const title = document.getElementById('postTitle').value.trim();
    const content = document.getElementById('postContent').value.trim();

    if(title && content){
    const res = await fetch('/api/posts/', {
        method: 'POST',
        body: JSON.stringify({
            post_title: title, post_content: content
        }),
        headers: {'Content-Type': 'application/json'}
    });
    if(res.ok) {
alert('Thanks for sharing! Your post has been submitted!');

// document.location.reload();
    } else {
        console.log(err.message);
        alert(res.statusText);
    }

}
}

document.getElementById('addPost').addEventListener("click", addPost);