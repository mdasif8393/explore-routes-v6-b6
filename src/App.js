import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Main from "./layout/Main";
import Friends from "./components/Friends/Friends";
import FriendDetails from "./components/FriednDetails/FriendDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "home", element: <Home></Home> },
        { path: "about", element: <About></About> },
        { path: "products", element: <Products></Products> },
        { path: "friends", 
        loader: async () => {
          return fetch('https://jsonplaceholder.typicode.com/users')
        },
        element: <Friends></Friends> 
      },
      {path: "friends/friend/:id",
      loader: async ({params}) => {return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)},
       element: <FriendDetails></FriendDetails>},
      ],
    },
    {path: "*", element: <div>No route found. 404..</div>},
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
