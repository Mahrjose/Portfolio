import { projects } from "./projects_data"
import { resume } from "./resume_data"
import { education } from "./education_data"
import { research } from "./research_data"

export const meta = {
  domain : "https://mahrabhossain.me",
  tld: "mahrabhossain.me",
  name: "Mirza Mahrab Hossain",
  location : "Dhaka, Bangladesh",
  phone : "+880 1869-585472",
  email: "mirzamahrabhossain.com",
  social: {
    facebook : "https://www.facebook.com/mirzamahrabhossain/",
    discord : "https://discordapp.com/users/606866601907716218",
    twitter : "https://x.com/mahrjosee",
    github : "https://github.com/Mahrjose",
    reddit : "https://www.reddit.com/user/Mahrjose/",
    linkedin : "https://www.linkedin.com/in/mirzamahrabhossain/",
    // -------------------------------------------------------------- //
    goodreads : "https://www.goodreads.com/user/show/109518149-mirza-hossain",
    myanimelist : "https://myanimelist.net/profile/mahrjose",
    mydramalist : "https://mydramalist.com/profile/Mahrjose",
    imdb : "https://www.imdb.com/user/ur69168196/",
    steam: "https://steamcommunity.com/id/mirzamahrabhossain/",
    duolingo: "https://www.duolingo.com/profile/Mahrjose",
    // ---------------------------------------------------------------- //
    leetcode : "https://leetcode.com/u/Mahrjose/",
    codeforces: "https://codeforces.com/profile/Mahrjose",
    hackerrank: "https://www.hackerrank.com/profile/Mahrjose",
    hackerearth : "https://www.hackerearth.com/@Mahrjose",
    picoctf : "https://play.picoctf.org/users/Mahrjose",
  }
}

