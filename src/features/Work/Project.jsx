// styles
import './Project.scss'

function Project({data}) {
    return (
        <div 
            key={data}
            className="project"
        >

            <div className="project__img">

            </div>
            
            <p className="project__name">
                {data}
            </p>
   
        </div>
    )
}

export default Project