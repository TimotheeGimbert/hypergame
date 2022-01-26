import { header, footer } from './componentsDOM';
import { pageDetailLoading } from './pageDetailDOM';
export { PageDetail };

const PageDetail = (argument) => {

  const preparePage = () => {

    const displayGame = (gameData) => {
      const { name, released, description } = gameData;
      const articleDOM = document.querySelector(".page-detail .article");
      articleDOM.querySelector("h1.title").innerHTML = name;
      articleDOM.querySelector("p.release-date span").innerHTML = released;
      articleDOM.querySelector("p.description").innerHTML = description;
    };

    const fetchGame = (url, argument) => {
      fetch(`${url}/${argument}?key=${process.env.API_KEY}`)
        .then((response) => response.json())
        .then((responseData) => {
          displayGame(responseData);
        });
    };
    
    const cleanedArgument = argument.replace(/\s+/g, "-");
    fetchGame('https://api.rawg.io/api/games', cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = 
      header()
    + pageDetailLoading()
    + footer();

    preparePage();
  };

  render();
};