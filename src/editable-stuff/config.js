// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Goutham",
  middleName: "",
  lastName: "Doddi",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/GouthamDoddi",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/GouthamDoddi",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/GouthamDoddi/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/goutham-doddi-22441b138/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/GouthamDoddi/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: "https://gouthamdoddi.github.io/IMG_5910.JPG",
  imageSize: 375,
  message: `I am a 27 year old Software Engineer based in Vizag, India. I have started working as a Software Test Engineer and have transitioned into a full stack developer. I can work with any language and framework and am very adaptable.

  I love learning new skills and using them, till I find another more intresting set of skills to master. This also reflects in my passion for playing the guitar, tennis and games.`,
  resume:
    "https://docs.google.com/document/d/1OU5qpzlahON50uGadDtdEW6tu8RxW5Tie7uDIes-E08/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "GouthamDoddi", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: "https://gouthamdoddi.github.io/IMG_5910.JPG",
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: "https://gouthamdoddi.github.io/IMG_5910.JPG",
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "Node", value: 70 },
    { name: "Django", value: 65 },
    { name: "HTML/CSS", value: 55 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "hashirshoaeb@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: "Product Developer", // Here Add Company Name
      companylogo:
        "https://www.apollotelehealth.com/wp-content/uploads/2019/11/cropped-Apollo_Telehealth-Logo.png",
      date: "Jan 2022– Sep 2022",
    },
    {
      role: "Full Stack Developer", // Here
      companylogo:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAABlZWWJiYnJycmmpqZMTEygoKDa2tr6+vo5OTmxsbEqKirq6upxcXGUlJR9fX3T09PCwsJYWFji4uLy8vK8vLy2trYZGRnU1NSampohISFTU1Pl5eVdXV1HR0cSEhIzMzNAQEBqamoLCwt2dnaDg4MmJibkz04BAAAHjklEQVR4nO2d6WKyOhCGQaDuS22VutSVft7/HZ6jzAQSQ1jEwOi8vxoIdR4TkslMQMexpcWyOxlcDu7hMph0lwtrn2tJPW/gyhp4vaaNqlHhydXpFDZtWE0KN1q+qzavwPj9kcl31cd30wY+qq6R76pu0yY+pk4uoOt2mjbyAS3kAXRzDsK5Pw+Ds3xnDshOHeNLCmM/Tc8Ovek+de4ybszGh9Qfpfj8u9N+inHUb8C+x5UQHJbaCstD8g1Ytq0WzYT558w6Z1FnZtGymrQsNB0kk4m+mVusflTMdPFFRNRuxT+0fJg+OvaHwdCXRs4hVvyza+Cj+ka7vdQxDwfXkZfy1TysSst/wyFkK44skpHnNrIks/w2d0BqoX4RRHRI31UlZsgxHvltxthKwp4n+mhwB+i6QWbt9qt/hPERu2KoAXRdXBwuYNw90hlOV4CwVsqqVnB+rZTbrylYjKNjOohxTP19gvM48k6bMri0YHQcQFFMeVFw7baLQHgDOFnCKmub8f/aJ6VJcBrc4m25wAliBAew0RuwtZJw+P+Miz0oDpKBpI9LY1gzfkKRyjpxDvYC0VSmuQmpoZn7UJxbt7Wa8L6D4kl3k23lsUa5L9sumN6PUIx01sO3EEERRtjAoSFY9OG6XdsDsSdDEeIBVCKLa7lbAoscqfFlQui0a4eGggL3mP5epdJLgXADRZgZdlKdXXwQnYINLcJQbh9cOqRXuOin4XICilQSNXiPgQuDfnc6YoiRRvC1F9p7tb1S7cUYfgedmj6mM7AjK99J+xXJI6NY/m6GV8b+UKQt8L6D0TfK+H/tU0ceTJ2jKzTapmL96BPgUEonC4VxXhxbPl29wDUX4w6VCT8JRBnDNJpADaFQFA6VYuSYagDFih5HJkrpGeymSfRseQeYRPuxCel00iR6lhr+f88S3znpkdiEEZm54ipslnQyYjVD7miWjqphioNQuNRJ2kVJRqzCYB2EctBQpDhINWHSiLvcmjuSTZhqxDxX0yfahMlw+pFTD7dMURpIY4mdGMVywBR3Y+Aq/mCshdsxqETZJGHU17RwR3duYKjTXuEYcsjugH1sQipLX0WYnchOKaG7SiclIwtD95npCJHfJrshegIAWRuecPPCxKpVdUpsWNBvJBH+GqF1oSr03b60Z7+I+mtpYdZMxCvSErENgpN9ItyDoPPd0F+jkqzI0E+m74b+2k8DVtUpjPDf7ZXBPTdkIvmZwp0mqu+G/tpJexUlYSpU3WeBh6mk7g1C302eE3AeoeqvpaX13ej7a2npfDdS/tp01zFre99eol23Odfu2rDVDWNl+UpSS0Ueh1KvaU7FrRW+W1Yuij4hxirUJ2ZfhxB8t/sszesQxrstR/kVyRLepn0vv1orCfeeSeJhi5MntkTPjFfsW0eYs1C/n1NycjYeNcLeHWGOv0aO8C6Tn+es0CN05Ofy81JSFAn7kxTgJDf6RJDQcYbi6bwCmSaShP8v+L2vy5dXaFlPlLCEmNCimLCimNCimLCimNCimLCimNCimLCimNCiZMJxZ6JXR95T851ZD5JwrSUUu4DuJG84yU5dwDfBhBbFhEzIhHVpPqyocC8Rjiczvf6U2eIvo95Eni32YVXD1Iie/k2/JfSkGb+61M1W5nfhUiRU8wZMyIRM+EKE4yzJ+bR+Zr0nExZ5uQhO6lA8S4TZM77+/TT3kmd8fF2kfNKowEhY5ClATMlDo1jxaXDTf5HNml0mZEImfF/CamPpswjxxUdwErZsTQsQ1j0f6glh+xFuHIOTqxKE2Ifg5FcJwrpUhBAfiYOTn0zIhExImfCjpYQIUYFwEYercKUBgbhVAcK6Y216wpUcTgvi4qIEoVHs0zAhEzIhExacLcKrcDu2fyuFvQKET8rjK4S92CBckIG1ZWaL15/x385rY0ImZMIGCJVI1GOEC5PqJCwTiTKqLKFrUjVCo5gwX0yoign1YsJsMSFA/FyFn9+JbqX1Q4Th73eiX+VXPkoSrm/2RbitD6ztlSCs1aeB6voVcDXClnltTMiETNh8ZuZ5hA/EacaBnJm5FQPl9wwbJPyMDZIzM8G4BKFRLSA0ignzxYSqmFAvJsxWscxMuLwKX/Hr30rLIpkZO4S92CDMzIC1j2dmvNYQejKE/AnstTEhEzJhOwm3LSVUflO5DKFRLSA0ignzxYSqmFAvJsxWY4SycfhPMq96dmYmGt3rR6RtdIQ/mitiQfWNdBB/uDrzqh8TYVf3aVGVzIws44z/JBlnfEVVfBpZTPgMMWFaTHjT2xEGNw3hFzeMhLthUKeGuwKEA/jMBwjhZJlnSOtShWdIefclEzLhCxI6FgmVBYolwuX8Kh+uPPvzOuXDS2E+4n+LP6Bkl7AJMSETMiETPl9MWC+hY1ONENr8wfBG/VIrYkImdN6BEFL1sCtYGS4hTgNPlChvhrQj+Ex4qH8dl5Q4DeBDYEr84vcg1iE+fIlLR7hGPrnRnrQj+MxjXIK8zkF78iKfND+V9ApiQvpiQvp6H8J/teZV2qB/CqHvvJp8JiQvJqSv9yPs+q+mrkL4umJC+mJC+mJC+voPCvjUoOQ3aqYAAAAASUVORK5CYII=",
      date: "nov 2021 - jan 2022, feb 2023 - Sep 2023",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
