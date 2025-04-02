
/*activates the showing of extra info for user when corresponding button is pressed */
function toggleInfo(userIndex){
    const sectionInfo = document.getElementById(`info-${userIndex}`);
    if (sectionInfo.style.display === 'none' || sectionInfo.style.display === ''){
        sectionInfo.style.display = "block";
    } else {
        sectionInfo.style.display = "none";
    }
}