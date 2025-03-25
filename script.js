function getAllUsers(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
        if(!response.ok){
            throw new Error("Network was not ok")
        }
        return response.json();
    })
    .then(users => {
        let usersList = document.getElementById("users-container")

        users.forEach(user => {
            let div = document.createElement("div");
            let h3Name = document.createElement("h3");
            let h3Username = document.createElement("h3");
            let h3Email = document.createElement("h3");

            h3Name.textContent = user.name;
            h3Username.textContent = user.username;
            h3Email.textContent = user.email;

            usersList.appendChild(div);
            div.setAttribute("class","user");

            div.append(h3Name, h3Username, h3Email);
            


        });
    })
    .catch(e => {
        alert("Error : " + e);
    })
}

getAllUsers();