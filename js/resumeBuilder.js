/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%", "Simone");
var formattedRole = HTMLheaderRole.replace("%data%", "Scimmia");

$("#header").prepend(formattedName);
$("#header").append(formattedRole);

var skills = ["idiot", "banana-eater"];

var bio = {
    name : "Simone",
    role : "Scimmia",
    contactInfo : "No contact info",
    picURL : "http://weknowyourdreams.com/images/monkey/monkey-05.jpg",
    welcomeMessage : "Welcome monkeyss",
    skills : skills
};

$("#bio")

