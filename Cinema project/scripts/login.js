var korisnici = [
	{
		username : "straja98",
		password : "straja"
	},
	{
		username : "bojan98",
		password : "bojan"
	}

]

function login(){
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value

	for(i = 0; i<korisnici.length; i++){
		if (korisnici[i].username == username && korisnici[i].password == password) {
			window.location ="../template/index.html";
			//document.getElementById('pogresnaLozinka').innerHTML == "bravo";
			//var plog = document.createElement('p');
			//Ovdde bi kao nei kstyle za css bacali kao ludi
			//username.appendChild(plog);

		}
		else{
			alert("hi");
		}

	}
}