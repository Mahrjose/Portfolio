export const projects = [
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
]
