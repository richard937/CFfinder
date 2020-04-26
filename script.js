function getDetails() {
    var request = new XMLHttpRequest();

    var url = "http://codeforces.com/api/user.info?handles=";
    var username = document.getElementById("username").value;


    request.open('GET', url + username, true)
    request.onload = function () {

        // Begin accessing JSON data here
        var json = JSON.parse(this.response)

        if (json.status == "OK") {
            var object = json.result[0];

            var photo = `https:${object.titlePhoto}`;
            document.getElementById("photo").setAttribute("src", photo);

            var fullName = `${object.firstName} ${object.lastName}`;
            document.getElementById("name").innerHTML = fullName;

            var rating = object.rating;
            document.getElementById("rating").innerHTML = rating;

            var rank = object.rank;
            document.getElementById("rank").innerHTML = rank;

            var college = object.organization;
            document.getElementById("college").innerHTML = college;

            var city = object.city;
            document.getElementById("city").innerHTML = city;

            document.getElementById("profile").style.display = "block";

        } else {
            console.log('error')
        }
    }

    request.send()
}

