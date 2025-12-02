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
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-sketch",
          title: "sketch",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/sketch/";
          },
        },{id: "post-information-facilitates-diffusion-from-a-new-perspective-mind-the-gap",
        
          title: "Information Facilitates Diffusion from a New Perspective - Mind the Gap!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/sidebar-table-of-contents/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-information-theoretic-diffusion-has-been-accepted-as-a-poster-at-iclr-2023-it-means-a-lot-to-me-because-it-s-my-first-paper-appears-on-the-top-tier-ml-conference-big-thanks-to-greg-and-rob",
          title: 'Our paper Information-Theoretic Diffusion has been accepted as a poster at ICLR 2023!...',
          description: "",
          section: "News",},{id: "news-i-attend-socalnlp-2023-to-present-information-theoretic-diffusion-model-and-its-applications-interpretable-diffusion-via-information-decomposition",
          title: 'I attend SoCalNLP 2023 to present Information-Theoretic Diffusion model and its applications: Interpretable...',
          description: "",
          section: "News",},{id: "news-our-paper-interpretable-diffusion-via-information-decomposition-has-been-accepted-as-a-poster-at-iclr-2024-it-s-a-great-experience-to-collaborate-with-oliver-and-dani",
          title: 'Our paper Interpretable Diffusion via Information Decomposition has been accepted as a poster...',
          description: "",
          section: "News",},{id: "news-i-finished-my-internship-about-accelerating-stable-diffusion-training-at-sonyai-and-am-going-to-join-adobe-firefly-this-summer",
          title: 'I finished my internship about accelerating Stable Diffusion training at SonyAI, and am...',
          description: "",
          section: "News",},{id: "news-training-diffusion-models-within-2000-8xh100-in-only-3-days-stretching-each-dollar-diffusion-training-from-scratch-on-a-micro-budget-thanks-to-my-mentor-vikash-at-sonyai",
          title: '🔥💸 Training Diffusion Models within $2000 (8xH100) in only 3 days! Stretching Each...',
          description: "",
          section: "News",},{id: "news-time-has-flown-by-this-summer-at-adobe-i-had-the-pleasure-of-meeting-so-many-wonderful-people-and-i-will-miss-you-all-however-my-journey-with-adobe-isn-t-over-yet-i-m-excited-to-continue-working-with-adobe-firefly-to-push-the-boundaries-of-diffusion-models",
          title: 'Time has flown by! This summer at Adobe, I had the pleasure of...',
          description: "",
          section: "News",},{id: "news-i-have-been-invited-to-the-advancing-ai-2024-event-by-amd-on-october-10th-️-if-you-ll-be-in-san-francisco-i-d-love-to-grab-a-coffee-️-or-explore-some-great-food-together",
          title: 'I have been invited to the Advancing AI 2024 event by AMD on...',
          description: "",
          section: "News",},{id: "news-thrilled-to-share-a-new-milestone-in-my-academic-journey-i-successfully-passed-my-dissertation-proposal-exam",
          title: 'Thrilled to share a new milestone in my academic journey: I successfully passed...',
          description: "",
          section: "News",},{id: "news-the-paper-stretching-each-dollar-diffusion-training-from-scratch-on-a-micro-budget-has-been-accepted-to-cvpr-2025-looking-forward-to-sharing-our-work-with-the-community",
          title: 'The paper Stretching Each Dollar: Diffusion Training from Scratch on a Micro-Budget has...',
          description: "",
          section: "News",},{id: "news-i-am-honored-to-receive-the-dissertation-completion-fellowship-award-from-ucr",
          title: 'I am honored to receive the Dissertation Completion Fellowship Award from UCR! 🎉...',
          description: "",
          section: "News",},{id: "news-i-delivered-a-20-minute-presentation-at-socams-had-the-pleasure-of-attending-many-insightful-talks-and-came-away-convinced-that-the-real-agi-still-has-a-way-to-go",
          title: 'I delivered a 20-minute presentation at SOCAMS ☕, had the pleasure of attending...',
          description: "",
          section: "News",},{id: "news-flying-to-nashville-for-cvpr-2025-and-celebrating-my-birthday-for-the-first-time-over-30-000-feet-in-the-air",
          title: 'Flying to Nashville for CVPR 2025 and celebrating my birthday for the first...',
          description: "",
          section: "News",},{id: "news-phd-defense-complete-doctor-status-unlocked",
          title: 'PhD defense complete!! Doctor status unlocked 🍻',
          description: "",
          section: "News",},{id: "news-i-m-excited-to-share-that-i-ve-started-a-new-role-as-a-video-genai-researcher-at-bayarea-where-work-with-emmy-winners-to-explore-genai-powered-filmmaking-workflows-that-incorporate-real-actors-looking-forward-to-this-journey-and-the-creative-possibilities-ahead",
          title: 'I’m excited to share that I’ve started a new role as a Video...',
          description: "",
          section: "News",},{id: "news-i-reunited-with-michael-to-create-a-2-minute-30-second-horror-sci-fi-short-film-dreamcatcher-hotel-watch-it-now-and-leave-likes-or-comments",
          title: 'I reunited with Michael to create a 2-minute-30-second horror sci-fi short film, Dreamcatcher...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%6B%6F%6E%67%30%31%36@%75%63%72.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kxh001", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/xianghao-theo-k-5ba559172", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=IMxyo-YAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/xk_theo7", "_blank");
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
