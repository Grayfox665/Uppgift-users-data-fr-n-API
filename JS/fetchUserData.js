
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
    //awaits the result and gets the User Array data from getAllUsers function
    const display = await getAllUsers()



    const usersList = document.getElementById("users-container");

    display.forEach(user => {

        /*Article for each user */
        let article = document.createElement("article");
        
        /* creates the h3 content  for each article */
            let h3Name = document.createElement("h3");
            let h3Username = document.createElement("h3");
            let h3Email = document.createElement("h3");

        
            let h3City = document.createElement("h3");
            let h3Phone = document.createElement("h3");
            let h3Company = document.createElement("h3");

        
            /* inserts the info to the h3 for each article */
            h3Name.textContent ="Name : " + user.name;
            h3Username.textContent ="Username : " + user.username;
            h3Email.textContent ="Email : " + user.email;

            h3City.textContent ="City : " + user.address.city;
            h3Phone.textContent ="Phonenumber : " + user.phone;
            h3Company.textContent ="Company Name : " + user.company.name;
        
            usersList.appendChild(article);
            article.setAttribute("class",`user ${display.indexOf(user)}`);

            /*the div with extra info */
            const sectionInfo = document.createElement("section");
            sectionInfo.classList.add('more-info');
            sectionInfo.setAttribute("id",`info-${display.indexOf(user)}`);
            sectionInfo.append(h3City,h3Phone,h3Company);

            /*the toggle button */
            const infoButton = document.createElement("button");
            infoButton.textContent = "More Info";
            infoButton.addEventListener('click', () => toggleInfo(display.indexOf(user)));

            /*the extra info */
            h3City.setAttribute("class",`info ${display.indexOf(user)}`);
            h3Phone.setAttribute("class",`info ${display.indexOf(user)}`);
            h3Company.setAttribute("class",`info ${display.indexOf(user)}`);
        
            article.append(h3Name, h3Username, h3Email,infoButton, sectionInfo);  

    });
}


displayAllUsers();