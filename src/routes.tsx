// Page-komponenter
import Home from "./pages/Home.tsx";
import Card from "./pages/DetailedCard.tsx";
import Login from "./pages/Login.tsx";
import Profile from "./pages/Profile.tsx";

//Loaders
import pokemonCardsLoader from "./utils/pokemonCardsLoader.ts";
import pokemonCardByIdLoader from "./utils/pokemonCardByIdLoader.ts";

const routes = [
    {
        path: "/",
        element: <Home />,
        loader: pokemonCardsLoader
    },
    {
        path: "/card/:cardId",
        element: <Card />,
        loader: pokemonCardByIdLoader
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "*",
        element: <h1>Sorry! This page does not exist!</h1>
    },
]


export default routes 