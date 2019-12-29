import Artist from "./components/Artist.js";

document.getElementById('edit').addEventListener('click', event => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const url = document.getElementById('url').value;
    const photo = document.getElementById('photo').value;

    const artist = new Artist(name, url, photo);
    
    const valid = artist.validate();
    
    if (valid) {
        artist.edit();
    }
    else {
    const p = document.getElementById("response");
    p.innerText = "Invalid Entry";
    }
})