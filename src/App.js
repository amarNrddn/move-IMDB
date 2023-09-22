import { BrowserRouter } from "react-router-dom";
import MAppRoute from "./routes/MAppRoute";

const App = () => {
  return (
    <BrowserRouter >
      <MAppRoute />
    </BrowserRouter>
  );
}

export default App;
