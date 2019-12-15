fetch('/api/artists').then(response => {return response.json()}).then(artists => {
    const list = document.getElementById("artists");

    artists.forEach(artist => {
        const artistName = artist.name;
        const artistURL = artist.url;
        const artistPhoto = artist.photo;

        console.log(artistName, artistURL, artistPhoto);
    
        const artistNode = document.createElement('ul');
        const nameNode = document.createElement('li');
        const urlNode = document.createElement('li');
        const photoNode = document.createElement('img');
    
        nameNode.innerText = artistName;
        urlNode.innerText = artistURL;
        photoNode.src = artistPhoto;
    
        artistNode.appendChild(nameNode);
        artistNode.appendChild(urlNode);

        list.appendChild(artistNode);
        list.appendChild(photoNode);
})
})
.catch(err => console.log(error));
