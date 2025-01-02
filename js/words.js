let words = [
    { word: "CPU", hint: "The brain of the computer" },
    { word: "RAM", hint: "Temporary memory for processing tasks" },
    { word: "ROM", hint: "Non-volatile memory for storing firmware" },
    { word: "Motherboard", hint: "Main circuit board of the computer" },
    { word: "Hard Drive", hint: "Permanent storage for data and software" },
    { word: "SSD", hint: "Fast storage drive with no moving parts" },
    { word: "Power Supply", hint: "Provides power to components" },
    { word: "BIOS", hint: "Basic Input Output System in motherboards" },
    { word: "OS", hint: "System software that manages hardware and software" },
    { word: "Keyboard", hint: "Input device for typing" },
    { word: "Mouse", hint: "Device used for pointing and clicking" },
    { word: "Monitor", hint: "Display screen for a computer" },
    { word: "Cache", hint: "High-speed storage for frequently used data" },
    { word: "Bit", hint: "Smallest unit of data in computing" },
    { word: "Byte", hint: "Group of 8 bits" },
    { word: "LAN", hint: "Local area network" },
    { word: "WAN", hint: "Wide area network" },
    { word: "Protocol", hint: "Rules for data communication" },
    { word: "IP Address", hint: "Unique identifier for a device on a network" },
    { word: "Firewall", hint: "Security system for network traffic" },
    { word: "Cloud", hint: "Remote servers for storing data" },
    { word: "Virtualization", hint: "Creating virtual versions of resources" },
    { word: "Ethernet", hint: "Technology for wired networking" },
    { word: "Wi-Fi", hint: "Wireless networking technology" },
    { word: "USB", hint: "Universal Serial Bus for connecting devices" },
    { word: "DNS", hint: "Converts domain names to IP addresses" },
    { word: "HTTP", hint: "Protocol for web communication" },
    { word: "HTTPS", hint: "Secure version of HTTP" },
    { word: "Server", hint: "Provides data or services to clients" },
    { word: "Client", hint: "Requests data or services from servers" },
    { word: "Algorithm", hint: "Step-by-step procedure for calculations" },
    { word: "Data", hint: "Raw facts and figures" },
    { word: "Information", hint: "Processed and meaningful data" },
    { word: "Binary", hint: "System of 0s and 1s" },
    { word: "Hexadecimal", hint: "Base-16 numbering system" },
    { word: "Compiler", hint: "Converts code into machine language" },
    { word: "Interpreter", hint: "Runs code line by line" },
    { word: "IDE", hint: "Integrated Development Environment for writing code" },
    { word: "Encryption", hint: "Securing data by encoding it" },
    { word: "Decryption", hint: "Decoding encoded data" },
    { word: "Driver", hint: "Software for hardware communication" },
    { word: "Malware", hint: "Software designed to harm systems" },
    { word: "Virus", hint: "Malware that spreads by copying itself" },
    { word: "Trojan", hint: "Malware disguised as legitimate software" },
    { word: "Spyware", hint: "Malware that steals user data" },
    { word: "Phishing", hint: "Fraudulent attempt to obtain sensitive data" },
    { word: "Backup", hint: "Copy of data for recovery" },
    { word: "Restore", hint: "Returning backed-up data" },
    { word: "LAN Cable", hint: "Cable used for connecting networks" },
    { word: "Ping", hint: "Tool for checking network connectivity" },
    { word: "MAC Address", hint: "Unique hardware identifier" },
    { word: "Bluetooth", hint: "Short-range wireless communication" },
    { word: "Resolution", hint: "Number of pixels on a screen" },
    { word: "Pixel", hint: "Smallest unit of a digital image" },
    { word: "Compression", hint: "Reducing file size" },
    { word: "Decompression", hint: "Restoring compressed data" },
    { word: "HTML", hint: "Markup language for web pages" },
    { word: "CSS", hint: "Style sheet language for web pages" },
    { word: "JavaScript", hint: "Programming language for web development" },
    { word: "Python", hint: "High-level, versatile programming language" },
    { word: "C", hint: "Low-level, structured programming language" },
    { word: "C++", hint: "Object-oriented version of C" },
    { word: "Java", hint: "Object-oriented programming language" },
    { word: "Ruby", hint: "Dynamic, object-oriented language" },
    { word: "PHP", hint: "Server-side scripting language" },
    { word: "Perl", hint: "High-level, general-purpose language" },
    { word: "Swift", hint: "Language for iOS and macOS apps" },
    { word: "Kotlin", hint: "Modern language for Android development" },
    { word: "Go", hint: "Compiled language for efficient applications" },
    { word: "Rust", hint: "Memory-safe language for performance" },
    { word: "SQL", hint: "Language for managing databases" },
    { word: "NoSQL", hint: "Non-relational database type" },
    { word: "MongoDB", hint: "A NoSQL document database" },
    { word: "JSON", hint: "Data format using key-value pairs" },
    { word: "XML", hint: "Extensible Markup Language" },
    { word: "YAML", hint: "Human-readable data serialization" },
    { word: "Git", hint: "Version control system for developers" },
    { word: "GitHub", hint: "Platform for hosting code repositories" },
    { word: "Repository", hint: "A storage location for project files" },
    { word: "Merge", hint: "Combining code changes from branches" },
    { word: "REST API", hint: "Architectural style for web services" },
    { word: "GraphQL", hint: "Query language for APIs" },
    { word: "Debugger", hint: "Tool for finding and fixing bugs" },
    { word: "DOM", hint: "Document Object Model for web structure" },
    { word: "Callback", hint: "Function passed as an argument" },
    { word: "Promise", hint: "Proxy for a value not yet computed" },
    { word: "Lambda", hint: "Anonymous function in programming" },
    { word: "Tuple", hint: "Immutable ordered collection in Python" },
    { word: "Constructor", hint: "Method to initialize objects" },
    { word: "Destructor", hint: "Method to clean up objects" },
    { word: "Framework", hint: "Structure for developing applications" },
    { word: "Package", hint: "A module with reusable code" },
    { word: "Saree", hint: "Traditional Indian women's attire" },
    { word: "Kurta", hint: "A loose shirt worn by men and women in India" },
    { word: "Bindi", hint: "A decorative mark worn on the forehead" },
    { word: "Namaste", hint: "A traditional Indian greeting" },
    { word: "Yoga", hint: "A spiritual and physical practice from India" },
    { word: "Diwali", hint: "Festival of lights celebrated in India" },
    { word: "Holi", hint: "Festival of colors in India" },
    { word: "Kathak", hint: "A classical Indian dance form" },
    { word: "Bharatanatyam", hint: "A traditional dance from Tamil Nadu" },
    { word: "Tabla", hint: "Indian percussion instrument" },
    { word: "Raga", hint: "A framework for Indian classical music" },
    { word: "Mysore Pak", hint: "A traditional Indian sweet" },
    { word: "Banarasi", hint: "Famous silk saree from Varanasi" },
    { word: "Mehndi", hint: "Henna art applied on hands and feet" },
    { word: "Pongal", hint: "A harvest festival celebrated in Tamil Nadu" },
    { word: "Onam", hint: "A harvest festival in Kerala" },
    { word: "Ayurveda", hint: "Ancient Indian system of medicine" },
    { word: "Taj Mahal", hint: "Iconic monument in India" },
    { word: "Chai", hint: "Indian-style tea" },
    { word: "Dosa", hint: "A South Indian savory dish" },
    { word: "Vada Pav", hint: "Popular street food in Maharashtra" },
    { word: "Rangoli", hint: "Decorative art made during festivals" },
    { word: "Punjabi", hint: "Vibrant culture from Punjab" },
    { word: "Garba", hint: "A traditional dance from Gujarat" },
    { word: "Kumbh Mela", hint: "Largest religious gathering in India" },
    { word: "Ganesha", hint: "Hindu deity of wisdom" },
    { word: "Sitar", hint: "Indian stringed musical instrument" },
    { word: "Ghoomar", hint: "Folk dance from Rajasthan" },
    { word: "Sanskrit", hint: "Ancient Indian language" },
    { word: "Kashmiri", hint: "Culture from the valley of Kashmir" },
    { word: "Dhoti", hint: "Traditional Indian men’s garment" },
    { word: "Shawl", hint: "Woolen wrap from Kashmir" },
    { word: "Bangles", hint: "Traditional ornaments for women" },
    { word: "Karma", hint: "Concept of cause and effect in Indian philosophy" },
    { word: "Masala", hint: "A blend of spices in Indian cooking" },
    { word: "Vindaloo", hint: "A spicy curry dish" },
    { word: "Jalebi", hint: "A popular Indian sweet" },
    { word: "Lassi", hint: "Yogurt-based Indian drink" },
    { word: "Mango", hint: "National fruit of India" },
    { word: "Peacock", hint: "National bird of India" },
    { word: "Ganges", hint: "A sacred river in India" },
    { word: "Khadi", hint: "Handwoven Indian fabric" },
    { word: "Gurudwara", hint: "Place of worship for Sikhs" },
    { word: "Mughal", hint: "Dynasty that ruled India for centuries" },
    { word: "Kolkata", hint: "Known as the cultural capital of India" },
    { word: "Samosa", hint: "A triangular Indian snack" },
    { word: "Chutney", hint: "A condiment used in Indian cuisine" },
    { word: "Kurta-Pajama", hint: "Traditional men’s attire" },
    { word: "Bhajan", hint: "Devotional song in Hindu culture" },
    { word: "Ghee", hint: "Clarified butter used in Indian cooking" },
    { word: "Photoshop", hint: "Software for editing images" },
    { word: "Excel", hint: "Spreadsheet software by Microsoft" },
    { word: "PowerPoint", hint: "Software for creating presentations" },
    { word: "Word", hint: "Microsoft’s word processing software" },
    { word: "Visual Studio", hint: "IDE for software development" },
    { word: "AutoCAD", hint: "Software for drafting and designing" },
    { word: "Premiere Pro", hint: "Video editing software by Adobe" },
    { word: "Linux", hint: "Open-source operating system" },
    { word: "Windows", hint: "Popular operating system by Microsoft" },
    { word: "macOS", hint: "Operating system for Apple computers" },
    { word: "Android Studio", hint: "IDE for Android app development" },
    { word: "Xcode", hint: "IDE for iOS development" },
    { word: "GitLab", hint: "Version control platform" },
    { word: "Docker", hint: "Platform for containerizing applications" },
    { word: "Kubernetes", hint: "Software for container orchestration" },
    { word: "Slack", hint: "Team communication software" },
    { word: "Zoom", hint: "Video conferencing application" },
    { word: "Teams", hint: "Collaboration platform by Microsoft" },
    { word: "Photoshop Elements", hint: "Simplified version of Photoshop" },
    { word: "Outlook", hint: "Email client by Microsoft" },
    { word: "Skype", hint: "Video and voice calling software" },
    { word: "Notepad++", hint: "Lightweight text editor" },
    { word: "Sublime Text", hint: "Text editor for code" },
    { word: "Eclipse", hint: "IDE for Java development" },
    { word: "IntelliJ IDEA", hint: "IDE for Java and Kotlin" },
    { word: "PyCharm", hint: "IDE for Python development" },
    { word: "React", hint: "JavaScript library for UI development" },
    { word: "Angular", hint: "Framework for building web apps" },
    { word: "Vue.js", hint: "Lightweight JavaScript framework" },
    { word: "Jupyter", hint: "Notebook for Python programming" },
    { word: "TensorFlow", hint: "Library for machine learning" },
    { word: "PyTorch", hint: "Deep learning framework" },
    { word: "Figma", hint: "Tool for UI and UX design" },
    { word: "Canva", hint: "Simplified graphic design software" },
    { word: "WordPress", hint: "CMS for building websites" },
    { word: "Shopify", hint: "Platform for e-commerce websites" },
    { word: "MySQL", hint: "Relational database management system" },
    { word: "PostgreSQL", hint: "Advanced open-source database" },
    { word: "MongoDB", hint: "NoSQL database system" },
    { word: "Oracle", hint: "Enterprise database management system" },
    { word: "Salesforce", hint: "CRM software for businesses" },
    { word: "Tableau", hint: "Software for data visualization" },
    { word: "SPSS", hint: "Statistical analysis software" },
    { word: "MATLAB", hint: "Software for numerical computing" },
    { word: "Unity", hint: "Game development platform" },
    { word: "Unreal Engine", hint: "Game development framework" },
    { word: "Procreate", hint: "Digital art software for iPads" },
    { word: "Lightroom", hint: "Software for photo editing" },
    { word: "DaVinci Resolve", hint: "Video editing software" },
    { word: "CorelDRAW", hint: "Graphic design software" }
];
