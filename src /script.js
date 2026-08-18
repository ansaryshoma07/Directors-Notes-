// ------------------------------
// FILM DATA
// ------------------------------

const films = [
  {
    title: "Flavour of the Month",
    filmmaker: "Nathan Xia",
    form: "Narrative",
    subject: "Relationships",
    country: "USA",
    runtime: 13,
    year: 2025
  },

  {
    title: "Born To Hustle",
    filmmaker: "Grace Anna Cardona",
    form: "Documentary",
    subject: "Creativity",
    country: "Australia",
    runtime: 26,
    year: 2024
  },

  {
    title: "Babyface",
    filmmaker: "Sacha Beeley",
    form: "Animation",
    subject: "Imagination",
    country: "UK",
    runtime: 6,
    year: 2026
  },

  {
    title: "Human Trials",
    filmmaker: "Guilherme Proença",
    form: "Experimental",
    subject: "Perfection",
    country: "",
    runtime: 0,
    year: 2026
  },

  {
    title: "Rainbow Girls",
    filmmaker: "Nana Duffuor",
    form: "Live Action",
    subject: "Inequality",
    country: "USA",
    runtime: 16,
    year: 2025
  },

  {
    title: "Figlie di Partenope",
    filmmaker: "Lorenz Klapfer",
    form: "Documentary",
    subject: "Gender Identity",
    country: "Italy",
    runtime: 0,
    year: 2026
  },

  {
    title: "Seed",
    filmmaker: "Cameron Macgowan",
    form: "Live Action",
    subject: "Environment",
    country: "Australia",
    runtime: 0,
    year: 2026
  },

  {
    title: "Ternura",
    filmmaker: "Rachel McDonald",
    form: "Live Action",
    subject: "Resistance",
    country: "UK",
    runtime: 0,
    year: 2026
  }
];


// ------------------------------
// SELECT ELEMENTS FROM HTML
// ------------------------------

const filmGrid = document.querySelector("#film-grid");
const programmeCount = document.querySelector("#programme-count");
const programmeRuntime = document.querySelector("#programme-runtime");
const programmeFeedback = document.querySelector("#programme-feedback");
const programmeList = document.querySelector("#programme-list");
const formFilter = document.querySelector("#form-filter");
const guestFilmForm = document.querySelector("#guest-film-form");
const formMessage = document.querySelector("#form-message");
const filmCount = document.querySelector("#film-count");


// ------------------------------
// DISPLAY FILM CARDS
// ------------------------------

