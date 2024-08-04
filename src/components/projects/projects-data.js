import RecipeFinder from "../../assets/recipe-finder.png"
import Portfolio from "../../assets/portfolio.png"
import SocialMedia from "../../assets/social-media.png"
import CollegeSite from "../../assets/college-site.png"
const projects = [
  {
    title: "Social Media",
    technologies: ["ReactJS", "ExpressJS", "MongoDB", "NodeJS"],
    githubLink: "https://github.com/bhasidhshaik/Social-Media-Clone",
    liveLink: "https://connectsphere-bs.onrender.com/", 
    imgUrl: SocialMedia,
  },
    {
        title: "Recipe Finder",
        technologies: ["ReactJS", "ExpressJS", "PostgreSQL", "NodeJS"],
        githubLink: "https://github.com/bhasidhshaik/Indian-Food",
        liveLink: "https://indian-food-lake.vercel.app/", 
        imgUrl: RecipeFinder,
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