export const portfolioData = {
  hero: {
    name: meta.name,
    title: "Software Engineer",
    picture: "/images/profile/profile.jpg",
    description:
      "I bring innovative ideas to life by building intelligent systems that truly make a difference. My passion lies in crafting impactful solutions, exploring frontiers in AI, Machine Learning, and scalable software for a smarter, more connected world.",
    location: meta.location,
    experience: "1+ Years of Experience",

    social: [
      { name : "Facebook", url : meta.social.facebook },
      { name: "LinkedIn", url: meta.social.linkedin },
      { name: "GitHub", url: meta.social.github },
      { name: "Email", url: `mailto:${meta.email}` },
    ],
  },

  about: {
    summary:
      "I'm a lifelong tech enthusiast drawn to the magic of computers, games, and artificial intelligence. My curiosity started with shiny gadgets and virtual worlds and it never stopped.",

    myStory: [
      "Since childhood, I was captivated by the digital world, the allure of video games, glowing screens, and futuristic gadgets pulled me in. I said I wanted to be a computer engineer long before I even knew what that meant. It just sounded cool, like I’d get to build the future.",  
      "My coding journey began with C# and Unity, building games and exploring interactive design. In university, I picked up Python, then gradually expanded into other languages and technologies. My fascination with AI started in pop culture, but the real hook was learning how neural networks actually work. The idea that you could train a system to recognize, predict, or generate anything just from data, completely intrigued me and the amount of things this could be used for felt endless.",
      "These days, I’m deep into large language models, AI agents, and cybersecurity. I’m especially drawn to voice-based AI. The idea that we might talk to machines the way we talk to people feels like science fiction finally catching up to us. And yes, a part of me still finds joy in figuring out how systems tick, especially the ones not meant to be easily understood.",
    ],

    professionalHighlights: {
      whatIDo:
        "I'm currently working as an AI Engineer, working on everything from fine-tuning models and building task-specific agents to scripting, refactoring tools, and integrating APIs. On the side, I'm exploring voice-based LLMs to build smarter, more natural voice agents.",
      currentFocus: ["LLMs", "AI Agents", "Voice AI", "Cybersecurity"],
    },

    personalHighlights: {
      description:
        "I'm a huge gaming nerd, especially single-player story-driven games. When I'm not in front of a screen, I love traveling, reading, or just sleeping in (seriously). I'm fairly introverted, so most of my adventures are in books, games, or fictional worlds.",
      funFacts: [
        "Visited every major city in Bangladesh",
        "Watched over 500+ anime series (and counting!)",
        "Obsessed with custom modern gaming PCs",
      ],
    },

    interests: [
      { name: "Gaming", description: "Big fan of single-player experiences and custom gaming rigs" },
      { name: "Travel", description: "Exploring new places and cultures is my therapy" },
      { name: "Sleeping", description: "Underrated hobby — no notes" },
      { name: "Reading", description: "Books, manga, and articles on AI and tech" },
      { name: "Anime", description: "Over 500+ series watched, and still going strong" },
      { name: "Movies/TV", description: "Thriller, gore, and anything mind-bending" },
      { name: "Music", description: "Always exploring new genres and soundscapes" },
      { name: "Football", description: "Watching, playing casually, and obsessing during World Cup season" },
      { name: "Linux Ricing", description: "Because making your terminal look sexy is technically productivity" },
    ],

    personalPlatforms: [
      { name: "Goodreads", url: meta.social.goodreads },
      { name: "MyAnimeList", url: meta.social.myanimelist },
      { name: "Steam", url: meta.social.steam },
      { name: "Duolingo", url: meta.social.duolingo }
    ],

    languages: [
      { name: "English", level: "Fluent" },
      { name: "Bangla", level: "Native" },
      { name: "Hindi", level: "Conversational" },
    ],

    philosophy: {
      quote: "When you gaze long into an abyss, the abyss gazes back into you",

      principles: [
        {
          title: "Comfort Is Underrated",
          description: "Everyone’s chasing greatness; I think being at peace, even briefly, is also a win worth celebrating.",
        },
        {
          title: "Curiosity Over Certainty",
          description: "I don’t need to have all the answers. I just need to keep asking better questions.",
        },
        {
          title: "Hard Work Matters — But Luck Is a Bitch",
          description: "I believe in showing up and doing the work. But let’s not pretend timing and randomness don’t screw things up sometimes.",
        },
        {
          title: "You Don’t Have to Be Deep All the Time",
          description: "Some days you reflect on life. Other days you just eat noodles and scroll memes. That’s balance.",
        },
      ],
    },
  },

  contact: {
    email: meta.email,
    phone: meta.phone,
    location: meta.location,
    availability: "Available for consulting and full-time opportunities",
    responseTime: "I typically respond to emails within a few hours.",
    social: {
      linkedin: meta.social.linkedin,
      github: meta.social.github,
      facebook: meta.social.facebook,
      twitter: meta.social.twitter,
      reddit: meta.social.reddit,
      discord: meta.social.discord // Fix
    },
  },

  wakatime: {
    last7days: "40h 07m",
    profileUrl: "https://wakatime.com/@Mahrjose",
  },

  topProject : {
    name : "Hive",
    link : "https://github.com/mahrjose/hive"
  },

  projects,
  resume,
  education,
  research,

  employment: {
    status: "employed", // or "looking"

    current: {
      company: "Pipeline Inc",
      position: "AI Engineer Intern",
      startDate: "February 2025",
      location: "Dhaka, Bangladesh",
      type: "Hybrid",
      company_website: "https://ppln.co/en",
      company_linkedin: "https://www.linkedin.com/company/ppln-co/",
      logo: "/images/logo/company-logo.jpg",
      description:
        " Contributing to internal AI projects while gaining hands-on experience in scalable system design and engineering practices. Built a modular Custom AI agent framework from scratch, helping the team explore automation and architecture-driven solutions."
    },

    // When employed
    employedMessage: "While I'm currently employed full-time, I'm always open to discussing interesting projects, research collaborations, or speaking opportunities.",

    // When looking
    lookingMessage: {
      summary: "Currently seeking new opportunities in AI engineering and machine learning research.",
      interest: "I'm particularly interested in roles involving computer vision, NLP, and MLOps. I'm open to full-time positions, consulting engagements, and interesting collaborative projects that push the boundaries of AI technology."
    }
  },

}
