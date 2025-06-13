export const meta = {
  domain : "https://mahrabhossain.me",
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
      { name: "IMDB", url: meta.social.imdb },
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

  wakatime: {
    last7days: "40h 07m",
    profileUrl: "https://wakatime.com/@Mahrjose",
  },

  topProject : {
    name : "Hive",
    link : "https://github.com/mahrjose/hive"
  },

  projects: [
    {
      id: 1,
      feature: {status: true, rank: 2},
      status: "Completed",
      type: "Web Development",

      date: "May, 2024",
      start: "27-04-2024",
      end: "03-05-2024",
      collabType: "Solo",

      title: "Hive - A Simple Open Source Chat Application",
      github: "https://github.com/Mahrjose/Hive",
      demo: "https://hive-xnck.onrender.com/",

      language: "JavaScript",
      tech: ["JavaScript", "React.js", "Node.js", "Express.js", "Socket.io", "MongoDB", "Chakra UI"],
      
      description:
        "A full-stack real-time chat application built with the MERN stack and Socket.io, \
        designed for open-source collaboration. Hive supports secure user authentication, \
        responsive layouts, and dynamic group messaging — all wrapped in a clean UI using \
        Chakra UI. Ideal for small communities looking for a self-hosted messaging solution."

    },
    {
      id: 2,
      feature: {status: false, rank: 0},
      status: "Completed",
      type: "Computer Graphics",

      date: "December, 2024",
      start: "07-12-2024",
      end: "10-12-2024",
      collabType: "Solo",

      title: "Orb Invader - A 2D OpenGL Shooter Game",
      github: "https://github.com/Mahrjose/Orb-Invaders",
      demo: "", 

      language: "C++",
      tech: ["C++", "OpenGL", "GLFW", "GLSL", "CMake", "Midpoint Algorithms"],

      description:
        "A 2D shooter game developed in C++ and OpenGL for a computer graphics course. \
        The game features arcade-style mechanics, including projectile-based combat, \
        collision detection, and real-time scoring. All visuals are rendered using midpoint \
        line and circle algorithms with GL_POINTS, showcasing low-level control over graphics \
        pipeline and custom shader integration."


    },
    {
      id: 3,
      feature: {status: true, rank: 1},
      status: "Completed",
      type: "Computer Graphics",

      date: "December, 2024",
      start: "13-12-2024",
      end: "27-12-2024",
      collabType: "Solo",

      title: "Tetrix - A Minimalist Tetris Game in OpenGL",
      github: "https://github.com/mahrjose/Tetrix",
      demo: "",

      language: "C++",
      tech: ["C++", "OpenGL", "GLEW", "GLFW", "GL_POINTS"],

      description:
        "A Tetris-inspired puzzle game developed with legacy OpenGL and rendered entirely \
        using GL_POINTS. Built under a tight academic deadline, Tetrix implements classic \
        falling-block mechanics, real-time controls, line-clearing logic, and randomized \
        power-ups and traps — all without relying on modern shader pipelines. It demonstrates \
        deep control over graphical rendering in a minimalist setup."

    },
    {
      id: 4,
      feature: {status: true, rank: 3},
      status: "Completed",
      type: "Machine Learning",

      date: "August, 2023",
      start: "09-08-2023",
      end: "23-08-2023",
      collabType: "Team",

      title: "Machine Learning Based Intrusion Detection System",
      github: "https://github.com/Mahrjose/NIDS-Machine-Learning",
      demo: "",

      language: "Python",
      tech: ["Python", "scikit-learn", "NumPy", "pandas", "NSL-KDD Dataset"],

      description:
        "A machine learning-based intrusion detection system (NIDS) that analyzes network \
        traffic using supervised classifiers like Random Forest, SVM, KNN, and Logistic \
        Regression. Built for a university AI course, the system uses the NSL-KDD dataset \
        to detect anomalies and evaluates performance using precision, recall, and F1 scores. \
        Includes preprocessing, feature engineering, and model comparison for practical insight."

    },
    {
      id: 5,
      feature: {status: false, rank: 0},
      status: "Completed",
      type: "Automation",

      date: "March, 2022",
      start: "15-02-2022",
      end: "03-03-2022",
      collabType: "Solo",

      title: "Discord News Bot - RSS and API-Based Content Scraper",
      github: "https://github.com/Mahrjose/Illimitable-Bot",
      demo: "",

      language: "Python",
      tech: ["Python", "discord.py", "RSS", "IMDb API", "MyAnimeList API", "Reddit API"],

      description:
        "A modular Discord bot built with Python that aggregates and pushes news from RSS \
        feeds and public APIs such as IMDb, MyAnimeList, and Reddit. Designed to automate \
        news delivery in Discord servers, it features real-time alerts, topic filtering, and \
        support for multiple channels. Useful for anime, tech, and media communities."
    },
    {
      id: 6,
      feature: {status: false, rank: 0},
      status: "On Hold",
      type: "Linux Customization",

      date: "August, 2024",
      start: "24-08-2024",
      end: "",
      collabType: "Solo",

      title: "NyxDE - A Custom Riced Desktop Environment for Linux",
      github: "https://github.com/Mahrjose/nyxdots",
      demo: "",

      tech: ["Bash", "Arch Linux", "Hyprland", "Wayland", "Waybar", "GRUB", "Shell Scripting"],

      description:
        "A fully customized Linux desktop environment inspired by ricing culture, built on \
        Arch Linux with Hyprland, Waybar, and custom shell scripts. NyxDE integrates modular \
        themes, dynamic modes, and productivity tools to create a personalized and minimalist \
        workflow. It reflects both aesthetic customization and practical efficiency, with \
        attention to scripting, startup automation, and window management."
    },
  ],

  blog: [
    {
      id: 1,
      title: "Building Production-Ready ML Models: Best Practices and Pitfalls",
      excerpt:
        "A comprehensive guide to deploying machine learning models in production, covering everything from model validation to monitoring and maintenance.",
      date: "2024-01-15",
      readTime: "12 min read",
      tags: ["Machine Learning", "MLOps", "Production", "Best Practices"],
      url: "https://blog.example.com/production-ml",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop",
      summary:
        "This post covers the essential practices for taking ML models from development to production, including model versioning, A/B testing, and performance monitoring.",
    },
    {
      id: 2,
      title: "Deep Dive into Transformer Architecture for NLP",
      excerpt:
        "Understanding the transformer architecture and its applications in natural language processing, from BERT to GPT and beyond.",
      date: "2024-01-08",
      readTime: "15 min read",
      tags: ["Deep Learning", "NLP", "Transformers", "AI"],
      url: "https://blog.example.com/transformers-nlp",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop",
      summary:
        "An in-depth exploration of transformer models, attention mechanisms, and their revolutionary impact on natural language processing tasks.",
    },
    {
      id: 3,
      title: "Computer Vision in Edge Computing: Optimization Strategies",
      excerpt:
        "Techniques for deploying computer vision models on edge devices, including model compression, quantization, and hardware acceleration.",
      date: "2023-12-20",
      readTime: "10 min read",
      tags: ["Computer Vision", "Edge Computing", "Optimization", "Deployment"],
      url: "https://blog.example.com/cv-edge-computing",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop",
      summary:
        "Learn how to optimize computer vision models for edge deployment using various compression techniques and hardware acceleration methods.",
    },
  ],

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
    employedMessage: "While I'm currently employed full-time, I'm always open to discussing interesting AI projects, research collaborations, or speaking opportunities.",

    // When looking
    lookingMessage: {
      summary: "Currently seeking new opportunities in AI engineering and machine learning research.",
      interest: "I'm particularly interested in roles involving computer vision, NLP, and MLOps. I'm open to full-time positions, consulting engagements, and interesting collaborative projects that push the boundaries of AI technology."
    }
  },

  resume: {
    summary:
      "Dynamic AI Engineer with hands-on experience building innovative AI-driven applications and custom AI agent \
      frameworks from the ground up. Adept at integrating OpenAI, Gemini, and other LLM APIs to enhance application \
      capabilities, complemented by strong skills in scripting, codebase optimization, and system architecture design. \
      Proficient in Python, C++, OpenGL, and game engine development, with deep expertise in Linux (Arch) and modern \
      software tools. Proven ability to deliver impactful solutions in fast-paced environments, collaborating effectively \
      on cross-functional projects during an AI engineering roles.",

    summaryMetrics: [
      { label: "Years Experience", value: "1+" },
      { label: "Projects Completed", value: "5+" },
      { label: "Certifications", value: "2" }
    ],

    downloadOptions: [
      {
        type: "main",
        title: "Download Resume",
        url: "/documents/cv/main-cv.pdf",
        filename: "Mirza_Mahrab_Hossain_CV.pdf"
      },
      {
        type: "role",
        title: "AI Engineer Resume",
        url: "/documents/cv/resume-ai.pdf",
        filename: "Mirza_Mahrab_Hossain_AI_Engineer_CV.pdf"
      },
      {
        type: "role",
        title: "Academic Resume",
        url: "/documents/cv/resume-academic.pdf",
        filename: "Mirza_Mahrab_Hossain_Academic_CV.pdf"
      },
      {
        type: "role",
        title: "Software Engineer Resume",
        url: "/documents/cv/resume-ml.pdf",
        filename: "Mirza_Mahrab_Hossain_Software_Engineer_CV.pdf"
      }
    ],


    experience: [
      {
        company: "Pipeline Inc.",
        website: "https://www.ppln.co/en",
        linkedin: "https://www.linkedin.com/company/ppln-co",
        location: "Dhaka, Bangladesh",
        logo: "/images/logo/company-logo.jpg",
        employmentType: "Internship",
        roles: [
          {
            position: "AI Engineer Intern",
            duration: "Feb 2025 – Present",
            description: 
              "As an AI Engineer Intern at Pipeline Inc., I’ve had the opportunity to work on impactful real-world projects\
              while learning directly from experienced engineers and researchers. This role has allowed me to explore system\
              design from the ground up, contribute to in-house AI and security tools, and take ownership of key features\
              in ongoing development cycles. Beyond coding, I’ve grown in architectural thinking, problem-solving, \
              and understanding how AI systems integrate into larger infrastructures—especially in the context of \
              automation and cybersecurity",
            achievements: [
              "Designed and built a modular AI agent framework from scratch, featuring pluggable components for LLMs, memory backends, tools, and injectable prompting, allowing flexible and dynamic configuration for a variety of use cases.",
              "Developed a self-reflective reasoning loop to enable iterative decision-making and intelligent tool usage, enhancing the agent's ability to handle complex tasks autonomously.",
              "Gained practical experience in system and architecture design by building the framework from the ground up, with a focus on extensibility, maintainability, and long-term adaptability.",
              "Assisted in enhancing internal security products, including SIEM-like systems and endpoint scanners, by integrating AI components to automate tasks, handle edge cases, and intelligently process data where traditional APIs were insufficient.",
              "Diagnosed and resolved bugs in the PDF generation pipeline used across reporting tools, improving formatting consistency, error resilience, and maintainability.",
              "Conducted R&D on emerging tools and technologies in AI and cybersecurity, gaining exposure to practical trends and real-world applications.",
            ],
            technologies: ["Python", "AI Agents", "OpenAI", "Gemini", "Langchain", "GuardRails"]
          },
        ]
      },

    ],

    skills: [
      {
        category: "Programming Languages",
        core: ["Python", "C", "C++", "Bash", "SQL"],
        familiar: ["C#", "Java", "TypeScript", "Go", "Rust"],
      },
      {
        category: "Databases",
        core: ["Redis", "PostgreSQL"],
        familiar: ["MySQL","MongoDB", "FAISS", "Qdrant"],
      },
      {
        category: "DevOps",
        core: ["Docker", "Arch Linux", "CI/CD", "Systemd"],
        familiar: ["VMware", "Vagrant", "Ansible"]
      },
      {
        category: "Security",
        core: ["Nmap", "Burp Suite", "Wireshark", "Fail2Ban"],
        familiar: ["Metasploit", "OSINT", "Lynis", "iptables"]
      },
      {
        category: "Web Development",
        core: ["TypeScript", "Node.js", "Express.js", "Spring Boot", ".NET"],
        familiar: ["React","Next.js", "Tailwind CSS", "Django", "OpenAPI"],
      },
      {
        category: "Tools",
        core: ["Git", "VScode", "Jupyter", "Neovim", "Alacritty" , "OLlama"],
        familiar: [],
      },
      {
        category: "Machine Learning",
        core: ["PyTorch", "CUDA", "scikit-learn", "OpenCV",  "NumPy", "Pandas",],
        familiar: []
      },
      {
        category: "LLMs & Retrieval Systems",
        core: ["Transformers", "Hugging Face", "LangChain", "LlamaIndex", "Axolotl", "OpenAI", "Gemini", "Mistral"],
        familiar: []
      },
      {
        category: "AI Agents & Systems",
        core: ["LangGraph", "AutoGen", "Semantic Kernel", "Guardrails AI", "AutoGPT"],
        familiar: [],
      },
      {
        category: "MLOps & Inference",
        core: ["FastAPI", "WebSockets", "Docker", "ONNX Runtime","TorchServe","BentoML","MLflow",],
        familiar: [],
      }
    ],

    certifications: [
      {
        name: "Python (Basic)",
        issuer: "HackeRrank",
        date: "June 2025",
        url: "https://www.hackerrank.com/certificates/e0f98a2b0443",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/960px-HackerRank_Icon-1000px.png"
      },
      // {
      //   name: "AWS Certified Machine Learning - Specialty",
      //   issuer: "Amazon Web Services",
      //   date: "2023",
      //   url: "https://aws.amazon.com",
      // },
      // {
      //   name: "TensorFlow Developer Certificate",
      //   issuer: "Google",
      //   date: "2022",
      //   url: "https://tensorflow.org",
      // },
      // {
      //   name: "Deep Learning Specialization",
      //   issuer: "Coursera",
      //   date: "2023",
      //   url: "https://coursera.org",
      // },
      // {
      //   name: "Microsoft Azure AI Engineer Associate",
      //   issuer: "Microsoft",
      //   date: "2023",
      //   url: "https://microsoft.com",
      // },
      // {
      //   name: "Kubernetes Application Developer (CKAD)",
      //   issuer: "Cloud Native Computing Foundation",
      //   date: "2023",
      //   url: "https://cncf.io",
      // },
      {
        name: "Professional Data Engineer",
        issuer: "Google Cloud",
        date: "2022",
        url: "https://cloud.google.com",
      },
    ],

    languages: [
      { name: "Bangla", level: "Native" },
      { name: "English", level: "Fluent" },
      { name: "Hindi", level: "Conversational" },
    ],

    awards: [
      {
        name: "Ranked 392nd – PatriotCTF 2024",
        organization: "George Mason University",
        year: "2024",
        url: "https://media.licdn.com/dms/image/v2/D562DAQEs7uYN9L7o4Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729790906710?e=1750194000&v=beta&t=ZzrYhOc7z0qPWWBf0jtNH7RYDdGnzdP0CnBLDzp_REQ"
      },
      { 
        name: "Outstanding Performance", 
        organization: "Pipeline Inc.", 
        year: "2025", 
        url: "" 
      },
    ],

    achievements : [
      "Solved 5+ LeetCode problems",
      "Reached Codeforces Newbie rank",
      "Ranked top 3% in HackerRank Python skill",
    ],  

    profileLinks : [
      { name: "LeetCode", url: "https://leetcode.com/u/Mahrjose/" },
      { name: "Codeforces", url: "https://codeforces.com/profile/Mahrjose" },
      { name: "HackerRank", url: "https://www.hackerrank.com/profile/Mahrjose" },
      { name: "HackerEarth", url: "https://www.hackerearth.com/@Mahrjose" },
      { name: "picoCTF", url: "https://play.picoctf.org/users/Mahrjose"}
    ],

  },

  education: {
    formal: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "BRAC University",
        location: "Dhaka, Bangladesh",
        duration: "Feb, 2021 - June, 2025",
        gpa: "3.7",
        status: "In Progress", // or Graduated

        relevantCourses: [
          { title: "Data Structures", url: "https://github.com/mahrjose/BRACU-CSE220" },
          { title: "Algorithms", url: "https://github.com/mahrjose/BRACU-CSE221" },
          { title: "Database Systems", url: "https://github.com/mahrjose/BRACU-CSE370" },
          { title: "Computer Graphics", url: "https://github.com/mahrjose/BRACU-CSE423" },
          { title: "Software Engineering", url: "" },
          { title: "Linear Algebra", url: "" },
          { title: "Ethical Hacking", url: "" },
          { title: "Operating Systems", url: "https://github.com/mahrjose/BRACU-CSE321" },
          { title: "Graph Theory", url: "" },
          { title: "System Design", url: "" }
        ],

        thesis: {
          title: "Analysis and Qualitative Effects of Large Breasts on Aerodynamic Performance and Wake of a anime Character",
          supervisor: "Dr. Jannatun Noor Mukta",
          publicationUrl: "https://www.researchgate.net/publication/322530755_Analysis_and_Qualitative_Effects_of_Large_Breasts_on_Aerodynamic_Performance_and_Wake_of_a_Miss_Kobayashi%27s_Dragon_Maid_Character",
          publisher: "Research Gate",
          keywords:   ["Aerodynamics", "CFD", "RANS", "Turbulence", "Wakeflow", "simulation"]
        },

        highlights: [
          "Consistent high-performer with 4 semesters scoring GPA 3.9+",
          "Undergraduate thesis under C2SG Research Lab",
          "Participated in ICPC and university-level programming contests",
          "Strong foundation in core CS subjects through project-based learning"
        ],
        extracurriculars: [
          "Senior Executive Member, BRACU Computer Club (BUCC)",
          "Panel Member, IEEE Student Branch (BRACU Chapter)",
          "Active participant in competitive programming during undergrad",
          "Volunteered in tech events and university club activities"
        ]

      },
    ],
    online: [
      // {
      //   title: "Deep Learning Specialization",
      //   provider: "Coursera (Andrew Ng)",
      //   completed: "2023",
      //   duration: "60 hours",
      //   description:
      //     "Comprehensive deep learning course covering neural networks, CNNs, RNNs, and advanced architectures.",
      //   skills: ["Deep Learning", "Neural Networks", "TensorFlow", "Computer Vision"],
      //   certificate: "https://coursera.org/verify/specialization/ABC123",
      //   link: "https://www.coursera.org/specializations/deep-learning",
      //   project: ""
      // },
      // {
      //   title: "MLOps Engineering",
      //   provider: "Udacity",
      //   completed: "2022",
      //   duration: "80 hours",
      //   description:
      //     "End-to-end machine learning operations including model deployment, monitoring, and CI/CD for ML systems.",
      //   skills: ["MLOps", "Model Deployment", "Monitoring", "CI/CD"],
      //   certificate: "https://udacity.com/certificate/XYZ789",
      //   link: "https://www.udacity.com/course/machine-learning-dev-ops-engineer-nanodegree--nd0821",
      //   project: ""
      // },
      {
        title: "Essence of Linear Algebra",
        provider: "3Blue1Brown (YouTube)",
        completed: "2024",
        duration: "12 hours",
        description: "A visually intuitive YouTube series by 3Blue1Brown that explains core linear algebra concepts such as vectors, matrices, determinants, and eigenvalues, providing a strong mathematical foundation for deep learning and machine learning applications.",
        skills: ["Linear Algebra", "Mathematics for Machine Learning", "Vector Spaces", "Matrix Transformations"],
        certificate: null,
        link: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
        project: ""
      },
      // {
      //   title: "AI Agents for Beginners",
      //   provider: "Microsoft (GitHub)",
      //   completed: "2024",
      //   duration: "25 hours",
      //   description: "A comprehensive GitHub course with 11 lessons, including video lectures, written materials, and Python code samples, covering the fundamentals of building AI agents using Azure AI Foundry, GitHub Models, and frameworks like AutoGen and Semantic Kernel.",
      //   skills: ["AI Agents", "Generative AI", "Python", "Azure AI Foundry", "AutoGen", "Semantic Kernel"],
      //   certificate: null,
      //   link: "https://github.com/microsoft/ai-agents-for-beginners",
      //   project: ""
      // }
      {
        title: "Foundations of Blockchains",
        provider: "Tim Roughgarden (YouTube)",
        completed: "2025",
        duration: "35 hours",
        description: "A comprehensive YouTube lecture series by Tim Roughgarden, a Columbia University professor, that explores the science and technology of blockchain protocols, covering topics like classical consensus, permissionless consensus, and proof-of-stake mechanisms, providing a deep understanding of blockchain fundamentals.",
        skills: ["Blockchain Technology", "Distributed Consensus", "Cryptography", "Algorithmic Game Theory"],
        certificate: null,
        link: "https://www.youtube.com/playlist?list=PLEGCF-WLh2RLOHv_xUGLqRts_9JxrckiA",
        project: ""
      }
  
    ],
  },

  research: {
    publications: [
        {
        title: "Analysis and Qualitative Effects of Large Breasts on Aerodynamic Performance ",
        year: "2018",
        type: "Thesis",
        host: "",
        coAuthors: ["Nihal Islam","Noushin Tabassum"],
        supervisor: "Dr. Jannatun Noor Mukta",
        abstract: "A computational fluid dynamics methodology is used to study the salient flow features around the breasts of a human figure and to describe the aerodynamic differences imparted by their geometric presence. Two models are proposed for examination: a 3-dimensional reference based on a character design with a significantly buxom figure and a modification of this design where the breast size is reduced significantly. The two models are tested at speeds ranging from 1 to 30 m⋅s^-1 using Reynolds-averaged Navier Stokes (RANS). Drag, lift, and skin friction forces, along with turbulence kinetic energy (TKE), are investigated and compared between the different models. The present results are expected to provide useful information on the validity of the statement, 'Flat is Justice' in terms of an aerodynamic standpoint. In addition to this, the results can offer worthwhile data investigating the anthropometrical presence of large breasts on sport aerodynamics.",
        keywords: ["Aerodynamics", "CFD", "RANS", "Turbulence", "Wakeflow", "simulation"],
        link: "https://www.researchgate.net/publication/322530755_Analysis_and_Qualitative_Effects_of_Large_Breasts_on_Aerodynamic_Performance_and_Wake_of_a_Miss_Kobayashi%27s_Dragon_Maid_Character",
      },

    ],

    researchProjects: [
      // {
      //   title: "Bias Evaluation in Vision Transformers",
      //   focus: "NLP",
      //   description:
      //     "Studied bias patterns in ViT models using synthetic and real datasets, tested fairness metrics.",
      //   timeline: "2024",
      //   status: "Completed",
      //   supervisor: "Dr. Elina Ray",
      //   collaborators: [],
      //   methods: ["Synthetic Datasets", "Fairness Metrics", "Vision Transformers"],
      //   paperLink: "https://example.com/paper",
      //   codeLink: "https://github.com/yourname/bias-vit",
      //   demoLink: "https://render.com/something",
      // },
      {
        title: "Sentiment Analysis of Social Media Data",
        focus: "NLP",
        description:
          "Conducted a sentiment analysis project on a dataset of social media posts \
          (e.g., Twitter or Reddit) related to a specific topic. Utilized basic NLP \
          techniques to classify sentiment (positive, negative, neutral) and visualize \
          trends. This project served as an introduction to data collection, text preprocessing, \
          and basic machine learning model application.",
        timeline: "July 2025",
        status: "In Progress",
        supervisor: "",
        collaborators: [],
        methods: ["NLP", "Text Preprocessing", "Supervised Learning", "Data Visualization"],
        paperLink: "",
        codeLink: "https://github.com/yourname/sentiment-analysis-basics", // Placeholder
        demoLink: "",
      },
    ],
    
    blogs: [
      {
        id: 1,
        title: "Interpreting Vision Models: Why GradCAM Still Fails",
        summary: "A critique on attention-based interpretability techniques and a hypothesis on feature entanglement in deep CNNs.",
        date: "June 2025",
        readTime: "4 min read",
        tags: ["Interpretability", "Computer Vision", "Critique"],
        link: "/blog/gradcam-entanglement"
      },
      {
        id: 2,
        title: "Recreating a Paper on Adversarial Examples in Transformers",
        summary: "I followed a recent adversarial attack paper to understand how positional encoding vulnerabilities arise in ViT.",
        date: "May 2025",
        readTime: "6 min read",
        tags: ["Transformers", "Security", "Experiment Log"],
        link: "/blog/vit-attack-recreation"
      }
    ]
    
  },

  contact: {
    email: meta.email,
    phone: meta.phone,
    location: meta.location,
    availability: "Available for AI consulting and full-time opportunities",
    responseTime: "I typically respond to emails within 24 hours during business days.",
    social: {
      linkedin: meta.social.linkedin,
      github: meta.social.github,
      facebook: meta.social.facebook,
      twitter: meta.social.twitter,
      reddit: meta.social.reddit,
      discord: meta.social.reddit // Fix
    },
  },

}
