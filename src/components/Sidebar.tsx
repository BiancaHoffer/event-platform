import { Lesson } from "./Lesson";
import { gql, useQuery } from "@apollo/client"
import { useGetLessonsQuery } from "../graphql/generated";
import classNames from "classnames";

interface SidebarProps {
  setOpen: (state: boolean) => void;
  open: boolean;
}

export function Sidebar({open, setOpen}: SidebarProps){
  const { data } = useGetLessonsQuery()

  return(
    <div>
      {open ? 
        <aside className={classNames("h-full w-[348px] bg-gray-700 p-6 border-l border-gray-600 z-50", {
          'md:absolute right-0 h-full':open
        })}>
          

          <span className="font-bold text-2xl pb-6 mb-4 border-b border-gray-500 block">
            Cronograma de aulas
          </span>
          <div className="flex flex-col gap-8">
            {data?.lessons.map(lesson => {
              return (
                <Lesson
                  key={lesson.id}
                  title={lesson.title}
                  slug={lesson.slug}
                  availableAt={new Date(lesson.availableAt)}
                  type={lesson.lessonType}
                />
              )
            })}
          </div>
        </aside>
    :
      null
    }
    
   </div> 
  )
}
