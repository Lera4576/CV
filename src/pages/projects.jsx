import React from 'react';

const Projects = () => {
    const projects = [
      {
        title: "TODOList",
        description: (
          <div>
            <p className="mb-4">
              An application where you can create a note with a description. If necessary, the note can be deleted or edited.
            </p>
            <p className="text-sm text-gray-500">
              HTML, CSS, React
            </p>
          </div>
        ),
        staticImage: (
          <a href="https://github.com/Lera4576/TODOList" target="_blank" rel="noopener noreferrer">
            <img src="https://github.com/Lera4576/TODOList/blob/main/todo.gif?raw=true" alt="TODOList GIF" />
          </a>
        ),
      },
      {
        title: "Todoist",
        description: (
          <div>
            <p className="mb-4">
            In this application you can create notes, edit and delete them. 
            You can specify the urgency of your note and filter the created notes. 
            The application has a button to generate 15 notes for convenient testing
            </p>
            <p className="text-sm text-gray-500">
              HTML, CSS, React
            </p>
          </div>
        ),
        staticImage: (
          <a href="https://github.com/Lera4576/Todoist" target="_blank" rel="noopener noreferrer">
            <img src="https://github.com/Lera4576/Todoist/blob/main/todoist.gif?raw=true" alt="Todo GIF" />
          </a>
        ),
      },
      {
        title: "Lamoda",
        description: (
          <div>
            <p className="mb-4">
            In this application you can find the product you need. Filtering by color and price will help you with this, as well as a search field by name
            </p>
            <p className="text-sm text-gray-500">
              HTML, CSS, React
            </p>
          </div>
        ),
        staticImage: (
          <a href="https://github.com/Lera4576/lamoda" target="_blank" rel="noopener noreferrer">
            <img src="https://github.com/Lera4576/lamoda/blob/main/lamoda.gif?raw=true" alt="lamoda GIF" />
          </a>
        ),
      },
      {
        title: "Api",
        description: (
          <div>
            <p className="mb-4">
            The application is designed to store albums. You can view both your albums and albums of other users
            </p>
            <p className="text-sm text-gray-500">
              HTML, CSS, React
            </p>
          </div>
        ),
        staticImage: (
          <a href="https://github.com/Lera4576/api" target="_blank" rel="noopener noreferrer">
            <img src="https://github.com/Lera4576/api/blob/main/api.gif?raw=true" alt="api GIF" />
          </a>
        ),
      },
      {
        title: "Notion",
        description: (
          <div>
            <p className="mb-4">
            A multi-page application where you can create, edit and delete notes
            </p>
            <p className="text-sm text-gray-500">
              Tailwind, React, Redux
            </p>
          </div>
        ),
        staticImage: (
          <a href="https://github.com/Lera4576/notion" target="_blank" rel="noopener noreferrer">
            <img src="https://github.com/Lera4576/notion/blob/main/notion.gif?raw=true" alt="Task Tracker GIF" />
          </a>
        ),
      }
    ];
  
    return (
      <div id="projects" className="p-6">
        <h2 className="text-2xl font-semibold mb-2 bg-blue-100 p-2">Projects</h2> {/* Удален класс rounded-l-lg */}
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold">{project.title}</h3>
            {project.description}
            <div className="mt-2">
              {project.staticImage}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Projects;