// styles
import './Work.scss'

import { useNavigate, useParams } from 'react-router'
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

    const navigate = useNavigate()

    const goTo = () => {
        navigate('/work')
    }

    const { github, live, desc, stack, imgurl } = work 

    return (
        <div className="work">

            <header>
            
                <h1 className="work__title">
                    {work.name}
                </h1>

                <div className="work__links">

                    <a
                        href={github}
                        target="_blank"
                    >
                        <AiFillGithub/>
                    </a>

                    <a
                        href={live}
                        target="_blank"
                    >
                        <AiOutlineLink/>
                    </a>

                </div>

            </header>


            <p className="work__desc">
                {desc && desc}
            </p>

            <section className="work__stack">

                <h3>
                    Stack
                </h3>

                { stack && stack.map(s => (
                    <span className="stack__item">
                        {s}
                    </span>
                )) }
            
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