import React from "react";
/* import memesData from "../memesData";*/

export default function Form() {
  const [meme, setMeme] = React.useState({
    memeUrl: "http://i.imgflip.com/1bij.jpg",
    topText: "",
    bottomText: "",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getRandomImage() {
    let randNum = Math.floor(Math.random() * 100) + 1;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        memeUrl: allMemes[randNum].url,
      };
    });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };

  return (
    <div className="form-container">
      <form className="form-inputs-container">
        <input
          type="text"
          name="topText"
          placeholder="top text"
          className="form-left-input"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bottomText"
          placeholder="bottom text"
          className="form-right-input"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </form>
      <button className="form-btn" onClick={getRandomImage}>
        Get a new meme image 🖼️
      </button>
      <div className="meme-container">
        <img src={meme.memeUrl} alt="meme" className="meme-image" />
        <h1 className="meme-top-text">
          {meme.topText === "" ? "Top text" : `${meme.topText}`}
        </h1>
        <h1 className="meme-bottom-text">
          {meme.bottomText === "" ? "Bottom text" : `${meme.bottomText}`}
        </h1>
      </div>
    </div>
  );
}
