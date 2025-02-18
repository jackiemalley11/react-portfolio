// drop collection if already exists
db.projects.drop();
// insert new documents into collection
db.projects.insert([
    {
        name: "Photo Album",
        description: "A collection of photos that can be navigated one at a time using next and previous buttons or an optional jump panel. Supports user comments with appropriate error checking.",
        tech: ["Typescript", "React", "Next-JS", "MySQL", "Tailwind"]
      },
      {
        name: "LinkManager",
        description: "An application to organize links. It has a public view and a separate admin view controlled through login. In the admin view, links can be added, edited, deleted, and categories can be changed.",
        tech: ["C#", "JSON", "ASP.Net Core", "MySQL", "EFCore", "Bootstrap"]
      },
      {
        name: "Weather App",
        description: "A weather app that displays current weather conditions using data from the OpenWeatherMap API.",
        tech: ["JavaScript", "Cloudflare", "Open Weather Map API", "Erikflowers-weather-icons"]
      }
]);