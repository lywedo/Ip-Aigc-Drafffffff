import "./App.css";
import { Generate, Home, Preview, Gallery } from "./pages";

function App() {

  return (
     <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="generate" element={<Generate />} />
          <Route path="preview" element={<Preview />}>
            <Route path="gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
