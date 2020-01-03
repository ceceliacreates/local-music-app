import RenderList from "./utilities.js";

// uncomment next line when running in browser
export default
class Artist {
    constructor(id, name, url, photo) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.photo = photo;
    }

    validate() {
        let isValid = true;

        if (this.name == undefined ||this.name.length == 0) isValid = false;
        if (this.url == undefined ||this.url.length == 0) isValid = false;
        if (this.photo == undefined || this.photo.length == 0) isValid = false;

        return isValid;
    }

    add() {
        const data = {
            'name': this.name,
            'url': this.url,
            'photo': this.photo
        };
    
        fetch("/api/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            console.log(response);
            const p = document.getElementById("response");
            p.innerText = response.status == 200? "Artist added." : "Something went wrong";
        })
    }

    edit() {
        const data = {
            'name': this.name,
            'url': this.url,
            'photo': this.photo
        };

        console.log(data);
    
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
    }

    delete() {

        const data = {
            'id': this.id,
            'name': this.name,
            'url': this.url,
            'photo': this.photo
        };

        fetch("/api/delete", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            console.log(response);
            const p = document.getElementById("response");
            p.innerText = response.status == 200? "Artist deleted." : "Something went wrong";
            RenderList();
        })
    }
}
//uncomment next line when running tests
//exports.Artist = Artist;
