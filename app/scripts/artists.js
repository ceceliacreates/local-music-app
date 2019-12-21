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
        photoNode.style.width = '150px';
        photoNode.style.height = '150px';
    
        nameNode.innerText = artistName;
        urlNode.innerText = artistURL;
        photoNode.src = artistPhoto;
    
        artistNode.appendChild(nameNode);
        artistNode.appendChild(urlNode);

        list.appendChild(photoNode);
        list.appendChild(artistNode);
})
})
.catch(err => console.log(error));
