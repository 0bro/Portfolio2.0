const projects = [
  {
    title: 'Cloud Storage Web App',
    images: [
      {
        path: require('../../../public/CloudWebApp.jpg'),
        alt: 'Illustration of a Cloud',
        caption: '',
      },
    ],
    details: {
      role: 'Independent Project',
      timeline: 'January 2023 - May 2023',
      skills: [
        'JavaScript',
        'React.js',
        'Express.js',
        'Jest',
        'Auth0',
        'CORS',
        'CI/CD',
        'DynamoDB',
        'Cognito',
        'S3',
        'ECS',
        'Lambda',
        'EC2',
        'Docker',
      ],
      tags: [],
      description: [
        'Developed web service with multiple loosely coupled microservices that interfaced with web app through RESTFul API calls resulting in highly scalable and distributed services.',
        'Delivered consistent and thorough documented updates through GIT repository, practicing continuous development for accessible and trackable changes',
        'Prioritized service reliability and performance with effective error handling and update versioning to ensure Cloud Service is consistently secure from crashes and maintained effectively ',
        'Encapsulated applications and services into Docker Images to host on AWS EC2 servers, which increased portability and security of deployments.',
        'Employed continuous integration (CI) and continuous deployment (CD) using a software development methodology to ensure software quality, automate testing, and increase productivity',
      ],
      githubLink: '',
    },
    cta: {
      text: '',
      link: '',
    },
  },
  {
    title: 'Project X',
    images: [
      {
        path: require('../../../public/ProjectX.png'),
        alt: '8 Bit Elf Character ',
        caption: '',
      },
    ],
    details: {
      role: 'Group Leader',
      timeline: 'June 2022 - May 2023',
      skills: [
        'JavaScript',
        'Express',
        'C#',
        'Unity',
        'DynamoDB',
        'Cognito',
        'CORS',
        'Auth0',
        'Amplify',
        'Project Management',
        'Leadership',
      ],
      tags: ['Capstone Project'],
      description: [
        'Led the development of a highly engaging interactive game using Unity and C#, handling user data through RESTFul API requests to a backend server running express, accessing a MongoDB server',
        'Proactively and independently learned C#, Unity’s C# framework and the Unity Editor, to provide myself an advantage within the timeline of the project causing my team to trust my leadership when dealing with problems and tackling solutions',
        'Procedurally generated game assets, and 2D Sprites with implemented box colliders, and ray casting to better manipulate game assets within Unity’s 2D environment for a more interactive game',
        'Developed a scalable structure for game elements using class inheritance and polymorphism resulting in a considerably faster integration of features',
        'Communicated creative ideas in concrete terms through a detailed project proposal, showcasing the strategy for a capstone project that would both challenge and optimize my team’s strengths to build a fully developed desktop game, resulting in a prepared and predictive timeline',
        'Restructured workflow to account for a sudden change in team size, by reviewing responsibilities and effectively delegating the extra responsibilities to remaining members of my team, resulting in seamless transition for the teamx',
      ],
      githubLink: '',
    },
    cta: {
      text: '',
      link: '',
    },
  },
  {
    title:
      'Investigative Report: Integrating OpenMP, TBB, and MPI into VSCode on MacOS v11.0+',
    images: [
      {
        path: require('../../../public/OpenMPImage.jpeg'),
        alt: 'Image of M1 Silicon Chip',
        caption: '',
      },
    ],
    details: {
      role: 'Individual Project',
      timeline: 'March 2023 - March 2023',
      skills: ['C++', 'OpenMP', 'TBB', 'MPI', 'VSCode', 'MacOS', 'Research'],
      tags: ['Case Study'],
      description: [
        'RE write to be less arrogant',
        'My professor couldn’t resolve the issues with using OpenMP, on a Mac computer resulting in the class requiring a Windows OS. I couldn’t get around why because the libraries provided Mac OS version. I was surprised to find that there weren’t many documentations on the solution online. So, I decided to research and create a detailed report on why it doesn’t work directly, and how to integrate you’re the libraries to work with Mac. This detailed report helped me better understand using C++, the libraries and VSCode.',
      ],
      githubLink: '',
    },
    cta: {
      text: '',
      link: '',
    },
  },

  {
    title: 'Simon says with Machine Learning and Computer Vision',
    images: [
      {
        path: require('../../../public/SimonSaysLogo.png'),
        alt: 'Half Robotic Face',
        caption: '',
      },
    ],
    details: {
      role: 'Developer',
      timeline: 'March 2023 – March 2023',
      skills: [
        'Git',
        'OpenCV',
        'Python (Programming Language)',
        'GitHub',
        'HTML',
        'Microsoft Visual Studio Code',
        'MediaPipe',
      ],
      tags: [],
      description: [
        'Implemented a computer vision algorithm using Python to detect the user’s facial expression through a webcam, using Google’s MediaPipe library along-side OpenCV causing real-time object detection and tracking',
        'Utilized OpenCV algorithms to process images captured from the camera to remove noise, and sharpen image resulting in 30% improved object detection',
        'Maintained high-quality git repository by defining detailed git issues, and resolving problems through pull requests resulting in accessible and trackable changes',
        'Articulated the structure of the software through a case study, identifying its capabilities and its pain points to self-evaluate my team’s performance which provided better guidance on further development',
      ],
      githubLink: '',
    },
    cta: {
      text: '',
      link: '',
    },
  },
  {
    title: 'Semi-Autonomous RC Car using RobotC',
    images: [
      {
        path: require('../../../public/RobotC.png'),
        alt: 'Robot C Logo',
        caption: '',
      },
    ],
    details: {
      role: 'Independent Project',
      timeline: 'September 2022 – December 2022',
      skills: ['RobotC'],
      tags: [],
      description: [
        'Interpreted analog/digital input and output sensory devices to transfer data between sensors and micro controller systems resulting in semi-autonomous vehicles navigating maze fields using RobotC',
        'Developing safe and universal algorithms to create adaptive vehicles within any environment',
        'Designed algorithms based on use cases for intended robotic vehicle, which decreased development time by 40%',
      ],
      githubLink: '',
    },
    cta: {
      text: '',
      link: '',
    },
  },
  {
    title: 'Fitty Mobile Application: Fitness & Social media',
    images: [
      {
        path: require('../../../public/FittySocial.png'),
        alt: 'Icon of Spoon and Fork on Green background',
        caption: '',
      },
    ],
    details: {
      role: 'Individual Project',
      timeline: 'April 2022 – August 2022',
      skills: ['Xamarin', '.NET', 'MongoDB', 'Microsoft Visual Studio Code'],
      tags: [],
      description: [
        'Developed a multi-platform app for both iOS and Android on the .NET Framework using Xamarin, MongoDB and local storage persistence to track users’ daily fitness progress and graph their progress onto a Google Graph',
        '40% fewer operations occur within the User Experience thread, from having all UI rendering and data collection moved to individual threads',
        'Incorporated an effective UML (Unified Modeling Language) diagram that was used to visualize how our Mongo Database schema would work to allow for scalability while also defining the scope of the project',
        'Used Figma to design a user interface that was open and accessible to users, making the user experience 60% simpler',
        'Supported an effective collaborative environment by outlining an Agile workflow using a detailed Gantt chart to keep my team on track and accountable for their contributions, and visualizing the importance of deadlines',
      ],
      githubLink: '',
    },
    cta: {
      text: '',
      link: '',
    },
  },
  {
    title: 'Restaurant Loyalty Rewards App',
    images: [
      {
        path: require('../../../public/Loyalty.png'),
        alt: '',
        caption: '',
      },
    ],
    details: {
      role: 'Individual Project',
      timeline: 'April 2022 – August 2022',
      skills: ['React Native', 'Cross Platform Development', 'Firebase'],
      tags: [],
      description: [
        'Improved mobile development and database interaction skills by creating a React Native app with an Express backend and MongoDB to handle customer loyalty points.',
      ],
      githubLink: '',
    },
    cta: {
      text: '',
      link: '',
    },
  },
  {
    title: 'Employee Management and Onboarding Back End Application',
    images: [
      {
        path: require('../../../public/Employee.png'),
        alt: 'Icon of Man in tie smiling',
        caption: '',
      },
    ],
    details: {
      role: 'Individual Project',
      timeline: 'November 2021 – December 2021',
      skills: [
        'JavaScript',
        'HTML',
        'Cascading Style Sheets (CSS)',
        'Node.js',
        'Handlebar.js',
        'Microsoft Visual Studio Code',
      ],
      tags: [],
      description: [
        'Developed a Web Application to manage employee information efficiently using handlebar.js templates to minimize HTML code and express.js to route between API and custom views',
        "Wrote algorithms to let client query for employees with any data provided, update and persist changes to employee's credentials",
        'Made future development 65% more efficient with effective templates and future proof practices',
      ],
      githubLink: '',
    },
    cta: {
      text: '',
      link: '',
    },
  },
];
export default projects;
