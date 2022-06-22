// styles
import './Work.scss'

import { useParams } from 'react-router'
import { useState, useEffect } from 'react'

import { client, urlFor } from '../../client'

// icons
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import { IoChevronBackCircleSharp } from 'react-icons/io5'

function Work() {

    const { name } = useParams()

    const [work, setWork] = useState({})

    useEffect(() => {
        const query = '*[_type == "works"]'

        client
            .fetch(query)
            .then(data => {
                data.forEach(d => {
                    if(d.name==name) {
                        setWork(d)
                        console.log(d.stack)
                    }
                })
            })
            
    }, [])

    const { github, live, desc, stack, imgurl } = work 

    return (
        <div className="work">

            <header>
            
                <h1 className="work__title f3">

                    {work.name}
                
                </h1>

                <div className="work__links f7">

                    <a
                        className="flex--center"
                        href={github}
                        target="_blank"
                    >
                        <AiFillGithub/>
                    </a>

                    <a
                        className="flex--center"
                        href={live}
                        target="_blank"
                    >
                        <AiOutlineLink/>
                    </a>

                </div>

            </header>


            <section className="work__desc">

                <h2 className="work__subtitle f6">
                    Summary
                </h2>

                <p className="lg-text">
                    
                    {desc && desc}
                
                </p>

            </section>

            <section className="work__stack sm-text">

                <h2 className="work__subtitle f6">
                    Stack
                </h2>

                <ul className="ul">
                    { stack && stack.map(s => (
                        <li>
                            {s}
                        </li>
                    )) }
                </ul>
            
            </section>

            { imgurl &&
                <img
                    src={urlFor(imgurl)}
                    alt="screenshot"
                    className="work__img"
                />
            }

        </div>
    )
}

export default Work