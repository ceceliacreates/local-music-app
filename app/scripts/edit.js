document.getElementById('submit').addEventListener('click', event => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const url = document.getElementById('url').value;
    const photo = document.getElementById('photo').value;
    
    const data = {
        'name': name,
        'url': url,
        'photo': photo
    };

    fetch("/api/edit", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log(response);
        const p = document.getElementById("response");
        p.innerText = response.status == 200? "Artist updated." : "Something went wrong";
    })
})