function displayFilms(filmsToDisplay) {

  filmGrid.innerHTML = "";

  filmsToDisplay.forEach(function (film) {

    const filmCard = document.createElement("article");

    filmCard.className = "film-card";

    // Store information on the card so the filter
    // and programme functions can use it.
    filmCard.dataset.form = film.form;
    filmCard.dataset.runtime = film.runtime;

    const form = document.createElement("p");
    form.className = "film-meta";
    form.textContent = film.form;

    const title = document.createElement("h3");
    title.textContent = film.title;

    const filmmaker = document.createElement("p");
    filmmaker.textContent = "By " + film.filmmaker;

    const subject = document.createElement("p");
    subject.textContent = "Subject: " + film.subject;

    const details = document.createElement("p");
    details.className = "film-meta";

    if (film.runtime > 0) {
      details.textContent =
        film.country + " · " +
        film.runtime + " min · " +
        film.year;
    } else {
      details.textContent =
        film.country + " · " +
        film.year;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Add to programme";

    filmCard.appendChild(form);
    filmCard.appendChild(title);
    filmCard.appendChild(filmmaker);
    filmCard.appendChild(subject);
    filmCard.appendChild(details);
    filmCard.appendChild(button);

    filmGrid.appendChild(filmCard);
  });

  if (filmCount) {
    filmCount.textContent = `${filmsToDisplay.length} films`;
  }
}


// Display the films when the page loads
displayFilms(films);


// ------------------------------
// FILM CARD BUTTONS
// ------------------------------

// Event delegation means that the same listener
// also works for newly created guest films.

filmGrid.addEventListener("click", function (event) {

  if (event.target.matches("button")) {

    const filmCard = event.target.closest(".film-card");

    filmCard.classList.toggle("film-card--selected");

    updateProgramme();
  }
});


// ------------------------------
// PROGRAMME FUNCTION
// ------------------------------

function updateProgramme() {

  const filmCards = document.querySelectorAll(".film-card");

  const selectedCards =
    document.querySelectorAll(".film-card--selected");

  let totalRuntime = 0;

  programmeList.innerHTML = "";


  filmCards.forEach(function (card) {

    const button = card.querySelector("button");

    const isSelected =
      card.classList.contains("film-card--selected");

    button.textContent = isSelected
      ? "Remove from programme"
      : "Add to programme";
  });


  selectedCards.forEach(function (card) {

    totalRuntime += Number(card.dataset.runtime);

    const listItem = document.createElement("li");

    listItem.textContent =
      card.querySelector("h3").textContent;

    programmeList.appendChild(listItem);
  });


  programmeCount.textContent =
    selectedCards.length;

  programmeRuntime.textContent =
    totalRuntime;


  programmeFeedback.className =
    "programme-feedback";


  if (selectedCards.length === 0) {

    programmeFeedback.textContent =
      "Choose a film to begin.";

  } else if (totalRuntime < 30) {

    programmeFeedback.textContent =
      "Keep building: the programme is under 30 minutes.";

  } else if (totalRuntime <= 45) {

    programmeFeedback.textContent =
      "Ready to screen: the programme is within the target.";

    programmeFeedback.classList.add(
      "programme-feedback--ready"
    );

  } else {

    programmeFeedback.textContent =
      "Consider removing a film: the programme is over 45 minutes.";

    programmeFeedback.classList.add(
      "programme-feedback--long"
    );
  }
}


// ------------------------------
// FORM FILTER
// ------------------------------

formFilter.addEventListener("change", function () {

  const selectedForm =
    formFilter.value;

  const filmCards =
    document.querySelectorAll(".film-card");


  filmCards.forEach(function (card) {

    card.hidden =
      selectedForm !== "all" &&
      card.dataset.form !== selectedForm;
  });
});


// ------------------------------
// GUEST FILM FORM
// ------------------------------

guestFilmForm.addEventListener("submit", function (event) {

  event.preventDefault();


  const titleInput =
    document.querySelector("#guest-title");

  const runtimeInput =
    document.querySelector("#guest-runtime");


  const title =
    titleInput.value.trim();

  const runtime =
    Number(runtimeInput.value);


  if (
    title === "" ||
    runtime < 1 ||
    runtime > 60
  ) {

    formMessage.textContent =
      "Enter a title and a runtime between 1 and 60 minutes.";

    return;
  }


  // Create a new film card

  const filmCard =
    document.createElement("article");

  filmCard.className =
    "film-card";


  filmCard.dataset.form =
    "guest";

  filmCard.dataset.runtime =
    runtime;


  const metadata =
    document.createElement("p");

  metadata.className =
    "film-meta";

  metadata.textContent =
    "Guest film · " + runtime + " min";


  const heading =
    document.createElement("h3");

  heading.textContent =
    title;


  const description =
    document.createElement("p");

  description.textContent =
    "A fictional guest film added during this session.";


  const button =
    document.createElement("button");

  button.type =
    "button";

  button.textContent =
    "Add to programme";


  filmCard.appendChild(metadata);
  filmCard.appendChild(heading);
  filmCard.appendChild(description);
  filmCard.appendChild(button);


  filmGrid.appendChild(filmCard);


  guestFilmForm.reset();


  formMessage.textContent =
    "Guest film added: " + title;
});

        



