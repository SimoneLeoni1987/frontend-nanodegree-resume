var bio = {
    name : "Simone",
    role : "Monkey",
    contactInfo : {
        skype : "Skype contact",
        phone : "1666666"
    },
    picURL : "http://www.stock-monkey.com/images/bald-monkey.gif",
    welcomeMessage : "Welcome monkeyss",
    skills : ["idiot", "banana-eater"]
};

var work = {};
work.currentPosition = "Banana eater senior";
work.yearsWorked = 5;
work.city = "Rome";

var education = {};
education["lastSchool"] = "Zoo";
education["city"] = "Jungle";

var project = [
    {
        name : "BananaBook",
        year : 2000
    },
    {
        name : "Twibber",
        year : 2005
    }
];

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picURL);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedWelcomeMessage);
$("#header").append(formattedBioPic);
