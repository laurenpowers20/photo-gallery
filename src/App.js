import "./App.css";
import Photos from "./Photos";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Photo Gallery with Modal</h1>
      <Photos />{" "}
      <div className="back-button-div">
        <a
          href="https://react-portfolio-lauren-powers.netlify.app/features"
          rel="noreferrer"
        >
          <button className="button-54">Back to Lil' Portfolio </button>{" "}
        </a>{" "}
      </div>
    </>
  );
}

export default App;
