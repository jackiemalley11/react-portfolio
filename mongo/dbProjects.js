// drop collection if already exists
db.projects.drop();
// insert new documents into collection
db.projects.insert([
    {
        name: "Photo Album",
        description: "A collection of photos that can be navigated one at a time using next and previous buttons or an optional jump panel. Supports user comments with appropriate error checking.",
        tech: ["Typescript", "React", "Next-JS", "MySQL", "Tailwind"],
        loomVideoUrl:"https://www.loom.com/embed/476b8371ee364c7e96a0d0540c1e0fbe?sid=9469532f-0a8e-4ec4-b246-ccd9d33ea6ac"
      },
      {
        name: "LinkManager",
        description: "An application to organize links. It has a public view and a separate admin view controlled through login. In the admin view, links can be added, edited, deleted, and categories can be changed.",
        tech: ["C#", "JSON", "ASP.Net Core", "MySQL", "EFCore", "Bootstrap"],
        loomVideoUrl:"https://www.loom.com/embed/396df6cc0d974f8683376b6d6d846c17?sid=39b4557b-d392-4e52-8c67-608e24322e05"
      },
      {
        name: "Weather App",
        description: "A weather app that displays current weather conditions using data from the OpenWeatherMap API.",
        tech: ["JavaScript", "Cloudflare", "Open Weather Map API", "Erikflowers-weather-icons"],
        loomVideoUrl:"https://www.loom.com/embed/f57be6dbde8a417ebaa1551666fd32a1?sid=c32e761f-f2e6-4bec-bc55-b003f15f84cc"
      }
]);

db.experience.drop();

db.experience.insert([
  {
    front: "Web Development",
    back: ["Innovasea Summer Student/Software Engineering:", "Updated code base and implemented additional ESLint checking in GitHub platform to improve overall quality control of code." 
      , "Employed research and JavaScript skills to remove old Datetime library from code base and replace with more modern library."
      , "Using Angular framework, designed and coded a customer support page which required the display of multi-language documentations based on locale"
    ]
  },
  {
    front: "Freelance",
    back: ["East Hants Curling Association Website:", "Optimized and restructured the East Hants Curling Association's Google Site, creating a dual-site structure and providing training for ongoing maintenance."
      , "Alaswinew Veterinary Locum Website:", "Designed and launched a Google Site integrated with Squarespace for live hosting, ensuring seamless user experience and responsive design."
    ]
  },
  {
    front: "Leadership",
    back: ["ADP:", "Led and managed numerous associate teams across in-person, hybrid, and virtual environments.", "Facilitated team meetings and one-on-one coaching sessions to drive development and training."
      , "Mentored emerging leaders and trained new managers."
      , "Conducted STAR-model interviews to hire top candidates and build a cohesive team"
      ,	"Analyzed data, allocated workloads, and managed staffing to ensure timely, accurate payroll completion."
      ]
  },
  {
    front: "Customer Service",
    back: ["ADP:", "Researched, developed and implemented client-focused coding solutions to resolve internal cases.", 
      "Delivered lunch and learn sessions, developed associate job aids to reduce overall wait time on phone queues by sharing knowledge.",
      "Wrote internal programming code to update and create new features in client’s existing payroll setup.",  
      "Managed a portfolio of clients, providing timely and professional service by phone/ e-mail. Oversaw long-term projects and managed casework"
      
      ]
  }
]);
