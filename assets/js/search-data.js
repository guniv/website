// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-home",
              title: "Home",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/";
              },
            },{id: "dropdown-hobbies",
              title: "Hobbies",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/hobbies/";
              },
            },{id: "dropdown-writing",
              title: "Writing",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/portfolio/writing/";
              },
            },{id: "dropdown-projects",
              title: "Projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/portfolio/projects/";
              },
            },{id: "dropdown-awards",
              title: "Awards",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/portfolio/awards/";
              },
            },{id: "nav-résumé",
          title: "Résumé",
          description: "My résumé.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "hobbies-gaming",
          title: 'Gaming',
          description: "I have been gaming for a long time. (I&#39;m about six or seven years old in the attached photo.)",
          section: "Hobbies",handler: () => {
              window.location.href = "/hobbies/Gaming.html";
            },},{id: "hobbies-computing",
          title: 'Computing',
          description: "I enjoy building and maintaining servers at my home, mainly for gaming.",
          section: "Hobbies",handler: () => {
              window.location.href = "/hobbies/Computing.html";
            },},{id: "hobbies-smart-home",
          title: 'Smart home',
          description: "I use Home Assistant to automate and track many parts of my home.",
          section: "Hobbies",handler: () => {
              window.location.href = "/hobbies/Smart%20home.html";
            },},{id: "hobbies-my-servers",
          title: 'My servers',
          description: "I have two servers at my home running the Unraid operating system that I use to self-host a variety of apps and services. One of the systems is a storage server with 22 terabytes of storage, and the other is a simple mini PC.",
          section: "Hobbies",handler: () => {
              window.location.href = "/hobbies/My%20servers.html";
            },},{id: "portfolio-2014-rise-to-the-challenge-winner",
          title: '2014 Rise to the Challenge Winner',
          description: "In high school, I was one of three winners in 2014 of the State Collaborative for Reform in Education (SCORE) Rise to the Challenge competition. For the competition, I created a video highlighting the innovative ways my high school was preparing students for college and careers.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/awards/2014%20Rise%20to%20the%20Challenge%20Winner.html";
            },},{id: "portfolio-l-amp-n-stempunks-website",
          title: 'L&amp;amp;N STEMpunks Website',
          description: "I designed most of this website while in high school for my high school robotics team. Another student built the basics, and I used basic HTML and CSS knowledge to add features and content.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/projects/L&N%20STEMpunks%20Website.html";
            },},{id: "portfolio-2016-media-and-technology-award-sponsored-by-comcast-nbcuniversal",
          title: '2016 Media and Technology Award sponsored by Comcast NBCUniversal',
          description: "My high school robotics team, the L&amp;N STEMpunks, was chosen for the 2016 Media &amp; Technology Award out of 3,000 teams. I established the team’s media presence as a student and was a mentor when we won the award.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/awards/2016%20Media%20and%20Technology%20Award.html";
            },},{id: "portfolio-a-visit-to-maple-hall-downtown-knoxville-s-basement-bowling-alley",
          title: 'A Visit to Maple Hall, Downtown Knoxville’s Basement Bowling Alley',
          description: "A blog post about downtown Knoxville’s new bowling alley that I wrote for the Knoxville Mercury while I was an intern there in the summer of 2016.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/A%20Visit%20to%20Maple%20Hall.html";
            },},{id: "portfolio-new-biz-roundup-fountains-go-karts-tacos",
          title: 'New Biz Roundup: Fountains, Go-Karts, Tacos',
          description: "A blog post about new business openings I wrote for the Knoxville Mercury while I was an intern there in the summer of 2016.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/New%20Biz%20Roundup.html";
            },},{id: "portfolio-secretary-of-education-john-king-to-visit-knoxville",
          title: 'Secretary of Education John King To Visit Knoxville',
          description: "A blog post about an upcoming event that I wrote for the Knoxville Mercury while I was an intern there in the summer of 2016.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Secretary%20of%20Education.html";
            },},{id: "portfolio-smoky-mountains-regional-business-summit",
          title: 'Smoky Mountains Regional Business Summit',
          description: "The SMRBS is a small conference the L&amp;N STEMpunks hosted, and I was primarily in charge of organizing it in 2015 and 2016. I booked venues, made catering arrangements, and even marketed the conference to teams.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/projects/Smoky%20Mountains%20Regional%20Business%20Summit.html";
            },},{id: "portfolio-knox-makers-hosts-community-makerspace-in-south-knoxville",
          title: 'Knox Makers Hosts Community “Makerspace” in South Knoxville',
          description: "A blog post and interview about  Knoxville’s local maker space that I wrote for the Knoxville Mercury while I was an intern there in the summer of 2016.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Knox%20Makers.html";
            },},{id: "portfolio-knoxville-city-council-selects-tindell-for-general-election-breaking-tie",
          title: 'Knoxville City Council selects Tindell for general election, breaking tie',
          description: "An article I wrote in fall 2017 about local politics for a multimedia writing class at the University of Tennessee.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Knoxville%20City%20Council.html";
            },},{id: "portfolio-first-alumni-group-first-alumni-at-university-of-tennessee-knoxville",
          title: 'FIRST Alumni Group: FIRST Alumni at University of Tennessee Knoxville',
          description: "A quick article I was asked to write for FIRST about a club I started at the University of Tennessee.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/FIRST%20Alumni%20Group.html";
            },},{id: "portfolio-all-aboard-the-neutron-train-mapping-residual-stresses-for-more-robust-rails",
          title: 'All Aboard the Neutron Train: Mapping Residual Stresses for More Robust Rails',
          description: "An article I wrote during my internship with ORNL highlighting the use of neutrons in investigating residual stresses in rails.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/All%20Aboard%20the%20Neutron%20Train.html";
            },},{id: "portfolio-matthew-ryder-understanding-the-stability-of-next-generation-materials",
          title: 'Matthew Ryder: Understanding the Stability of Next-Generation Materials',
          description: "An article I wrote during my internship with ORNL profiling early-career researcher Matthew Ryder, who had recently been hired at the lab as a Shull Wollan Fellow.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Matthew%20Ryder.html";
            },},{id: "portfolio-3d-printed-collimators-for-neutron-scattering-enables-new-science-and-lowers-costs",
          title: '3D printed collimators for neutron scattering enables new science and lowers costs',
          description: "An article I wrote during my internship with ORNL highlighting the use of 3D printing to create improved collimators to be used in neutron scattering.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/3D%20printed%20collimators.html";
            },},{id: "portfolio-timken-turns-to-neutrons-to-get-its-bearings-on-internal-stresses",
          title: 'Timken turns to neutrons to get its bearings on internal stresses',
          description: "An article I wrote during my internship with ORNL highlighting the use of neutron scattering in analyzing and understanding residual stresses in industrial bearings.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Timken%20turns%20to%20neutrons.html";
            },},{id: "portfolio-neutron-micelle-measurements-lend-insights-into-improved-drug-delivery",
          title: 'Neutron micelle measurements lend insights into improved drug delivery',
          description: "An article I wrote during my internship with ORNL highlighting the use of neutron scattering in investigating small biological tools called micelles that are useful in drug delivery.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Neutron%20micelle%20measurements.html";
            },},{id: "portfolio-big-orange-robotics",
          title: 'Big Orange Robotics',
          description: "I founded and ran this Robot in 3 Days team. I organized sponsorships, selected members and leaders for the team, helped develop our visual brand identity, and handled our relationships with other teams and the University of Tennessee. We had a very successful season and built an impressive robot with limited resources.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/projects/Big%20Orange%20Robotics.html";
            },},{id: "portfolio-big-orange-robotics-videos",
          title: 'Big Orange Robotics Videos',
          description: "With limited time and resources, I worked with one other student to plan, record, and edit the video coverage of the Big Orange Robotics robot in 3 days team in 2019. All five of these videos were produced in a 72 hour time period and received thousands of views.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/projects/Big%20Orange%20Robotics%20Videos.html";
            },},{id: "portfolio-big-orange-robotics-website",
          title: 'Big Orange Robotics Website',
          description: "I put together the website for Big Orange Robotics using Squarespace as well as some custom HTML and CSS.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/projects/Big%20Orange%20Robotics%20Website.html";
            },},{id: "portfolio-researching-cleaner-more-efficient-bioenergy-production-using-neutrons",
          title: 'Researching cleaner, more efficient bioenergy production using neutrons',
          description: "An article I wrote during my internship with ORNL highlighting the use of neutron scattering in analyzing how different biofuels pyrolyze.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Researching%20cleaner%20more%20efficient.html";
            },},{id: "portfolio-neutrons-fueling-better-power",
          title: 'Neutrons—Fueling better power',
          description: "A short story tip I wrote during my internship with ORNL highlighting the use of neutron scattering in investigating improved fuel cell materials.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Neutrons%20fueling%20better%20power.html";
            },},{id: "portfolio-39-the-best-it-39-s-ever-been-39-analyzing-ut-39-s-relationship-with-knoxville-city-mayor",
          title: '&amp;#39;The best it&amp;#39;s ever been&amp;#39;: Analyzing UT&amp;#39;s relationship with Knoxville, city mayor',
          description: "An article I wrote for a feature writing class at the University of Tennessee investigating the relationship between the university and the city of Knoxville.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Analyzing%20UT's%20relationship.html";
            },},{id: "portfolio-neutrons-fighting-superbugs",
          title: 'Neutrons—Fighting superbugs',
          description: "A short story tip I wrote during my internship with ORNL highlighting the use of neutron scattering to investigate the use of a unique peptide in fighting superbugs.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Neutrons%20Fighting%20superbugs.html";
            },},{id: "portfolio-scientists-at-ess-swedish-water-research-ornl-use-vision-to-look-at-common-contaminant-for-cleaner-water-applications",
          title: 'Scientists at ESS, Swedish Water Research, ORNL use VISION to look at common...',
          description: "An article I wrote during my internship with ORNL highlighting the use of neutron scattering in investigating water filtration methods.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Scientists%20at%20ESS%20Swedish%20Water%20Research.html";
            },},{id: "portfolio-ut-alumnus-nicholas-bashore-turns-gaming-hobby-into-a-career",
          title: 'UT alumnus Nicholas Bashore turns gaming hobby into a career',
          description: "An article I wrote for a feature writing class at the University of Tennessee profiling alumnus Nicholas Bashore, who is now a community manager at Skillshot Media.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/UT%20alumnus%20Nicholas%20Bashore.html";
            },},{id: "portfolio-staff-profile-gary-peterman",
          title: 'Staff Profile: Gary Peterman',
          description: "An article I wrote for a feature writing class at the University of Tennessee profiling Gary Peterman, a now-retired advisor with the College of Communication and Information.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Staff%20Profile%20Gary%20Peterman.html";
            },},{id: "portfolio-neutrons-allow-analysis-of-polymer-gels-unusual-attributes",
          title: 'Neutrons allow analysis of polymer gels’ unusual attributes',
          description: "An article I wrote during my internship with ORNL highlighting the use of neutron scattering in investigating improving polymer gels.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Neutrons%20allow%20analysis%20of%20polymer%20gels.html";
            },},{id: "portfolio-guniv-net-2019-2025",
          title: 'guniv.net, 2019 - 2025',
          description: "My previous website was built using Squarespace as well as some modifications.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/projects/guniv.net%202019-2025.html";
            },},{id: "portfolio-inside-the-innovations",
          title: 'Inside the Innovations',
          description: "I helped conceptualize and execute this social media campaign at Oak Ridge National Laboratory. I made example posts to help visualize the format for the campaign, and also helped decide what the goal of the campaign should be. The campaign focused on highlighting lab staff who would not normally be showcased in other lab media. I personally interviewed five people for the project and put together the website and social media copy for all of the initial ten highlighted staff.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/projects/Inside%20the%20Innovations.html";
            },},{id: "portfolio-henger-design-sunsphere-pins-charity-drive",
          title: 'HenGer Design - Sunsphere pins charity drive',
          description: "I helped HenGer Design edit website copy, write social media posts, and with optimizing their website for social media. I also assisted with reaching out to local media, where they received coverage from multiple outlets for their charity drive. The charity drive raised over $1,300 for Knox Mobile Meals.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/projects/HenGer%20Design%20Sunsphere%20pins%20charity%20drive.html";
            },},{id: "portfolio-youth-skills-resilience-social-campaign",
          title: 'Youth Skills - Resilience social campaign',
          description: "I wrote copy for a social media campaign highlighting a new report that the non-profit had launched. I worked with the Twitter Ad Platform to schedule and promote the posts.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/projects/Youth%20Skills%20-%20Resilience%20social%20campaign.html";
            },},{id: "portfolio-social-media-cards-a-b-testing-system",
          title: 'Social media cards A/B testing system',
          description: "I pitched and then implemented a system for the non-profit organization Global Business Coalition for Education that allows for the creation of multiple social media cards that all send the user to the same webpage, allowing GBC-Ed to re-share the same content without it appearing “stale.” It also allows for A/B testing to find the most effective card layout.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/projects/Social%20Media%20cards%20AB%20testing%20system.html";
            },},{id: "portfolio-world-humanitarian-day-social-posts",
          title: 'World Humanitarian Day social posts',
          description: "I wrote social media copy and scheduled posts to celebrate the UN’s World Humanitarian Day in 2020. I helped with the development of video content to feature organizations around the world doing philanthropic work.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/projects/World%20Humanitarian%20Day%20social%20posts.html";
            },},{id: "portfolio-award-winning-tools-enable-agencies-to-efficiently-and-easily-analyze-surveillance-footage",
          title: 'Award-Winning Tools Enable Agencies to Efficiently and Easily Analyze Surveillance Footage',
          description: "An article I wrote for MIT Lincoln Laboratory. The Forensic Video Exploitation and Analysis (FOVEA) suite of tools, which won a 2020 R&amp;D 100 Award, allows investigators to focus on finding information rather than sorting through it, which can shorten investigations that would typically take days into just hours or even minutes.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Award-Winning%20Tools.html";
            },},{id: "portfolio-scout-creates-historic-marker-for-millstone-hill-radar-and-haystack-observatory",
          title: 'Scout creates historic marker for Millstone Hill Radar and Haystack Observatory',
          description: "A story I wrote for MIT Lincoln Laboratory. Carter Purple, a local Scout, created and installed a marker to commemorate the history of the MIT Haystack Observatory and Millstone Hill Radar site.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Scout%20creates%20historic%20marker.html";
            },},{id: "portfolio-hamed-okhravi-charts-a-vision-for-a-cybersecurity-moonshot",
          title: 'Hamed Okhravi charts a vision for a cybersecurity moonshot',
          description: "An article I wrote for MIT Lincoln Laboratory. An article featured in IEEE Security &amp; Privacy describes the Laboratory&#39;s approach to preventing cyber vulnerabilities.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Hamed%20Okhravi%20moonshot.html";
            },},{id: "portfolio-supercomputing-center-celebrates-fifth-anniversary",
          title: 'Supercomputing Center Celebrates Fifth Anniversary',
          description: "An article I wrote for MIT Lincoln Laboratory. The center&#39;s resources for interactive supercomputing and high-performance data analysis have been critical to R&amp;D programs at Lincoln Laboratory.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Supercomputing%20Center%20Anniversary.html";
            },},{id: "portfolio-hydra-zen-framework-makes-scientific-computing-easier-for-researchers",
          title: 'Hydra-zen Framework Makes Scientific Computing Easier for Researchers',
          description: "An article I wrote for MIT Lincoln Laboratory. Hydra-zen, an open-source framework developed at the Laboratory, aims to make scientific computing, like the computing done with the Laboratory’s supercomputing resources, easier by simplifying the configuration and documentation process for experiments.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Hydra-zen%20Framework.html";
            },},{id: "portfolio-covid-19-exposure-simulation-technology-is-transferred-to-the-cdc",
          title: 'COVID-19 exposure simulation technology is transferred to the CDC',
          description: "An article I wrote for MIT Lincoln Laboratory. SimAEN, a free online tool for simulating the spread of COVID-19, can help public health teams understand the impact of health protection measures in their communities.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/COVID-19%20exposure%20simulation.html";
            },},{id: "portfolio-lincoln-laboratory-celebrates-2022-women-39-s-history-month",
          title: 'Lincoln Laboratory celebrates 2022 Women&amp;#39;s History Month',
          description: "An article I wrote for MIT Lincoln Laboratory. The Lincoln Laboratory Women’s Network held events to celebrate Women’s History Month. A virtual event held in March highlighted the personal experiences of intersectional women at the Laboratory.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Lincoln%20Laboratory%202022%20Womens%20History.html";
            },},{id: "portfolio-mit-excellence-awards-recognize-five-from-lincoln-laboratory",
          title: 'MIT Excellence Awards recognize five from Lincoln Laboratory',
          description: "An article I wrote for MIT Lincoln Laboratory. Ryan Burrow, Ngaire Underhill, Curran Schiefelbein, Johnnie Woo, and Robert Boston were honored for their efforts in fulfilling MIT&#39;s goals, values, and mission.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/MIT%20Excellence%20Awards%20recognize%20five.html";
            },},{id: "portfolio-technology-helps-manage-flight-delays-through-severe-weather",
          title: 'Technology helps manage flight delays through severe weather',
          description: "An article I wrote for MIT Lincoln Laboratory. Developed in collaboration with the Federal Aviation Administration, the Traffic Flow Impact Tool uses a novel machine learning technique to predict weather impacts to airspace.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Technology%20helps%20manage%20flight%20delays.html";
            },},{id: "portfolio-new-method-3d-prints-glass-at-low-temperatures",
          title: 'New method 3D prints glass at low temperatures',
          description: "An article I wrote for MIT Lincoln Laboratory. The technique can allow glass structures to be directly deposited onto microelectronics.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/New%20method%203D%20prints%20glass.html";
            },},{id: "portfolio-lincoln-laboratory-is-recognized-for-60-years-of-service-at-kwajalein-atoll",
          title: 'Lincoln Laboratory is recognized for 60 years of service at Kwajalein Atoll',
          description: "An article I wrote for MIT Lincoln Laboratory. Lincoln Laboratory was recognized for 60 years of support of the Reagan Test Site at Kwajalein Atoll in the Marshall Islands.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Lincoln%20Laboratory%20is%20recognized.html";
            },},{id: "portfolio-award-winning-technology-prevents-aircraft-collisions",
          title: 'Award-winning technology prevents aircraft collisions',
          description: "An article I wrote for MIT Lincoln Laboratory. The ACAS X program, funded by the Federal Aviation Administration, brings collision avoidance capabilities to a range of air vehicle types.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Award-winning%20technology%20prevents%20aircraft%20collisions.html";
            },},{id: "portfolio-three-laboratory-staff-recognized-by-the-american-institute-of-aeronautics-and-astronautics",
          title: 'Three Laboratory staff recognized by the American Institute of Aeronautics and Astronautics',
          description: "An article I wrote for MIT Lincoln Laboratory. Two Laboratory staff members were elevated to Fellows by the American Institute of Aeronautics and Astronautics (AIAA) and another staff member received the International Cooperation Award.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Three%20Laboratory%20staff%20recognized.html";
            },},{id: "portfolio-lincoln-laboratory-partners-with-darpa-to-test-augmented-reality-assistance-systems",
          title: 'Lincoln Laboratory partners with DARPA to test augmented-reality assistance systems',
          description: "A story I wrote for MIT Lincoln Laboratory. The program is studying how assistive systems can help service members complete complex tasks in the field, such as battlefield medicine, helicopter co-piloting, and mechanical repair.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Lincoln%20Laboratory%20partners%20with%20DARPA.html";
            },},{id: "portfolio-predicting-earthquakes-by-monitoring-the-ionosphere",
          title: 'Predicting earthquakes by monitoring the ionosphere',
          description: "A story I wrote for MIT Lincoln Laboratory. A Laboratory project called QuakeCast uses machine learning to monitor the Earth&#39;s ionosphere for electron activity that may precede an earthquake.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Predicting%20earthquakes.html";
            },},{id: "portfolio-pnnl-celebrates-doe-justice-week-2023",
          title: 'PNNL Celebrates DOE Justice Week 2023',
          description: "A campaign I worked on at Pacific Northwest National Laboratory. I interviewed researchers and built out a webpage to highlight PNNL&#39;s efforts in environmental justice.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/projects/PNNL%20Justice%20Week%202023.html";
            },},{id: "portfolio-environmental-justice-pnnl",
          title: 'Environmental Justice @ PNNL',
          description: "At Pacific Northwest National Laboratory, I helped produce the quarterly Environmental Justice @ PNNL newsletter that provided updates on PNNL and the Department of Energy&#39;s work in this area including upcoming events and career opportunities.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Environmental%20Justice%20@%20PNNL.html";
            },},{id: "portfolio-north-american-energy-resilience-model",
          title: 'North American Energy Resilience Model',
          description: "At Pacific Northwest National Laboratory, I worked on marketing content and technical writing for the North American Energy Resilience Model, including building out content for the webpage on the Department of Energy website.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/projects/NAERM.html";
            },},{id: "portfolio-energy-storage-pnnl",
          title: 'Energy Storage @ PNNL',
          description: "At Pacific Northwest National Laboratory, I helped produce the monthly Energy Storage @ PNNL newsletter that highlighted recent innovations in energy storage technology and PNNL&#39;s work in this area.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/writing/Energy%20Storage%20@%20PNNL.html";
            },},{id: "portfolio-coolercontrol-docker",
          title: 'CoolerControl-Docker',
          description: "I maintain the Docker container distribution of CoolerControl, an application that allows for fan control on Linux systems. I built out processes to maintain the container automatically, maintain documentation for the container, and field support issues for users.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/projects/CoolerControl.html";
            },},{id: "portfolio-guniv-net-2025-now",
          title: 'guniv.net, 2025 - now',
          description: "My current version of the website began development in early 2025. My goal was to have more control over the site, because I like tinkering... and to avoid a yearly ~$250 bill from Squarespace.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/projects/guniv.net%202025-now.html";
            },},{
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
