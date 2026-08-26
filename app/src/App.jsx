import { useState } from 'react'
import './App.css'

function App() { 
  const [films] = useState([
    { 
      title: 'Flavour of the Month', 
      filmmaker: 'Nathan Xia', 
      form: 'Live Action', 
      subject: 'Coming of Age', 
      country: 'United Kingdom', 
      runtime: 10, 
      year: 2026
    }, 
    {
      title: 'Born to Hustle', 
      filmmaker: 'Nana Duffuor', 
      form: 'Live Action', 
      subject: 'Ambition', 
      country: 'United States', 
      runtime: 15, 
      year: 2026
    }, 
    { 
      title: 'Babyface', 
      filmmaker: 'Unknown', 
      form: 'Animation', 
      subject: 'Identify', 
      country: 'United Kingdom', 
      runtime: 8, 
      year: 2026
    }, 
    { 
      title: 'Human Trials', 
      filmmaker: 'Unknown', 
      form: 'Documentary', 
      subject: 'Science', 
      country: 'United States', 
      runtime: 18, 
      year: 2026
    }, 
    { 
      title: 'Rainbow Girls', 
      filmmaker: 'Unknown', 
      form: 'Live Action', 
      subject: 'Friendship', 
      country: 'Ireland', 
      runtime: 12, 
      year: 2026
    }, 
    { 
      title: 'Figlie Di Partenope', 
      filmmaker: 'Lorenz Klapfer', 
      form: 'Documentary', 
      subject: 'Culture', 
      country: 'Italy', 
      runtime: 14, 
      year: 2026
    }, 
    { 
      title: 'Seed', 
      filmmaker: 'Cameron Macgowan', 
      form: 'Live Action', 
      subject: 'Nature', 
      country: 'Canada', 
      runtime: 9, 
      year: 2026
    }, 
    { 
      title: 'Ternura', 
      filmmaker: 'Unknown', 
      form: 'Live Action', 
      subject: 'Family', 
      country: 'Spain', 
      runtime: 11, 
      year: 2026
    }
  ])

  return ( 
    <> 
    <header className="site-header"> 
      <p className="eyebrow">Directors-Notes</p>
      
      <h1>Find a short film to watch.</h1>
      
      <p> 
        Explore a small collection of short films using characteristics 
        such as form, subject, country, runtime and year. 
        </p>
        </header>

      <main> 
        <section> 
          <div className="section-heading"> 
            <div> 
              <p className="eyebrow">Film collection</p>
              <h2>Explore the films</h2> 
              </div>

              <p id="film-count"> 
                {films.length} films 
              </p>
            </div> 

            <div id="film-grid" className="film-grid"> 
              {films.map((film) => (
                <article className="film-card" key={film.title}> 
                  <h3>{film.title}</h3> 
                  
                  <p className="film-filmmaker">
                    {film.filmmaker}
                  </p>
                  
                  <p className="film-meta"> 
                    {film.form} · {film.country} · {film.year} 
                    </p>
                    
                  <p>{film.subject}</p>

                  <p className="film-runtime"> 
                    {film.runtime} minutes 
                  </p> 
                  </article>
                ))}
            </div>
          </section> 
        </main> 
    
        <footer> 
          <p>Directors-Notes</p> 
        </footer> 
       </> 
    ) 
  } 
    
    export default App


