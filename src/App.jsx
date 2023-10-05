import "./App.css";
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [bgMode, setbgMode] = useState("light");
  const [textMode, setTextMode] = useState("dark");
  const [modeName, setModeName] = useState("Dark");
  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert("null");
    }, 1500);
  };

  let toggleMode = () => {
    let words = document.querySelector(".Words");

    if (bgMode === "light") {
      setbgMode("dark"), setTextMode("light");
      setModeName("Light");
      document.body.style.backgroundColor = "#1B3B72";
      words.style.color = "white";
      showAlert("! Dark mode has been enabled", "success");
    } else {
      setbgMode("light"), setTextMode("dark"), setModeName("Dark");
      document.body.style.backgroundColor = "white";
      words.style.color = "black";
      showAlert("! Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        Home="Home"
        About="About"
        bgMode={bgMode}
        toggleMode={toggleMode}
        textMode={textMode}
        modeName={modeName}
      />
      <Alert alert={alert} />
        <div className="App my-3 mx-5">
          <Routes>
            <Route path='/' element={<TextForm
              heading="Enter the text here"
              textMode={textMode}
              Length="Length"
              TotalWords="Words"
              Preview="Preview"
              showAlert={showAlert}
            />}/>
            <Route path="/about" element={<About />}/>

          </Routes>
            {/* <TextForm
              heading="Enter the text here"
              textMode={textMode}
              Length="Length"
              TotalWords="Words"
              Preview="Preview"
              showAlert={showAlert}
            /> */}

            {/* <About /> */}

        </div>

    </>
  );
}

export default App;
