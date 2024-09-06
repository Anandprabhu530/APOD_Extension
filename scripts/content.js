console.log("Inside content");

const data = async () => {
  const res = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
  ).then((response) => response.json());
  console.log(res);
  document.body.style.backgroundImage = `url(${res.hdurl})`;
};

data();
