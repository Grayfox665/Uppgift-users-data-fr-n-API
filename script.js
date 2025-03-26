
async function getAllUsers(){

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error("Fel vid hämtning av data : ")
        }
        const usersData = await response.json();
        console.log(usersData);
        return usersData;
    }
    catch(error){
        console.log(error);
    }
}

async function displayAllUsers(){
    const display = await getAllUsers()

    const usersList = document.getElementById("users-container");

    display.forEach(user => {
        let div = document.createElement("div");
                    let h3Name = document.createElement("h3");
                    let h3Username = document.createElement("h3");
                    let h3Email = document.createElement("h3");
        
                    h3Name.textContent ="Name : " + user.name;
                    h3Username.textContent ="Username : " + user.username;
                    h3Email.textContent ="Email : " + user.email;
        
                    usersList.appendChild(div);
                    div.setAttribute("class","user");
        
                    div.append(h3Name, h3Username, h3Email);        
    });
}


displayAllUsers();