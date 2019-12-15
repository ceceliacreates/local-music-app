export default class Artist {
    constructor(name, URL, photo) {
        this.name = name;
        this.URL = URL;
        this.photo = photo;
    }

    validate() {
        let isValid = true;

        if (this.name == undefined ||this.name.length == 0) isValid = false;
        if (this.URL == undefined ||this.URL.length == 0) isValid = false;
        if (this.photo == undefined || this.photo.length == 0) isValid = false;

        return isValid;
    }

    add() {
        const data = {
            'name': this.name,
            'url': this.URL,
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
}