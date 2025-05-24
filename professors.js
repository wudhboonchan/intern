const professors = {
  "Prof. Dr. Pavel Rawe": {
    email: "Pavel.Rawe@hs-furtwangen.de",
    office: "I 2.08",
    teachingAreas: [
      "eCommerce",
      "eMarketing",
      "Statistics / Market and Consumer Research"
    ],
    researchAreas: [
      "eCommerce",
      "eMarketing",
      "Cross-Channel Marketing",
      "CRM",
      "Business Intelligence and Data Mining",
      "Brand strategy and brand management",
      "Market and Consumer Research"
    ]
  },
  "Prof. Dr. Peter Schanbacher": {
    email: "Peter.Schanbacher@hs-furtwangen.de",
    office: "H 0.03",
    teachingAreas: [
      "Programing",
      "Data Science",
      "Machine Learning",
      "Financial Accounting"
    ],
    researchAreas: [
      "Machine Learning"
    ]
  },
  "Prof. Dr. Simon Albrecht": {
    email: "Simon.Albrecht@hs-furtwangen.de",
    office: "",
    teachingAreas: [
      "Business informatics",
      "Data Science",
      "Natural Language Processing"
    ],
    researchAreas: []
  },
  "Prof. Dr. Jochen Baier": {
    email: "Juergen.Anders@hs-furtwangen.de",
    office: "I 2.05, C 2.05",
    teachingAreas: [
      "Logistics and Supply Chain Management",
      "General Business Administration"
    ],
    researchAreas: [
      "Material flow simulation (cost simulation, process simulation)",
      "Transport logistics (long trucks, telematics-based parking reservation system for trucks)"
    ]
  },
  "Prof. Dr. Martin Buchheit": {
    email: "Martin.Buchheit@hs-furtwangen.de",
    office: "I 2.06",
    teachingAreas: [
      "Software Engineering",
      "Integration Engineering",
      "Model Driven Development"
    ],
    researchAreas: [
      "Software Engineering",
      "Model-Driven Development",
      "Enterprise Application Integration",
      "Application Platforms",
      "Security Aspects of Software Systems",
      "Knowledge Representation"
    ]
  },
  "Prof. Dr. Monika Frey-Luxemburger": {
    email: "Monika.Frey-Luxemburger@hs-furtwangen.de",
    office: "H 0.04",
    teachingAreas: [
      "Database Design",
      "Database Applications",
      "Business Intelligence",
      "Knowledge Management",
      "ERP Systems"
    ],
    researchAreas: [
      "Data, Information and Knowledge Management",
      "Database Systems",
      "Data warehouse (SAP BW, Oracle, SAS, Information Builders)",
      "SAP R/3"
    ]
  },
  "Prof. Dr. Eduard Heindl": {
    email: "Eduard.Heindl@hs-furtwangen.de",
    office: "I 2.02",
    teachingAreas: [
      "E-business Technologies",
      "E-business Application Systems",
      "Online Marketing",
      "Energy Supply",
      "Integration Engineering",
      "Artificial intelligence"
    ],
    researchAreas: [
      '<a href="http://eduard-heindl.de/energy-storage/" target="_blank">Energy Storage</a>',
      "Online Marketing Technologies with a focus on Google and Innovative Concepts",
      "Log file analysis, Internet statistics, shop and CMS systems"
    ]
  },
  "Prof. Dr. Martin Knahl": {
    email: "Martin.Knahl@hs-furtwangen.de",
    office: "C 2.05, I 2.01",
    teachingAreas: [
      "IT Service Management",
      "Network & System Management",
      "Computer networks",
      "System architectures"
    ],
    researchAreas: [
      "IT Service Management",
      "IT Governance",
      "Internet Governance",
      "Integrated Network and System Management",
      "Network Technologies and Services",
      "Computer Networks"
    ]
  },
  "Prof. Dr. Peter Mattheis": {
    email: "Peter.Mattheis@hs-furtwangen.de",
    office: "I 2.02",
    teachingAreas: [
      "Business Projects in SMEs/SMEs",
      "Business Consulting",
      "Standard Software Systems",
      "Organization"
    ],
    researchAreas: [
      "Business process management and compliance",
      "Standard software (SAP, Microsoft Dynamics)",
      "ISO Certification",
      "Management"
    ]
  },
  "Prof. Dr. Stefan Noll": {
    email: "Stefan.Noll@hs-furtwangen.de",
    office: "I 2.05",
    teachingAreas: [
      "Software Engineering",
      "Methods and Technologies of Software Development",
      "Web Programming",
      "Architecture of Distributed Systems",
      "Network design",
      "Development of Mobile Applications"
    ],
    researchAreas: [
      "Current Methods and Technologies of Software Development",
      "Internet, Web & Mobile Applications",
      "Digital Media",
      "Technology Transfer"
    ]
  },
  "Prof. Dr. Oliver Taminé": {
    email: "Oliver.Tamine@hs-furtwangen.de",
    office: "I 2.09",
    teachingAreas: [
      "Internetworking",
      "Java Programming",
      "Business Software Engineering",
      "Mobile Applications"
    ],
    researchAreas: [
      "Mobile Computing",
      "Internet, Web Applications",
      "Distributed Architectures",
      "SAP Development"
    ]
  },
  "Prof. Dr. Jürgen Weiner": {
    email: "Juergen.Weiner@hs-furtwangen.de",
    office: "I 2.01",
    teachingAreas: [
      "Business Process Optimization",
      "ERP system with focus on SAP S/4HANA",
      "Software development with focus on SAP/ABAP"
    ],
    researchAreas: [
      "Tools for Business Process Optimization (Process Mining, RPA – Robotic Process Automation, Chatbots)",
      "Introduction of Enterprise Software (ERP and Integrated Business Planning)",
      "Project Management Software Development"
    ]
  },
  "Prof. Dr. Holger Ziekow": {
    email: "Holger.Ziekow@hs-furtwangen.de",
    office: "H 0.04",
    teachingAreas: [
      "Business Intelligence",
      "Software Architecture",
      "Introduction to Business Informatics",
      "Business Mthematics and Statistics"
    ],
    researchAreas: [
      "Explainable AI (XAI)",
      "Data Science in Production and Medicine",
      "Machine Learning: Among Others Predictive Analytics with Sensor Data and Data Streams, AutoML",
      "Big Data: Especially Architectures and Basic Technologies",
      "Complex Event Processing and Stream Processing: Real-time evaluation of sensor data and process information as well as associated optimization techniques",
      "RFID and Sensor Networks: Middleware and Applications in Logistics, Production and Smart Grid"
    ]
  },
  "Prof. Dr. Ulf Schreier": {
    email: "Ulf.Schreier@hs-furtwangen.de",
    office: "C 2.09",
    teachingAreas: [
      "Data Structures",
      "Software Architectures",
      "Software Project Management"
    ],
    researchAreas: [
      "Access Control Models (ABAC4REST project)",
      "Software for Quality Management (FINQUAS project)",
      "Software Architectures"
    ]
  },
  "Prof. Dr. Guido Siestrup": {
    email: "Guido.Siestrup@hs-furtwangen.de",
    office: "I 2.06",
    teachingAreas: [
      "Logistics",
      "Supply Chain Management",
      "Business Process Management"
    ],
    researchAreas: [
      "Process-oriented Logistics Management",
      "Reference Models in Logistics",
      "Simulation of SCM Systems"
    ]
  }
};

const select = document.getElementById('professorSelect');
const display = document.getElementById('professorDetails');

// Populate dropdown
Object.keys(professors).forEach(name => {
  const option = document.createElement('option');
  option.value = name;
  option.textContent = name;
  select.appendChild(option);
});

// On selection change
select.addEventListener('change', () => {
  const selected = select.value;
  display.innerHTML = '';

  if (selected && professors[selected]) {
    const prof = professors[selected];
    display.innerHTML = `
      <h2>${selected}</h2>
      <p><strong>Email:</strong> <a href="mailto:${prof.email}">${prof.email}</a></p>
      <p><strong>Office:</strong> ${prof.office}</p>
      <p><strong>Teaching Areas:</strong></p>
      <ul>${prof.teachingAreas.map(item => `<li>${item}</li>`).join('')}</ul>
      <p><strong>Research Areas:</strong></p>
      <ul>${prof.researchAreas.map(item => `<li>${item}</li>`).join('')}</ul>
    `;
  }
});