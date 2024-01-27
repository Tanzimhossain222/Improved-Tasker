const data = [
    {
        id: crypto.randomUUID(),
        title: "Integration API",
        description: "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
        tags: ["Web", "Python", "API"],
        priority: "High",
        isFav: true
    },
    {
        id: crypto.randomUUID(),
        title: "API Data Synchronization with Python",
        description: "Implement a Python solution to synchronize data between an API and a third-party database securely, optimizing data exchange.",
        tags: ["Python", "API", "Data Synchronization"],
        priority: "High",
        isFav: false
    },
    {
        id: crypto.randomUUID(),
        title: "Efficient Web API Connectivity in Python",
        description: "Develop a Python-based solution for connecting an API to a third-party database securely, focusing on efficient data handling and exchange.",
        tags: ["Web", "Python", "API"],
        priority: "High",
        isFav: true
    },
    {
        id: crypto.randomUUID(),
        title: "Data Handling",
        description: "Integrate a web API with a third-party database using secure methods, focusing on seamless data exchange and data integrity.",
        tags: ["Web", "Python", "Security", "API"],
        priority: "High",
        isFav: false
    },
    {
        id: crypto.randomUUID(),
        title: "Data Exchange",
        description: "Develop a Python-based solution for connecting an API to a third-party database securely, focusing on efficient data handling and exchange.",
        tags: ["Web", "Python", "API", "Data Exchange"],
        priority: "High",
        isFav: true
    }
];

function getTasks() {
    return data;
}

export default getTasks;
