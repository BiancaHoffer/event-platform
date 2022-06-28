import { useState } from "react"
import { useParams } from "react-router-dom"
import { Footer } from "../components/footer"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

export function Event(){
  const [open, setOpen] = useState(false);
  const { slug } = useParams<{ slug: string }>()

  return(
    <div className="flex flex-col min-h-screen">
      <Header setOpen={setOpen} open={open}/>
      <main className="flex flex-1">
        { slug 
          ? <Video lessonSlug={slug} /> 
          : <div className="flex-1 flex justify-center items-center">Clique para assistir uma aula</div>
        }
        <Sidebar setOpen={setOpen} open={open}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}