import { } from "react"
import { gql, useQuery } from "@apollo/client"
import { Event } from "./pages/Event";
import { Router } from "./components/Router";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
   <BrowserRouter>
     <Router /> 
   </BrowserRouter>
  )
}

/*
CMS = Content Management System

wordpress = Traz painel ADMIN e front-end



Headless CMS (GrapHCMS): traz apenas painel ADMIN (front-end é fornecido através de uma API REAST ou GraphQl)

React que consome essa API do CMS

Vantagens: flexibilidade, usando a biblioteca, tema que quiser...

GrapHCMS: 

Operações:
- Query = buscar dados
- Mutation = criar, alterar ou deletar dados

para fazer chamada da API utilizamos apollo

*/

export default App
