var bio = {
    name : "Simone",
    role : "Monkey",
    contacts : {
        location : "Rome",
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
        location : "Rome",
        dates : "2011 - 2012",
        description : "disappearing bananas"
    }
];

var education = {};
education["lastSchool"] = "Zoo";
education["city"] = "Jungle";

var projects = {
    projects : [
        {
            title : "BananaBot",
            dates : "2010 - 2011",
            description : "Bot who eats bananas" ,
            images : ["http://www.stock-monkey.com/images/bald-monkey.gif", "http://www.stock-monkey.com/images/bald-monkey.gif"]
        },
        {
            title : "Ubernana",
            dates : "2011 - 2015",
            description : "Banana transport system" ,
            images : ["http://www.stock-monkey.com/images/bald-monkey.gif", "http://www.stock-monkey.com/images/bald-monkey.gif"]
        }
    ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picURL);

$("#header").prepend(formattedName, formattedRole);
$("#header").append(formattedBioPic, formattedWelcomeMessage);

// Contacts info
var contactInfoTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var contactInfoMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(contactInfoMobile);
$("#topContacts").append(contactInfoTwitter);

// Skills check
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[1]));
}

// Jobs
function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var location = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var description = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(employer + title + dates + description + location);
    }
}

// Showing jobs
displayWork();

// Showing projects
projects.display = function() {
    for (projectIndex in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var title = HTMLprojectTitle.replace("%data%", projects.projects[projectIndex].title);
        var dates = HTMLprojectDates.replace("%data%", projects.projects[projectIndex].dates);
        var description = HTMLprojectDescription.replace("%data%", projects.projects[projectIndex].description);

        $(".project-entry:last").append(title + dates + description);

        /*if (projects.projects[projectIndex].images.length > 0) {
            for (imageIndex in projects.projects[projectIndex].images) {
                var image = HTMLprojectImage.replace("%data%", projects.projects[projectIndex].images[imageIndex]);
                $(".project-entry:last").append(image);
            }
        }*/

    }
};

projects.display();

$("#mapDiv").append(googleMap);


