import Artist from "./Artist.js";

function RenderList() {

    //makes API call to get artists array

    fetch('/api/artists').then(response => { return response.json() }).then(artists => {

        //Gets and clears the artists div

        const list = document.getElementById("artists");

        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }

        // helper function to handle delete clicks


        function handleDelete(event) {
            event.preventDefault();
            const id = event.target.id;

            const artistToDelete = new Artist();
            artistToDelete.id = id;

            artistToDelete.delete()
        }

        //Renders artists array

        artists.forEach(artist => {
            const artistName = artist.name;
            const artisturl = artist.url;
            const artistPhoto = artist.photo;
            const artistId = artist.id;

            const artistNode = document.createElement('div');

            artistNode.innerHTML = `
                <h3>${artistName}</h3>
                <img src=${artistPhoto}>
                <h5>${artisturl}</h5>
                `
            const deleteButton = document.createElement('button');
            deleteButton.setAttribute('id', artistId);
            deleteButton.onclick = handleDelete;
            deleteButton.innerText = "Delete";

            artistNode.appendChild(deleteButton);
            list.appendChild(artistNode);
        })
    })
}

export default RenderList;