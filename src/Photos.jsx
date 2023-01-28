import unisphere from "./images/unisphere.jpeg";
import pizza from "./images/pizza.jpeg";
import rockstar from "./images/rockstar.jpeg";
import skull from "./images/skull.jpeg";
import ramen from "./images/ramen.jpeg";
import llama from "./images/llama.jpeg";
import Gallery from "./Gallery";

function Photos() {
  //Define your image objects. You can use external links as well, but I like to to use an object literal here.
  const galleryImages = [
    {
      img: `${unisphere}`,
      caption: "Unisphere",
    },
    {
      img: `${pizza}`,
      caption: "Pizza om nom nom",
    },
    {
      img: `${rockstar}`,
      caption: "I'm here for the show",
    },
    {
      img: `${skull}`,
      caption: "I feel so alive",
    },
    {
      img: `${ramen}`,
      caption: "Noodles rule",
    },
    {
      img: `${llama}`,
      caption: "Which way to Machu Picchu?",
    },
  ];

  return (
    <>
      <main>
        {" "}
        <Gallery galleryImages={galleryImages} />{" "}
      </main>
    </>
  );
}

export default Photos;
