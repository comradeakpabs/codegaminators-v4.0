const requestSize = 9;

const URLS = Array(requestSize)
  .fill(requestSize)
  .map((_, index) => `https://picsum.photos/id/${index}/700`);

const validate = res => {
  if (!res.ok) throw Error(res.statusText);

  return res;
};

const getBlob = response => response.blob();

const render = responseAsBlob => {
  const src = URL.createObjectURL(responseAsBlob);
  const app = document.querySelector("#app");

  app.classList.add("flexbox");

  app.innerHTML += `
  <div class='card'>
    <img src=${src} />
    <span>This need a better design</span>
  </div>
  `;
};

const logger = err => console.error(err);

const renderImages = urls => {
  for (let url of urls) {
    fetch(url)
      .then(validate)
      .then(getBlob)
      .then(render)
      .catch(logger);
  }
};

window.addEventListener("load", renderImages(URLS));
