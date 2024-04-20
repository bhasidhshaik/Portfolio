import RecipeFinder from "../../assets/recipe-finder.png"
import Portfolio from "../../assets/portfolio.png"
import LibraryManagement from "../../assets/library_management_system.jpeg"
import CollegeSite from "../../assets/college-site.png"
const projects = [
    {
        title: "Recipe Finder",
        technologies: ["ReactJS", "ExpressJS", "PostgreSQL", "NodeJS"],
        githubLink: "https://github.com/bhasidhshaik/Indian-Food",
        liveLink: "https://indian-food-lake.vercel.app/", 
        imgUrl: RecipeFinder,
      },
    {
      title: "Library Management",
      technologies: ["NodeJS", "ExpressJS", "MongoDB" , "EJS"],
      githubLink: "https://github.com/bhasidhshaik/library-management-ru",
      liveLink: "#", 
      imgUrl: LibraryManagement,
    },
    
    {
      title: "RUCE College Website",
      technologies: ["JavaScript", "PHP", "HTML & CSS"],
      githubLink: "/", 
      liveLink: "http://ruce.ac.in/",
      imgUrl: CollegeSite,
    },
    {
      title: "Personal Website",
      technologies: ["ReactJS", "CSS"],
      githubLink: "https://github.com/bhasidhshaik/personal_website",
      liveLink: "/",
      imgUrl: Portfolio,
    },
  ];
export default projects  