import {RouterProvider} from "react-router-dom";
import {routers} from "./router/items";

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
