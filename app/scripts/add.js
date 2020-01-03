import Artist from "./components/Artist.js";

document.getElementById('submit').addEventListener('click', event => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const url = document.getElementById('url').value;
    const photo = document.getElementById('photo').value;

    const artist = new Artist(undefined, name, url, photo);

    console.log("front end object" + artist);

    const valid = artist.validate();

    if (valid) {

        artist.add();
    }

    else {

        const p = document.getElementById("response");
        p.innerText = "Invalid Entry";
    }

})
