import Artist from "./components/Artist.js";

fetch('/api/artists').then(response => {return response.json()}).then(artists => {
    const list = document.getElementById("artists");

    function handleDelete(event) {
        event.preventDefault();
        const id = event.target.id;
        
        const artistToDelete = new Artist();
        artistToDelete.name = id;

        artistToDelete.delete()
    }

    artists.forEach(artist => {
        const artistName = artist.name;
        const artisturl = artist.url;
        const artistPhoto = artist.photo;
    
        const artistNode = document.createElement('ul');
        const nameNode = document.createElement('li');
        const urlNode = document.createElement('li');
        const photoNode = document.createElement('img');
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('id', artistName);
        deleteButton.onclick = handleDelete;
        deleteButton.innerText = "Delete";
        photoNode.style.width = '150px';
        photoNode.style.height = '150px';
    
        nameNode.innerText = artistName;
        urlNode.innerText = artisturl;
        photoNode.src = artistPhoto;
    
        artistNode.appendChild(nameNode);
        artistNode.appendChild(urlNode);
        artistNode.appendChild(deleteButton);

        list.appendChild(photoNode);
        list.appendChild(artistNode);
})
})
.catch(err => console.log(error));
