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
    front: "Industry",
    back: "I was thrilled to have the opportunity to work with and learn from the talented developers at Innovasea this past summer. I gained experience with the Angular framework and acquired integral industry experience working with GitHub in a team environment. During my time with Innovasea I participated in weekly standups, supported the introduction of additional lint checks for quality control, transitioned an old datetime library, and started a new page for future integration into the application."
  },
  {
    front: "Independent",
    back: "In the past year I developed two different sites using Google's CMS. The first was on a volunteer basis for the East Hants Curling Association. I updated the existing site creating a public-facing side and a members-only section. This site is an ongoing project and will be undergoing further development at the end of the curling season. I also developed Alaswinew.com to support the opening of a new Veterinary Locum business."
  },
  {
    front: "Cross Functional",
    back: "Prior to making the switch to Web Development I held a 14-year career in the payroll industry. I worked for ADP, a large global national corporation, where I was first exposed to the world of programming. During my time I also held roles in customer service and leadership. I enjoy working with people as well as technology and developed the ability to translate client requests into code and communicate system functionality back to clients."
  }
]);
