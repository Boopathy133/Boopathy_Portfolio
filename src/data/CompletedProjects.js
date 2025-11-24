import E_Commerce_Clothes from "../assets/E-Commerce-Clothes.png"
import UI_Challenge_1 from "../assets/UI_Challenge-1.png"
import UI_Challenge_3 from "../assets/UI_Challenge-3.png"
import Dashboard_Img from "../assets/DashBoard.png"
import Collaborative_Design_Tool from "../assets/Collaborative_1.png"
import SafeSphere from "../assets/SafeSphere.webp"
import E_Commerce_Code from "../assets/E-Commerce-Code.png"
import RailwayReservationSystem from "../assets/RailwayReservationSystem.png"


export const CompletedProjects = [
    {
        id: "E-Commerce_Clothes",
        title: 'E-Commerce Clothing website Design',
        shortDescription: "This is a online website which they can sell or buy different category of clothes like Top Wears, Bottom Wears for Men, women and kids.",
        fullDescription: "A comprehensive e-commerce solution built with React and Node.js, featuring real-time inventory management, secure payment processing through Stripe, and a responsive shopping experience.",
        detailedDescription: "This enterprise-grade e-commerce platform was designed to handle high-volume transactions while maintaining exceptional performance and security. Built with a microservices architecture, the platform integrates seamlessly with payment gateways, inventory systems, and shipping providers. The admin dashboard provides real-time analytics, inventory management, and customer insights. Special attention was paid to mobile optimization, resulting in a 40% increase in mobile conversions.",
        githubUrl: "https://github.com/Boopathy133/E-Commerce_react.git",
        // liveUrl: "https://demo-ecommerce.example.com",
        linkedinUrl: "https://www.linkedin.com/in/yourprofile",
        role: "Frontend Developement",
        duration: "3 Weeks",
        teamSize: "Own",
        imgSrc: E_Commerce_Clothes,
        tags: ['HTML', 'CSS', 'JavaScript'],
        features: [
            "Provides separate clothing categories for Men, Women, and Kids with multiple sub-categories.",
            "Fully designed frontend UI with smooth navigation between pages (Home, Men, Women, Kids, Login, Cart).",
            "Allows users to add products to cart using an “Add to Cart” button.",
            "Cart page displays product name, quantity, price, and total amount clearly for each user.",
            "Includes a neatly designed Login page for user access.",
            "Interactive category-based navigation for quick switching between clothing sections."
        ],
        timeline: [
            { phase: "Project Setup & Planning", description: "Initialized the project structure, created basic pages, and planned the website layout." },
            { phase: "Homepage & Navigation", description: "Designed the Home page and created category sections for Men, Women, and Kids." },
            { phase: "Category Pages (Men, Women, Kids)", description: "Added product cards for all categories with clean UI for shirts, pants, tops, skirts, shoes, etc." },
            { phase: "Product Interaction", description: "Implemented smooth navigation between Home → Men → Women → Kids → Login → Cart." },
            { phase: "Login Page", description: "Designed a functional and responsive login page interface." },
            { phase: "Cart Page Development", description: "Created the cart page showing product name, quantity, price, and total amount." },
            { phase: "Final UI Polish & Testing", description: "Improved UI interactions, hover effects, animations, and polished overall frontend design." }
        ],

        // challenges: [
        //     "Implementing secure payment processing while maintaining PCI compliance and protecting sensitive customer data",
        //     "Optimizing database queries for catalogs with 100,000+ products while maintaining sub-second response times",
        //     "Building a scalable architecture to handle traffic spikes during sales events, achieving 99.9% uptime"
        // ],

        collaborators: [
            // { name: "VISHALINI K", username: "vishalini723", linkedin: "https://www.linkedin.com/in/vishalini-k-it-student-5a7808257", portfolio: "https://vishalini723tech.netlify.app" },
            // { name: "MUKILAN B", username: "Mukilanbalakrishnan", linkedin: "https://www.linkedin.com/in/mukilan-balakrishnan-746a28291", portfolio: "https://mukilanportfolio.netlify.app" },

        ],


        projectLink: 'https://github.com/Boopathy133/E-Commerce-Website.git',
    },
    {
        id: " Dashboard",
        imgSrc: Dashboard_Img,
        title: 'Dashboard Design',
        tags: ['UI-design', 'Figma', 'Design'],
        projectLink: 'https://github.com/Boopathy133/CoderOne-Project-1.git',
        shortDescription: "This project focuses on designing a user-friendly data visualization dashboard that helps users easily understand complex datasets. It includes interactive charts, graphs, and customizable widgets to support real-time insights and improved decision-making.",
        fullDescription: "The Data Visualization Dashboard project aims to deliver an intuitive and interactive platform that simplifies complex datasets through charts, graphs, and customizable widgets. Designed with a user-centric approach, the dashboard supports real-time analysis, enabling stakeholders to track KPIs, identify trends, and make informed decisions efficiently. The project involves user research, iterative design, and prototyping to ensure the interface remains flexible, scalable, and personalized. With continuous testing and feedback, the final solution enhances data-driven decision-making across the organization.",
        detailedDescription: "The Data Visualization Dashboard project is designed to create an advanced yet user-friendly interface that helps organizations interpret complex datasets with ease. The dashboard focuses on presenting information through interactive charts, graphs, and customizable widgets, allowing users to explore data dynamically and extract meaningful insights. Its primary objective is to support real-time monitoring, trend identification, and KPI tracking, enabling faster and more informed decision-making. \n A key part of the project includes conducting thorough user research to understand the specific needs, challenges, and workflows of the end users. These insights guide the design direction, ensuring that the platform is intuitive and aligns with real-world expectations. The dashboard undergoes an iterative design process, including wireframing, prototyping, and continuous refinement in Figma to enhance both usability and visual appeal.\n Scalability and flexibility are central to the design approach, giving users the ability to personalize their views, configure widgets, and generate custom reports. Rigorous usability testing and user feedback loops ensure that the final product is polished, reliable, and optimized for performance. Ultimately, the dashboard empowers stakeholders with a powerful tool for data-driven decision-making, helping organizations identify opportunities, monitor performance, and respond to trends effectively.",
        githubUrl: "https://github.com/Boopathy133/CoderOne-Project-1.git",
        liveUrl: "https://www.figma.com/design/4rIWnwwXjKMff9x9aOG4Y1/Dashboard?node-id=1-2&t=1MXxFu1kPlAnSv94-1",
        linkedinUrl: "https://www.linkedin.com/in/yourprofile",
        role: "UI / UX Design",
        duration: "2 Hours",
        teamSize: "Own",
        // tags: ['Design', 'Figma'],
        features: [
            "Dynamic charts, graphs, and widgets that update in real time for better insights.",
            "Users can rearrange, resize, or personalize widgets to match their workflow.",
            "Automatic updates ensure users always analyze the latest trends and metrics.",
            "Trend analysis, comparisons, filters, and drill-down interactions for deeper exploration.",
            "Clean, intuitive, and accessible UI designed using Figma for smooth user interaction.",
            "Dedicated components to highlight key performance indicators across departments.",

        ],
        timeline: [
            { phase: "0 - 25 minutes", description: ["Understand the problem statement and identify dashboard goals.", "\nResearch user needs and define key features."] },
            { phase: "25 - 60 minutes", description: ["Sketch initial layout: charts, widgets, navigation flow.", "\nCreate low-fidelity wireframes in Figma."] },
            { phase: "60 - 90 minutes", description: "Convert wireframes into high-fidelity UI screens." },
            { phase: "90 - 110 minutes", description: "Design interactive components and micro-interactions." },
            { phase: "110 - 120 minutes", description: "Final review and export of Figma design screens." }
        ],

        // challenges: [
        //     "Implementing secure payment processing while maintaining PCI compliance and protecting sensitive customer data",
        //     "Optimizing database queries for catalogs with 100,000+ products while maintaining sub-second response times",
        //     "Building a scalable architecture to handle traffic spikes during sales events, achieving 99.9% uptime"
        // ],

    },
    {
        id: "Collaborative_Design_Tool",
        imgSrc: Collaborative_Design_Tool,
        title: 'Collaborative Design Tool',
        tags: ['Design', 'Figma', 'Figma-UI'],
        projectLink: 'https://www.figma.com/design/iw3aMYOsd8O69O8ogE4tk5/Collaborative-Desing-Tool?node-id=3-502',
        shortDescription: "A web-based collaborative design tool that enables real-time editing, version control, and seamless teamwork for remote design teams, improving communication and enhancing productivity.",
        fullDescription: "The project focuses on building an intuitive collaborative design platform that allows remote teams to work together in real time. It includes features such as live co-editing, version history, and integrated feedback tools. The system supports multiple design formats and syncs smoothly with design software. It aims to simplify workflows, improve communication, and ensure a productive design process.",
        detailedDescription: "The Collaborative Design Tool project aims to develop a powerful web-based platform that enables design teams to collaborate seamlessly from any location. The system supports real-time co-editing, allowing multiple designers to work simultaneously on the same project while maintaining clear version control and edit history. Integrated feedback features ensure smooth communication, enabling team members to comment, review, and refine designs efficiently. The platform supports various design formats and offers integration with popular design software, providing a flexible and unified workspace. User research will guide the interface design to ensure it is intuitive, efficient, and aligned with actual team workflows. Through iterative testing and refinement, the tool will enhance productivity, improve collaborative creativity, and streamline the entire design process from ideation to completion.",
        githubUrl: "https://github.com/Boopathy133/CoderOne-Project-2.git",
        liveUrl: "https://www.figma.com/design/iw3aMYOsd8O69O8ogE4tk5/Collaborative-Desing-Tool?node-id=3-502",
        // linkedinUrl: "https://www.linkedin.com/in/yourprofile",
        role: "UI / UX Designer",
        duration: "2 Hours",
        teamSize: "3 Designers",
        features: [
            "Real-time collaborative editing for multiple designers.",
            "Version control & change tracking to monitor updates.",
            "Built-in feedback & commenting system for smoother communication.",
            "Integration with popular design tools like Figma, Adobe XD, etc.",
            "Support for multiple design formats in one workspace.",
            "User-friendly interface optimized for productivity."
        ],
        timeline: [
            { phase: "0-20 min", description: "Understanding requirements & analyzing design team workflows" },
            { phase: "20-45 min", description: "Preparing wireframes for homepage, workspace, and collaboration flow." },
            { phase: "45-75 min", description: "Designing high-fidelity screens in Figma (Home + Play Area)." },
            { phase: "75-105 min", description: "Adding interaction elements, components, and prototype linking." },
            { phase: "105-120 min", description: "Review, refine UI details, and export the final Figma presentation." }
        ],

        // challenges: [
        //     "Implementing secure payment processing while maintaining PCI compliance and protecting sensitive customer data",
        //     "Optimizing database queries for catalogs with 100,000+ products while maintaining sub-second response times",
        //     "Building a scalable architecture to handle traffic spikes during sales events, achieving 99.9% uptime"
        // ],

        collaborators: [
            { name: "VISHALINI K", username: "vishalini723", linkedin: "https://www.linkedin.com/in/vishalini-k-it-student-5a7808257", portfolio: "https://vishalini723tech.netlify.app" },
            { name: "MUKILAN B", username: "Mukilanbalakrishnan", linkedin: "https://www.linkedin.com/in/mukilan-balakrishnan-746a28291", portfolio: "https://mukilanportfolio.netlify.app" },

        ],
    },
    {
        id: "UI_Challenge_1",
        imgSrc: UI_Challenge_1,
        title: 'Sport Acadamy Landing Page',
        tags: ['Design', 'Figma'],
        // projectLink: '',
        shortDescription: "This is a online website which they can sell or buy different category of clothes like Top Wears, Bottom Wears for Men, women and kids.",
        fullDescription: "A comprehensive e-commerce solution built with React and Node.js, featuring real-time inventory management, secure payment processing through Stripe, and a responsive shopping experience.",
        detailedDescription: "This enterprise-grade e-commerce platform was designed to handle high-volume transactions while maintaining exceptional performance and security. Built with a microservices architecture, the platform integrates seamlessly with payment gateways, inventory systems, and shipping providers. The admin dashboard provides real-time analytics, inventory management, and customer insights. Special attention was paid to mobile optimization, resulting in a 40% increase in mobile conversions.",
        githubUrl: "https://github.com/yourusername/ecommerce-platform",
        liveUrl: "https://demo-ecommerce.example.com",
        linkedinUrl: "https://www.linkedin.com/in/yourprofile",
        role: "Full-Stack Developer & Tech Lead",
        duration: "6 months",
        teamSize: "5 developers",
        // tags: ['Design', 'Figma'],
        features: [
            "Secure user authentication and authorization with JWT tokens",
            "Real-time inventory tracking with automatic stock alerts",
            "Integrated payment processing with Stripe and PayPal",
            "Advanced product search with Elasticsearch and AI-powered recommendations",
            "Order management system with shipment tracking",
            "Responsive design optimized for mobile, tablet, and desktop",
            "Admin dashboard with real-time analytics and reporting",
            "Multi-currency support with automatic conversion"
        ],
        timeline: [
            { phase: "Planning & Design", description: "Requirements gathering, user research, and system architecture design" },
            { phase: "Development", description: "Core features implementation, API development, and frontend build" },
            { phase: "Integration", description: "Payment gateway, shipping providers, and third-party service integration" },
            { phase: "Testing & Launch", description: "Comprehensive testing, performance optimization, and production deployment" }
        ],

        challenges: [
            "Implementing secure payment processing while maintaining PCI compliance and protecting sensitive customer data",
            "Optimizing database queries for catalogs with 100,000+ products while maintaining sub-second response times",
            "Building a scalable architecture to handle traffic spikes during sales events, achieving 99.9% uptime"
        ],
    },
    {
        id: "UI_Challenge_3",
        imgSrc: UI_Challenge_3,
        title: 'Spotify Landing Page',
        tags: ['Design', 'Figma'],
        // projectLink: '',
        shortDescription: "This is a online website which they can sell or buy different category of clothes like Top Wears, Bottom Wears for Men, women and kids.",
        fullDescription: "A comprehensive e-commerce solution built with React and Node.js, featuring real-time inventory management, secure payment processing through Stripe, and a responsive shopping experience.",
        detailedDescription: "This enterprise-grade e-commerce platform was designed to handle high-volume transactions while maintaining exceptional performance and security. Built with a microservices architecture, the platform integrates seamlessly with payment gateways, inventory systems, and shipping providers. The admin dashboard provides real-time analytics, inventory management, and customer insights. Special attention was paid to mobile optimization, resulting in a 40% increase in mobile conversions.",
        githubUrl: "https://github.com/yourusername/ecommerce-platform",
        liveUrl: "https://demo-ecommerce.example.com",
        linkedinUrl: "https://www.linkedin.com/in/yourprofile",
        role: "Full-Stack Developer & Tech Lead",
        duration: "6 months",
        teamSize: "5 developers",
        // tags: ['Design', 'Figma'],
        features: [
            "Secure user authentication and authorization with JWT tokens",
            "Real-time inventory tracking with automatic stock alerts",
            "Integrated payment processing with Stripe and PayPal",
            "Advanced product search with Elasticsearch and AI-powered recommendations",
            "Order management system with shipment tracking",
            "Responsive design optimized for mobile, tablet, and desktop",
            "Admin dashboard with real-time analytics and reporting",
            "Multi-currency support with automatic conversion"
        ],
        timeline: [
            { phase: "Planning & Design", description: "Requirements gathering, user research, and system architecture design" },
            { phase: "Development", description: "Core features implementation, API development, and frontend build" },
            { phase: "Integration", description: "Payment gateway, shipping providers, and third-party service integration" },
            { phase: "Testing & Launch", description: "Comprehensive testing, performance optimization, and production deployment" }
        ],

        challenges: [
            "Implementing secure payment processing while maintaining PCI compliance and protecting sensitive customer data",
            "Optimizing database queries for catalogs with 100,000+ products while maintaining sub-second response times",
            "Building a scalable architecture to handle traffic spikes during sales events, achieving 99.9% uptime"
        ],
    },
    {
        id: "SafeSphere",
        imgSrc: SafeSphere,
        title: 'SafeSphere',
        tags: ['Arduino Uno', 'MQ-32 sensor', 'DHT11 sensor'],
        projectLink: 'https://github.com/Boopathy133/SafeSphere.git',
        shortDescription: "This is a online website which they can sell or buy different category of clothes like Top Wears, Bottom Wears for Men, women and kids.",
        fullDescription: "A comprehensive e-commerce solution built with React and Node.js, featuring real-time inventory management, secure payment processing through Stripe, and a responsive shopping experience.",
        detailedDescription: "This enterprise-grade e-commerce platform was designed to handle high-volume transactions while maintaining exceptional performance and security. Built with a microservices architecture, the platform integrates seamlessly with payment gateways, inventory systems, and shipping providers. The admin dashboard provides real-time analytics, inventory management, and customer insights. Special attention was paid to mobile optimization, resulting in a 40% increase in mobile conversions.",
        githubUrl: "https://github.com/yourusername/ecommerce-platform",
        liveUrl: "https://demo-ecommerce.example.com",
        linkedinUrl: "https://www.linkedin.com/in/yourprofile",
        role: "Full-Stack Developer & Tech Lead",
        duration: "6 months",
        teamSize: "5 developers",
        // tags: ['Embedded C', 'IoT'],
        features: [
            "Secure user authentication and authorization with JWT tokens",
            "Real-time inventory tracking with automatic stock alerts",
            "Integrated payment processing with Stripe and PayPal",
            "Advanced product search with Elasticsearch and AI-powered recommendations",
            "Order management system with shipment tracking",
            "Responsive design optimized for mobile, tablet, and desktop",
            "Admin dashboard with real-time analytics and reporting",
            "Multi-currency support with automatic conversion"
        ],
        timeline: [
            { phase: "Planning & Design", description: "Requirements gathering, user research, and system architecture design" },
            { phase: "Development", description: "Core features implementation, API development, and frontend build" },
            { phase: "Integration", description: "Payment gateway, shipping providers, and third-party service integration" },
            { phase: "Testing & Launch", description: "Comprehensive testing, performance optimization, and production deployment" }
        ],

        challenges: [
            "Implementing secure payment processing while maintaining PCI compliance and protecting sensitive customer data",
            "Optimizing database queries for catalogs with 100,000+ products while maintaining sub-second response times",
            "Building a scalable architecture to handle traffic spikes during sales events, achieving 99.9% uptime"
        ],
    },
    {
        id: "E_Commerce_Code",
        imgSrc: E_Commerce_Code,
        title: 'E-Commerce-Clothes',
        // tags: ['React', 'CSS'],
        // projectLink: 'https://github.com/Boopathy133/E-Commerce-Website.git',
        shortDescription: "This is a online website which they can sell or buy different category of clothes like Top Wears, Bottom Wears for Men, women and kids.",
        fullDescription: "I have created only the fronend of the website, which consists of categories for Men clothes like Shirts, Pants, inners etc., for Womes clothes like Tops, Skirts, Legins and for kids clothes like Shirts, pants and shoes etc.,",
        detailedDescription: "This has an interactive design for navigating from one category to another like Home page <-> Mens <-> Kids <-> Home <-> Login Page <-> Cart Page. This also contains Login page design. The main of the E-Commerce Website is Cart page. It Contains Cart Page Which show the Ordered Total price for the each user. User can add different products using 'Add To Cart' button and in the Cart page User can verfy their Carted items 'Name', 'Quantity', 'Price' of the each products and 'Total Price of the Carted Products'.",
        githubUrl: "https://github.com/Boopathy133/E-Commerce-Website.git",
        liveUrl: "https://demo-ecommerce.example.com",
        linkedinUrl: "https://www.linkedin.com/in/yourprofile",
        role: "Full-Stack Developer",
        duration: "2 months",
        teamSize: "Own",
        tags: ['HTML', 'CSS', 'JavaScript', 'React'],
        features: [
            "Provides separate clothing categories for Men, Women, and Kids with multiple sub-categories.",
            "Fully designed frontend UI with smooth navigation between pages (Home, Men, Women, Kids, Login, Cart).",
            "Allows users to add products to cart using an “Add to Cart” button.",
            "Cart page displays product name, quantity, price, and total amount clearly for each user.",
            "Includes a neatly designed Login page for user access.",
            "Interactive category-based navigation for quick switching between clothing sections."

        ],
        timeline: [
            { phase: "Project Setup & Planning", description: "Initialized the project structure, created basic pages, and planned the website layout." },
            { phase: "Homepage & Navigation", description: "Designed the Home page and created category sections for Men, Women, and Kids." },
            { phase: "Category Pages (Men, Women, Kids)", description: "Added product cards for all categories with clean UI for shirts, pants, tops, skirts, shoes, etc." },
            { phase: "Product Interaction", description: "Implemented smooth navigation between Home → Men → Women → Kids → Login → Cart." },
            { phase: "Login Page", description: "Designed a functional and responsive login page interface." },
            { phase: "Cart Page Development", description: "Created the cart page showing product name, quantity, price, and total amount." },
            { phase: "Final UI Polish & Testing", description: "Improved UI interactions, hover effects, animations, and polished overall frontend design." }
        ],

        // challenges: [
        //     "Implementing secure payment processing while maintaining PCI compliance and protecting sensitive customer data",
        //     "Optimizing database queries for catalogs with 100,000+ products while maintaining sub-second response times",
        //     "Building a scalable architecture to handle traffic spikes during sales events, achieving 99.9% uptime"
        // ],
    },
    {
        id: "RailwayReservationSystem",
        imgSrc: RailwayReservationSystem,
        title: 'Railway Reservation System',
        tags: ['Java', 'JavaFX', 'Wamp Server', 'Apache NetBeans'],
        // projectLink: 'https://github.com/Boopathy133/E-Commerce-Website.git',
        shortDescription: "This is a online website which they can sell or buy different category of clothes like Top Wears, Bottom Wears for Men, women and kids.",
        fullDescription: "A comprehensive e-commerce solution built with React and Node.js, featuring real-time inventory management, secure payment processing through Stripe, and a responsive shopping experience.",
        detailedDescription: "This enterprise-grade e-commerce platform was designed to handle high-volume transactions while maintaining exceptional performance and security. Built with a microservices architecture, the platform integrates seamlessly with payment gateways, inventory systems, and shipping providers. The admin dashboard provides real-time analytics, inventory management, and customer insights. Special attention was paid to mobile optimization, resulting in a 40% increase in mobile conversions.",
        githubUrl: "https://github.com/yourusername/ecommerce-platform",
        liveUrl: "https://demo-ecommerce.example.com",
        linkedinUrl: "https://www.linkedin.com/in/yourprofile",
        role: "Full-Stack Developer & Tech Lead",
        duration: "6 months",
        teamSize: "5 developers",
        // tags: ['JAVA', 'JavaFX'],
        features: [
            "Secure user authentication and authorization with JWT tokens",
            "Real-time inventory tracking with automatic stock alerts",
            "Integrated payment processing with Stripe and PayPal",
            "Advanced product search with Elasticsearch and AI-powered recommendations",
            "Order management system with shipment tracking",
            "Responsive design optimized for mobile, tablet, and desktop",
            "Admin dashboard with real-time analytics and reporting",
            "Multi-currency support with automatic conversion"
        ],
        timeline: [
            { phase: "Planning & Design", description: "Requirements gathering, user research, and system architecture design" },
            { phase: "Development", description: "Core features implementation, API development, and frontend build" },
            { phase: "Integration", description: "Payment gateway, shipping providers, and third-party service integration" },
            { phase: "Testing & Launch", description: "Comprehensive testing, performance optimization, and production deployment" }
        ],

        challenges: [
            "Implementing secure payment processing while maintaining PCI compliance and protecting sensitive customer data",
            "Optimizing database queries for catalogs with 100,000+ products while maintaining sub-second response times",
            "Building a scalable architecture to handle traffic spikes during sales events, achieving 99.9% uptime"
        ],
    },
    //     {
    //     id: "ecommerce-clothes-design",
    //     title: "E-Commerce Clothing Website Design",
    //     image: "project-hero-1.jpg",
    //     shortDescription: "A modern clothing e-commerce UI designed with Figma.",
    //     fullDescription:
    //       "This project focuses on designing a clean, minimal, and user-friendly clothing e-commerce interface using Figma.",
    //     detailedDescription:
    //       "The design includes structured layouts, clean typography, and a modern visual hierarchy ensuring a smooth shopping experience.",
    //     technologies: ["Figma", "UI Design"],
    //     features: ["Responsive layout", "Modern UI design", "Smooth interactions"],
    //     metrics: [{ label: "Screens Designed", value: "12+" }],
    //     challenges: ["Ensuring consistency across screens", "Optimizing layout spacing"],
    //     timeline: [
    //       { phase: "Planning", description: "Understanding UI requirements" },
    //       { phase: "Design", description: "Creating wireframes and UI screens" },
    //     ],
    //     githubUrl: "",
    //     liveUrl: "",
    //     linkedinUrl: "",
    //   },
];