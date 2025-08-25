import RecipeFinder from "../../assets/recipe-finder.png"
import Portfolio from "../../assets/portfolio.png"
import SocialMedia from "../../assets/social-media.png"
import CollegeSite from "../../assets/college-site.png"
import SangeeTru from "../../assets/sangeetru.png"
const projects = [
   {
      title: "SangeeTru - Share Lyrics with Emotions",
      technologies: ["Next JS", "Tailwind CSS", "Vercel", ],
      githubLink: "https://github.com/bhasidhshaik/sangeetru",
      liveLink: "https://sangeetru.vercel.app/",
      imgUrl: SangeeTru,
    },
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
      technologies: ["JavaScript", "PHP", "HTML & CSS", "Bootstrap"],
      githubLink: "/", 
      liveLink: "http://ruce.ac.in/",
      imgUrl: CollegeSite,
    },
   
  ];
export default projects  