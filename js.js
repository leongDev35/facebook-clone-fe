var subjectSel = document.getElementById("notif-dropdown");
var buttonMessageNav = document.getElementById("message-dropdown");
var buttonMenuNav = document.getElementById("menu-dropdown");
var buttonProfileNav = document.getElementById("profile-dropdown");

var dropdownNotif = document.getElementById("dropdown-notif");
var dropdownMessage = document.getElementById("dropdown-message");
var dropdownMenu = document.getElementById("dropdown-menu");
var dropdownProfile = document.getElementById("dropdown-profile");
var dropsideSetting = document.getElementById("dropside-setting-privacy");

var settingAndPrivacy = document.getElementById("setting-and-privacy");
var backDropdownProfile = document.getElementById("back-profile-dropdown");


document.addEventListener("click", function (event) {


    if (!dropdownNotif.contains(event.target) && !subjectSel.contains(event.target)) {
        dropdownNotif.style.display = "none";
    }

    if (!dropdownMessage.contains(event.target) && !buttonMessageNav.contains(event.target)) {
        dropdownMessage.style.display = "none";
    }

    if (!dropdownMenu.contains(event.target) && !buttonMenuNav.contains(event.target)) {
        dropdownMenu.style.display = "none";
    }


    if (!dropdownProfile.contains(event.target) && !buttonProfileNav.contains(event.target)) {

        dropdownProfile.style.display = "none";
    }
    if (!dropsideSetting.contains(event.target) && !settingAndPrivacy.contains(event.target)) {
        dropsideSetting.style.display = "none";
    }

});
subjectSel.addEventListener("click", (event) => {
    myFunction(event, dropdownNotif)
});
buttonMessageNav.addEventListener("click", (event) => {
    myFunction(event, dropdownMessage)
});
buttonMenuNav.addEventListener("click", (event) => {
    myFunction(event, dropdownMenu)
});
buttonProfileNav.addEventListener("click", (event) => {
    myFunction(event, dropdownProfile)
});
settingAndPrivacy.addEventListener("click", (event) => {
    presentSetting(event, dropsideSetting)

});

function presentSetting(event, dropdownEle) {
    if (dropdownProfile.style.display == "block") {
        dropdownProfile.style.display = "none"
    }


    if (dropdownEle.style.display == "" || dropdownEle.style.display == "none") {

        dropdownEle.style.display = "block"
    } else if (!dropdownEle.contains(event.target)) {
        dropdownEle.style.display = "none"
    }

}
function myFunction(event, dropdownEle) {
    if ((dropdownEle.style.display == "" || dropdownEle.style.display == "none")) {

        dropdownEle.style.display = "block"
        if (dropsideSetting.style.display == "block") {
            dropdownProfile.style.display = "none"
        }
        if (backDropdownProfile.contains(event.target)) {
            dropdownProfile.style.display = "block";
            dropsideSetting.style.display = "none"
        }

    } else if (!dropdownEle.contains(event.target)) {
        dropdownEle.style.display = "none"
    }


}





//! chức năng kéo story
