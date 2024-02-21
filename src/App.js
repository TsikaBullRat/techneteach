import { Landing, Home, About, Contacts, News, Store, Learning } from "./pages";
import store from "./components/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { gsap } from "gsap"
import "./App.css"
import { Nav, Footer } from "./components";

//This is a change added
//Here is a second comment

const router = createBrowserRouter([
  {
    path: "/landing",
    element: <Landing/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/contacts",
    element: <Contacts/>
  },
  {
    path: "/news",
    element: <News/>
  },
  {
    path: "/store",
    element: <Store/>
  },
  {
    path: "/learning",
    element: <Learning/>
  },
]) 

function App() {
  return (
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider >
  )
}

export default App;
