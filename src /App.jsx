import { useState } from "react";

import SiteHeader from "./components/SiteHeader.jsx";
import ProgrammeSummary from "./components/ProgrammeSummary.jsx";
import FilmCard from "./components/FilmCard.jsx";
import SiteFooter from "./components/SiteFooter.jsx";

function App() {
  const [films] = useState([
    {
      title: "Flavour of the Month",
      filmmaker: "Nathan Xia",
      form: "Live Action",
      subject: "Coming of Age",
      country: "United Kingdom",
      runtime: 10,
      year: 2026,
    },
    {
      title: "Born to Hustle",
      filmmaker: "Nana Duffuor",
      form: "Live Action",
      subject: "Ambition",
      country: "United States",
      runtime: 15,
      year: 2026,
    },
    {
      title: "Babyface",
      filmmaker: "Unknown",
      form: "Animation",
      subject: "Identity",
      country: "United Kingdom",
      runtime: 8,
      year: 2026,
    },
    {
      title: "Human Trials",
      filmmaker: "Unknown",
      form: "Documentary",
      subject: "Science",
      country: "United States",
      runtime: 18,
      year: 2026,
    },
    {
      title: "Rainbow Girls",
      filmmaker: "Unknown",
      form: "Live Action",
      subject: "Friendship",
      country: "Ireland",
      runtime: 12,
      year: 2026,
    },
    {
      title: "Figlie Di Partenope",
      filmmaker: "Lorenz Klapfer",
      form: "Documentary",
      subject: "Culture",
      country: "Italy",
      runtime: 14,
      year: 2026,
    },
    {
      title: "Seed",
      filmmaker: "Cameron Macgowan",
      form: "Live Action",
      subject: "Nature",
      country: "Canada",
      runtime: 9,
      year: 2026,
    },
    {
      title: "Ternura",
      filmmaker: "Unknown",
      form: "Live Action",
      subject: "Family",
      country: "Spain",
      runtime: 11,
      year: 2026,
    },
  ]);

  return (
    <>
      <SiteHeader />

      <main>
        <ProgrammeSummary count={0} />

        <section>
          <div className="section-heading">
            <div>
              <p className="eyebrow">Film collection</p>
              <h2>Explore the films</h2>
            </div>

            <p>{films.length} films</p>
          </div>

          <div className="film-grid">
            {films.map((film) => (
              <FilmCard
                key={film.title}
                title={film.title}
                filmmaker={film.filmmaker}
                form={film.form}
                subject={film.subject}
                country={film.country}
                runtime={film.runtime}
                year={film.year}
              />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

export default App;