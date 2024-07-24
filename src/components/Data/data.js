import ncCardImage from "../../assets/nc-news-card.png";
import ekansCardImage from "../../assets/ekans-card.png";
import tradingCardImage from "../../assets/trading-bot-card.jpg";

import ncCarouselOne from "../../assets/nc-carousel-1.png";
import ncCarouselTwo from "../../assets/nc-carousel-2.png";
import ncCarouselThree from "../../assets/nc-carousel-3.png";

import ekansCarouselOne from "../../assets/ekans-carousel-1.png";
import ekansCarouselTwo from "../../assets/ekans-carousel-2.png";
import ekansCarouselThree from "../../assets/ekans-carousel-3.png";

export const projects = [
  {
    title: "Northcoders News",
    desc: "A full stack Web Application",
    img: ncCardImage,
    finished: true,
  },
  {
    title: "Ekans",
    desc: "Reverse snake Game",
    img: ekansCardImage,
    finished: true,
  },
  {
    title: "Algorithmic Trading Bot",
    desc: "Automated Finacial Asset Trading",
    img: tradingCardImage,
    finished: false,
  },
];

export const caseStudies = [
  {
    title: "Northcoders News",
    links: {
      "Front-End Repo": "https://github.com/Burnlees/northcoders-news",
      "Back-End Repo": "https://github.com/Burnlees/be-nc-news",
      "Live Version": "https://northcoders-news-desk.netlify.app/",
    },
    carouselImages: [
      { id: "nc-news1", imgPath: ncCarouselOne },
      { id: "nc-news2", imgPath: ncCarouselTwo },
      { id: "nc-news3", imgPath: ncCarouselThree },
    ],
    overview:
      "A few weeks ago, I completed a challenging and rewarding project as part of the Northcoders bootcamp. This project involved building a full-stack web application that seamlessly integrates a React.js front end with an Express.js and PostgreSQL (PSQL) back end.",
    keyFeatures: [
      {
        feature: "Data Retrieval and Manipulation",
        description:
          "The web app interacts with a custom-built API to fetch and update data using GET, POST, and PATCH requests. This allows for efficient data management and real-time updates.",
      },
      {
        feature: "User Interaction",
        description:
          "Dynamic and responsive interface that updates data in real-time based on user interactions. Users can seamlessly interact with the application, experiencing immediate feedback and updates.",
      },
      {
        feature: "Complex Sort Queries and Pagination",
        description:
          "Efficiently handles large datasets with advanced sorting capabilities and pagination. This ensures a smooth user experience even when dealing with extensive data.",
      },
      {
        feature: "Mobile-First Design",
        description:
          "Designed with a mobile-first approach to ensure optimal user experience on all devices. This prioritizes mobile users and enhances usability on smaller screens.",
      },
      {
        feature: "Responsive Design",
        description:
          "Fully responsive layout that adapts to different screen sizes, providing seamless usage across desktops, tablets, and smartphones. This ensures a consistent user experience regardless of the device used.",
      },
    ],
    technologiesUsed: [
      "React.js",
      "Node.js",
      "Postgresql",
      "Express.js",
      "Axios",
      "Material-UI",
      "Jest",
      "Supertest",
    ],
    projectDetails: {
      dataRetrievalAndManipulation:
        "Implemented a RESTful API using Express.js, which connects to a PostgreSQL database. This API supports various operations including data retrieval (GET), data creation (POST), and data updates (PATCH). Utilized Axios for efficient HTTP requests, ensuring smooth communication between the front end and back end.",
      userInteraction:
        "Developed a dynamic user interface with React.js, enabling real-time data updates and interactions. This creates an engaging and responsive user experience. Implemented state management to handle user actions and reflect changes instantly on the UI.",
      complexSortQueriesAndPagination:
        "Built advanced sorting and pagination functionalities to manage large datasets effectively. This improves performance and ensures users can navigate through data effortlessly. Optimized database queries to support efficient data retrieval and manipulation, enhancing overall application performance.",
      mobileFirstAndResponsiveDesign:
        "Adopted a mobile-first design strategy, ensuring the application is fully functional and visually appealing on mobile devices. Created a responsive layout using CSS frameworks and media queries, adapting the UI to various screen sizes and devices.",
    },
    conclusion:
      "This full-stack web application showcases my ability to build and integrate both front-end and back-end technologies to create a seamless user experience. The project highlights my skills in React.js, Express.js, PostgreSQL, and API communication using Axios. The successful completion of this project during the Northcoders bootcamp demonstrates my proficiency in handling complex data operations, user interactions, and responsive design.",
  },
  {
    title: "Ekans",
    links: {
      "GitHub Repo": "https://github.com/house-of-the-badger/ekansREBORN",
    },
    carouselImages: [
      { id: "ekans1", imgPath: ekansCarouselOne },
      { id: "ekans2", imgPath: ekansCarouselTwo },
      { id: "ekans3", imgPath: ekansCarouselThree },
    ],
    overview:
      "Ekans is a unique twist on the classic Snake game developed as the final project of the Northcoders bootcamp. Our team of four built this game in just over a week, with each member contributing to different aspects of the project. This project marked my first venture into game development, leveraging the fundamentals of computer programming and soft skills I acquired during the bootcamp. Developed using Godot and GDScript, Ekans reverses the traditional mechanics of Snake by starting the player with a fully grown snake that shrinks as it eats food. As the snake shrinks, it drops poops that clutter the map, creating deadly obstacles that increase the difficulty.",
    keyFeatures: [
      {
        feature: "Reverse Snake Dynamics",
        description:
          "Starts with a fully grown snake that shrinks when eating food, reversing traditional Snake mechanics for a unique gameplay experience.",
      },
      {
        feature: "Dynamic Hazard Generation",
        description:
          "Shrinking snake leaves behind hazardous obstacles, adding strategic depth and increasing difficulty as the game progresses.",
      },
      {
        feature: "Intuitive and Responsive Controls",
        description:
          "Smooth and responsive controls ensure seamless gameplay and easy navigation, appealing to a wide range of players.",
      },
      {
        feature: "Escalating Difficulty",
        description:
          "Game complexity increases as obstacles clutter the play area, maintaining player engagement with new challenges.",
      },
      {
        feature: "Mobile Optimization",
        description:
          "Optimized for mobile performance, providing a smooth gaming experience on the go with a dedicated mobile version.",
      },
      {
        feature: "Secure Firebase Authentication",
        description:
          "Uses Firebase for robust user authentication, leveraging GDScript for secure and efficient user management.",
      },
    ],
    technologiesUsed: [
      "Godot",
      "GDScript",
      "Firebase",
      "Android SDK",
      "Adobe Illustrator",
    ],
    projectDetails: {
      reverseSnakeMechanics:
        "Implemented unique reverse snake mechanics where the player starts with a fully grown snake that shrinks as it eats food. This new twist challenges traditional Snake gameplay and adds a strategic layer to the game.",
      dynamicObstacles:
        "As the snake shrinks, it drops poops that become deadly obstacles on the map. These obstacles make navigation increasingly difficult and add a dynamic challenge to the game.",
      intuitiveControls:
        "Developed smooth and responsive controls using Godot's input system. The intuitive control scheme ensures that players can easily maneuver the snake and enjoy a seamless gameplay experience.",
      challengingGameplay:
        "Designed the game to become progressively more difficult as more obstacles clutter the map. This increasing difficulty keeps players engaged and provides a rewarding challenge.",
      optimizedForMobile:
        "Adopted a mobile-first approach in game design, ensuring that the game is fully functional and visually appealing on mobile devices. Created a responsive layout and optimized performance for a seamless mobile gaming experience.",
      firebaseAuthentication:
        "Integrated Firebase for user authentication, allowing players to securely log in and access their game data. This integration was accomplished using GDScript to communicate with Firebase's authentication services.",
    },
    conclusion:
      "Ekans: Reverse Snake Game showcases my ability to innovate and create engaging gameplay experiences using Godot and GDScript. The project highlights my skills in game design, dynamic obstacle creation, and mobile optimization. The successful completion of this project demonstrates my proficiency in handling complex gameplay mechanics and delivering a polished and enjoyable game. Despite the challenges of working on game development for the first time and the tight deadline, my team and I leveraged our programming knowledge and soft skills to create a unique and enjoyable game.",
  },
];
