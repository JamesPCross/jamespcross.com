// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed publications in political science, EU politics, and computational methods.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research projects in computational political science, EU politics, and parliamentary transparency.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Academic CV of Dr. James P. Cross, Associate Professor of Political Science at University College Dublin.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-coalesce-un-sustainability-goals-in-the-eu",
          title: 'COALESCE: UN Sustainability Goals in the EU',
          description: "A Research Ireland funded project studying how the UN Sustainable Development Goals are translated into actionable policy through EU committee debates and policymaking processes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/coalesce/";
            },},{id: "projects-connected-politics-lab",
          title: 'Connected_Politics Lab',
          description: "An interdisciplinary computational social science research hub at University College Dublin, combining political science with cutting-edge data science methods.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/connected_politics/";
            },},{id: "projects-euandi-voter-advice-application",
          title: 'EUandI Voter Advice Application',
          description: "A voter advice application helping citizens match their policy preferences with political parties, reaching 3.5 million views in the 2024 European Parliament elections.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/euandi/";
            },},{id: "projects-parliview",
          title: 'ParliView',
          description: "An AI-driven parliamentary transparency tool funded by a Google.org grant (EUR 1.5m), making parliamentary debates accessible through automated transcription and analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/parliview/";
            },},{id: "teachings-digital-politics-amp-data-science",
          title: 'Digital Politics &amp;amp; Data Science',
          description: "MSc programme founded in 2019, integrating computational methods with political science research and analysis.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/digital-politics-data-science/";
            },},{id: "teachings-eu-politics",
          title: 'EU Politics',
          description: "Undergraduate and graduate course on European Union politics, covering institutions, decision-making, and policy processes.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/eu-politics/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cross_cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%61%6D%65%73.%63%72%6F%73%73@%75%63%64.%69%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jamespcross", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-8042-1099", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Tx3mu9kAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
