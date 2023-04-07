import WorkCard from "./work-card"

export default function WorkExperience({isSame,work}){
    return(
        <div className="bg-white shadow rounded-lg overflow-hidden mt-6">
          <div className="px-6 py-4">
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
              <p>{isSame && <i className="fa-solid fa-pen-to-square"></i>}</p>
            </div>
            {/* experience */}
            {work.map((workExp)=>{
                return <WorkCard key={workExp} workExp={workExp}/>
            })}
            

            
          </div>
        </div>
    )
}