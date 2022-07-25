import PaginaInicial from "./PaginaInicial";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Flashcards from "./Cards/Flashcards"

export default function App () {


    return (

        <BrowserRouter>

          <Routes>

            <Route path="/" element={<PaginaInicial />} />
            <Route path="/cards" element={<Flashcards />} />
          </Routes>

        </BrowserRouter>
    )

}

