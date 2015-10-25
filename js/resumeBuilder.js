var bio = {
    name : "Simone",
    role : "Monkey",
    contactInfo : {
        twitter : "@bananalover",
        mail : "monkey@monkeyworld.ban",
        mobile : "1666666"
    },
    picURL : "http://www.stock-monkey.com/images/bald-monkey.gif",
    welcomeMessage : "Welcome monkeyss",
    skills : ["idiot", "banana-eater"]
};

var work = {};
work.currentPosition = "Banana eater senior";
work.yearsWorked = 5;
work.city = "Rome";
work.jobs = [
    {
        employer : "BanaBook",
        title : "eating banana pro",
        location : "Jungle",
        dates : "2010 - 2011",
        description : "eating bananas all day"
    },
    {
        employer : "Bananamen",
        title : "disappearing bananas",
        location : "San Francisco",
        dates : "2011 - 2012",
        description : "disappearing bananas"
    }
];

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

// Contacts info
//var contactInfoTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
//var contactInfoMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
//$("#header").append(contactInfoTwitter);
//$("#header").append(contactInfoMobile);

// Skills check
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    //$("#header").append(HTMLskills.replace("%data%", bio.skills[0]));
    //$("#header").append(HTMLskills.replace("%data%", bio.skills[1]));
}

// Jobs
for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);

    $(".work-entry:last").append(employer + title);
}
