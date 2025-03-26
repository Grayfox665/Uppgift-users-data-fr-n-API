
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
                    let infoButton = document.createElement("button");
        
                    let h3City = document.createElement("h3");
                    let h3Phone = document.createElement("h3");
                    let h3Company = document.createElement("h3");



                    h3Name.textContent ="Name : " + user.name;
                    h3Username.textContent ="Username : " + user.username;
                    h3Email.textContent ="Email : " + user.email;

                    h3City.textContent ="City : " + user.address.city;
                    h3Phone.textContent ="Phonenumber : " + user.phone;
                    h3Company.textContent ="Company Name : " + user.company.name;
        
                    usersList.appendChild(div);
                    div.setAttribute("id",`${user.id}`);
                    div.setAttribute("class","user");

                    infoButton.setAttribute("onclick","toggleInfo()");

                    h3City.setAttribute("class","info");
                    h3Phone.setAttribute("class","info");
                    h3Company.setAttribute("class","info");
        
                    div.append(h3Name, h3Username, h3Email, infoButton, h3City, h3Phone, h3Company);        
    });
}


// async function toggleInfo(){
//     const display = await getAllUsers()
//     const toggle = document.querySelectorAll();


// }



displayAllUsers();