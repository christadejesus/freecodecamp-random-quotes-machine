import "./styles/App.css";
import { useState } from "react";
import { RiTwitterLine, RiDoubleQuotesL } from "react-icons/ri";

// Create array of objects to hold quote data
const data = [
  {
    text: "You either walk inside your story and own it, or you stand outside your story and hustle for your worthiness.",
    author: "Brené Brown",
  },
  {
    text: "Doing your best at this moment puts you in the best place for the next moment.",
    author: "Oprah Winfrey",
  },
  {
    text: "When your passion and drive are bigger than your fears, you just dive.",
    author: "Viola Davis",
  },
  {
    text: "When people show you who they are... believe them!",
    author: "Oprah Winfrey",
  },
  {
    text: "Once you figure out what respect tastes like, it tastes better than attention.",
    author: "Pink",
  },
  {
    text: "Vulnerability is not winning or losing; it's having the courage to show up and be seen when we have no control over the outcome.",
    author: "Brené Brown",
  },
  {
    text: "Do what you have to do until you can do what you want to do.",
    author: "Oprah Winfrey",
  },
  {
    text: "I don't have any time to stay up all night worrying about what someone who doesn't love me has to say about me.",
    author: "Viola Davis",
  },
  {
    text: "The only thing that will make you happy is being happy with who you are, and not who people think you are.",
    author: "Goldie Hawn",
  },
  {
    text: "We need to be selective about the feedback we let into our lives. For me, if you're not in the arena also getting your ass kicked I'm not interested in your feedback.",
    author: "Brené Brown",
  },
];

// Create array of objects to hold colors
const colorPalettes = [
  { color: "#5F0F40" },
  { color: "#9A031E" },
  { color: "#00635D" },
  { color: "#E36414" },
  { color: "#0F4C5C" },
];

const getRandomQuote = () => Math.floor(Math.random() * data.length);
const getRandomColor = () => Math.floor(Math.random() * colorPalettes.length);

//main component
const RandomQuotesComponent = () => {
  // Declare stateful variables
  const [quote, setQuote] = useState(data[getRandomQuote()]);
  const [palette, setPalette] = useState(colorPalettes[getRandomColor()]);

  const urlTwitter = `https://www.twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`;

  //function to handle click event
  function handleClick() {
    setQuote(data[getRandomQuote()]);
    setPalette(colorPalettes[getRandomColor()]);
  }

  return (
    <div className="container" style={{ background: palette.color }}>
      <div id="quote-box">
        <div className="quote-flex">
          <p id="text">
            <RiDoubleQuotesL
              className="quote-icon ri-double-quotes-l"
              style={{ color: palette.color }}
            />
            {quote.text}
          </p>
          <p id="author">- {quote.author}</p>
        </div>
        <div className="button-flex">
          <button
            className="btn"
            id="new-quote"
            onClick={handleClick}
            style={{ background: palette.color }}
          >
            New quote
          </button>
          <a href={urlTwitter} target="_top" id="tweet-quote">
            <RiTwitterLine
              className="social-btn ri-twitter-line"
              style={{ background: palette.color }}
            />
          </a>
        </div>
      </div>
      <footer>
        <p>by Christa DeJesus</p>
      </footer>
    </div>
  );
};

export default RandomQuotesComponent;
