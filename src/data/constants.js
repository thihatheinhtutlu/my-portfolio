import CrwnLogo from '../assets/images/crwnlogo.jpg';
import BrainLogo from '../assets/images/brain.jpg';
import NatoursLogo from '../assets/images/natours.jpg'
import MonsterLogo from '../assets/images/cute-monster.jpg';
import RobotLogo from '../assets/images/robot.jpg';

import DULogo from '../assets/images/DU.jpg'
import KMDLogo from '../assets/images/KMD.jpg'
import YIULogo from '../assets/images/YIU.jpg'
import UDEMYLogo from '../assets/images/UDEMY.jpg'
import AILogo from '../assets/images/ai.jpg'


export const Bio = {
    name: "Thiha Thein Htut Lu",
    roles: [
      "Frontend Developer",
      "Website Developer",
      "Software Engineer",
      "Programmer",
    ],
    description:
      "Hi, I am self-taught front-end web developer. I am a constantly learning individual. I taught myself English and Computer skills when I was young. Now, using those skills, I’m able to learn every-thing I want through the internet. I started learning web programming from the beginning of 2023 and still learning right now and will still be learning in the future for the web programming field is highly progressive.",
    github: "https://github.com/thihatheinhtutlu",
    resume:
      "https://drive.google.com/file/d/1kdLueXzlp-HttH6qOgshZo9CUIEx7FhV/view?usp=drive_link",
    linkedin: "https://www.linkedin.com/in/thiha-theinhtutlu-4b782428b/",
    insta: "https://www.instagram.com/wreck_thomas/?hl=en",
    facebook: "https://www.facebook.com/profile.php?id=100088176555910"
  };
  
  export const skills = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React Js",
          image: 
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
        {
          name: "Redux",
          image:
            "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
        },
        {
          name: "HTML",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
        },
        {
          name: "CSS",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          name: "JavaScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        },
        {
          name: "Bootstrap",
          image:
            "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        },
        {
          name: "TypeScript",
          image: "data:image/png;base64,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",
        },
        {
          name: "SCSS",
          image: "data:image/png;base64,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",
        },
      ],
    },
    {
      title: "Others",
      skills: [
        {
          name: "Git",
          image:
            "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
        },
        {
          name: "GitHub",
          image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        },
        {
          name: "Netlify",
          image:
            "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
        },
        {
          name: "VS Code",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
        },
        {
          name: "Postman",
          image:
            "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png",
        },
        {
          name: "Figma",
          image:
            "data:image/png;base64,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",
        },
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: DULogo,
      school: "Dagon University, Yangon, Burma",
      date: "2018 - 2021",
      grade: "A",
      desc: "I completed my BE degree back in days, but I decied to be a part in Programming field, that's why I dropped my degree and started learning and teaching myself about Web Development.",
      degree: "Bachelor in english literature",
    },
    {
      id: 1,
      img: YIULogo,
      school: "Youth International University, Yangon, Burma",
      date: "2020 - 2021",
      grade: "B",
      desc: "I completed my CCNA class and passed it, although I passed CCNA I have zero interest in that filed, that's why I decided to learn Programming.",
      degree: "Cisco Certified Network Associate",
    },
    {
      id: 2,
      img: KMDLogo,
      school: "KMD Institute, Yangon, Burma",
      date: "2020 - 2020",
      grade: "A",
      desc: "I got to attend this class to get in touch with computers, routers, servers, and something tech devices.",
      degree: "A+",
    },
    {
      id: 3,
      img: UDEMYLogo,
      school: "UDEMY Online Academy, Online",
      date: "2023 - present",
      grade: "A",
      desc: "I attended so many courses from UDEMY Online like HTML, CSS, JavaScript, TypeScript and many more.",
      degree: "Udemy",
    },
  ];
  
  export const projects = [
    {
      id: 11,
      title: "CrownClothing",
      date: "Jul 2023 - Dec 2023",
      description:
        "Just a e-commerce website where you can buy kinds of almost of everythings",
      image: CrwnLogo,
      tags: [
        "React Js",
        "Redux",
        "SCSS",
        "HTML",
        "Firebase",
        "Firestorm",
      ],
      category: "web app",
      github: "https://github.com/thihatheinhtutlu/crwn-clothing",
      webapp: "https://peppy-salmiakki-92ca2b.netlify.app/",
    },
    {
      id: 3,
      title: "GPT3 AI",
      date: "Feb 2024 - Feb 2024",
      description:
        "Modern UI/UX project from Figma design",
      image: AILogo,
      tags: [
        "React Js",
        "Redux",
        "SCSS",
        "HTML",
      ],
      category: "web app",
      github: "https://github.com/thihatheinhtutlu/gpt3_thomas",
    },
    {
      id: 9,
      title: "Smart-Brain",
      date: "Jul 2023 - Nov 2023",
      description:
        "Just a cool project",
      image: BrainLogo,
      tags: [
        "React Js",
        "Redux",
        "SCSS",
        "HTML",
      ],
      category: "web app",
      github: "https://github.com/thihatheinhtutlu/smart-brain",
    },
    {
      id: 0,
      title: "Natours",
      date: "Dec 2023 - Feb 2024",
      description:
        "A nice website for nature lovers",
      image: NatoursLogo,
      tags: [
        "React Js", 
        "TypeScript", 
        "SCSS",
        "HTML"
      ],
      category: "web app",
      github: "https://github.com/thihatheinhtutlu/Natours",
    },
    {
      id: 1,
      title: "MonsterRolodex",
      date: "Feb 2023 - April 2024",
      description:
        "A website where you can play with Monsters",
      image: MonsterLogo,
      tags: [
        "React Js",  
        "SCSS",
        "HTML"
      ],
      category: "web app",
      github: "https://github.com/thihatheinhtutlu/Natours",
    },
    {
      id: 2,
      title: "RoboFriends",
      date: "Feb 2023 - April 2024",
      description:
        "A website where you can play with Robots",
      image: RobotLogo,
      tags: [
        "React Js",  
        "SCSS",
        "HTML"
      ],
      category: "web app",
      github: "https://github.com/thihatheinhtutlu/Natours",
    },

  ];
  
  export const TimeLineData = [
    { year: 2022, text: "Started my journey" },
    { year: 2023, text: "Learnt from various platform such as UDEMY" },
    { year: 2023, text: "Still learning" },
  ];
