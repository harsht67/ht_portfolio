// styles
import './Project.scss'

import { useParams } from 'react-router'
import { useState, useEffect } from 'react'

import { client, urlFor } from '../../client'

function Project() {

    const { name } = useParams()

    const [project, setProject] = useState({})

    useEffect(() => {
        const query = '*[_type == "works"]'

        client
            .fetch(query)
            .then(data => {
                data.forEach(d => {
                    if(d.name==name) {
                        setProject(d)
                    }
                })
            })
            
    }, [])

    return (
        <div className="project">
            
            <h3>
                {project?.name}
            </h3>

            <p>
                {project.desc}
            </p>

            {/* <div>
                { project.stack.map(s => <span>{s}</span>) }
            </div>

            <img
                src={urlFor(project.imgurl)}
                alt="ss"
            /> */}

        </div>
    )
}

export default Project