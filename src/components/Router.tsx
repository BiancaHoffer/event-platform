import { Routes, Route } from "react-router-dom";
import { Event } from "../pages/Event";
import { Subscribre } from "../pages/Subscribre";

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<Subscribre />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  )
}