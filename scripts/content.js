console.log("Inside content");

const data = async () => {
  // try {
  //   let prev_day = localStorage.getItem("Day");
  //   if (prev_day) {
  //     const data = JSON.parse(prev_day);
  //     if (data.day === new Date(Date.now()).getDay()) {
  //       console.log(document.body);
  //       document.body.style.backgroundImage = `url(${data.hdurl})`;

  //       let text_display = document.getElementById("text_detail");
  //       console.log(text_display);
  //       text_display.innerHTML = data.explanation;

  //       let text_title = document.getElementById("text_title");
  //       text_title.innerHTML = data.title;
  //     }
  //   } else {
  //     const res = await fetch(
  //       "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
  //     ).then((response) => response.json());
  //     console.log(res);
  //     document.body.style.backgroundImage = `url(${res.hdurl})`;

  //     let text_display = document.getElementById("text_detail");
  //     text_display.innerHTML = res.explanation;

  //     let text_title = document.getElementById("text_title");
  //     text_title.innerHTML = res.title;
  //     const Day = {
  //       text_display: res.explanation,
  //       hdurl: res.hdurl,
  //       title: res.title,
  //       day: new Date(Date.now()).getDay(),
  //     };
  //     localStorage.setItem("Day", JSON.stringify(Day));
  //   }
  // } catch (err) {
  //   console.log(err);
  // }

  // const res = await fetch(
  //   "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
  // ).then((response) => response.json());

  const data = chrome.storage.local.get("Day");
  const res = await JSON.parse(data);

  document.body.style.backgroundImage = `url(${res.hdurl})`;
  let text_display = document.getElementById("text_detail");
  text_display.innerHTML = res.explanation;

  let text_title = document.getElementById("text_title");
  text_title.innerHTML = res.title;
  const Day = {
    text_display: res.explanation,
    hdurl: res.hdurl,
    title: res.title,
    day: new Date(Date.now()).getDay(),
  };

  //complete this
  chrome.storage.local.set();

  //bring back the try catch block
  //demo key is enough for production since we fetch only for one time a day
  //after that read from the chrome.storage
  //see docs
};

data();

/* sample output
{
  date: '2024-09-07',
  explanation: "Mars has two tiny moons, Phobos and Deimos, named for the figures in Greek mythology Fear and Panic. Detailed surface views of smaller moon 
Deimos are shown in both these panels. The images were taken in 2009, by the HiRISE camera on board the Mars Reconnaissance Orbiter spacecraft, NASA's long-lived interplanetary internet satellite. The outermost of the two Martian moons, Deimos is one of the smallest known moons in the Solar System, measuring only about 15 kilometers across.  Both Martian moons were discovered in 1877 by Asaph Hall, an American astronomer working at the US Naval Observatory in Washington D.C. But their existence was postulated around 1610 by Johannes Kepler, the astronomer who derived the laws of planetary motion. In this case, Kepler's prediction was not based on scientific principles, but his writings and ideas were so influential that the two Martian moons are discussed in works of fiction such as Jonathan Swift's Gulliver's Travels, written in 1726, over 150 years before their discovery.",
  hdurl: 'https://apod.nasa.gov/apod/image/2409/PIA11826.jpg',
  media_type: 'image',
  service_version: 'v1',
  title: 'Small Moon Deimos',
  url: 'https://apod.nasa.gov/apod/image/2409/PIA11826_c.jpg'
}
  */
