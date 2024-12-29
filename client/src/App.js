import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// Correct import statement
import Home from "./pages/home/home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/login/New"
import { hotelInputs, roomInputs, userInputs } from "./formSource";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";


function App() {

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route
              path="new"
              element={
                <ProtectedRoute>
                  <New inputs={userInputs}  />
                </ProtectedRoute>
              }
            />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


