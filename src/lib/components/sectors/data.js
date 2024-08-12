// data.js

export const categories = [
    { id: "B2B", label: "B2B" },
    { id: "B2C", label: "B2C" },
    { id: "Government", label: "Government" },
    { id: "Education", label: "Education" },
];

export const sectors = [
    { id: 1, label: "Engineering & Technology", category: "B2B", description: "Our platform empowers engineering and technology firms to model, simulate, and optimize complex systems, reducing development time and increasing efficiency in aerospace, automotive, and defense industries." },
    { id: 2, label: "Healthcare & Life Sciences", category: "B2B", description: "CASys.AI assists healthcare providers and pharmaceutical companies in drug discovery, patient care optimization, and healthcare system management." },
    { id: 3, label: "Finance & Insurance", category: "B2B", description: "Financial institutions can utilize our platform for risk assessment, portfolio optimization, and market trend analysis, enhancing decision-making processes." },
    { id: 4, label: "Manufacturing & Supply Chain", category: "B2B", description: "Optimize production processes, supply chain management, and logistics using our advanced modeling and simulation capabilities." },
    { id: 5, label: "Energy & Utilities", category: "B2B", description: "Improve energy distribution, optimize renewable energy systems, and enhance grid management with our AI-driven solutions." },
    { id: 6, label: "Personal Productivity", category: "B2C", description: "Individuals can use CASys.AI to optimize their daily routines, manage complex projects, and improve decision-making in personal and professional life." },
    { id: 7, label: "Health & Wellness", category: "B2C", description: "Our platform helps individuals manage their health, fitness routines, and wellness goals through personalized recommendations and tracking." },
    { id: 8, label: "Financial Planning", category: "B2C", description: "CASys.AI assists in personal financial planning, investment strategies, and budget optimization for individuals and families." },
    { id: 9, label: "Urban Planning", category: "Government", description: "Government agencies can use our platform for urban development, traffic management, and public service optimization." },
    { id: 10, label: "Environmental Management", category: "Government", description: "CASys.AI supports environmental conservation efforts, climate change mitigation strategies, and sustainable resource management." },
    { id: 11, label: "Public Policy", category: "Government", description: "Our platform aids in policy analysis, impact assessment, and decision-making processes for government officials and policymakers." },
    { id: 12, label: "Research Institutions", category: "Education", description: "Universities and research centers can leverage CASys.AI for complex system modeling, data analysis, and interdisciplinary research projects." },
    { id: 13, label: "Educational Management", category: "Education", description: "Optimize curriculum design, student performance tracking, and resource allocation in educational institutions." },
    { id: 14, label: "E-learning Platforms", category: "Education", description: "Enhance online learning experiences through personalized content recommendations and adaptive learning paths." },
];

export const links = [
    { source: "B2B", target: 1 },
    { source: "B2B", target: 2 },
    { source: "B2B", target: 3 },
    { source: "B2B", target: 4 },
    { source: "B2B", target: 5 },
    { source: "B2C", target: 6 },
    { source: "B2C", target: 7 },
    { source: "B2C", target: 8 },
    { source: "Government", target: 9 },
    { source: "Government", target: 10 },
    { source: "Government", target: 11 },
    { source: "Education", target: 12 },
    { source: "Education", target: 13 },
    { source: "Education", target: 14 },
];