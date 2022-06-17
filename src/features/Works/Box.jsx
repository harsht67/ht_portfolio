// styles
import './Box.scss'

import { urlFor } from '../../client'

import { useNavigate } from 'react-router'
import { motion } from 'framer-motion'

// icons
import { AiFillGithub, AiFillEye, AiOutlineLink } from 'react-icons/ai'

function Box({data}) {

    const navigate = useNavigate()

    const goToWork = () => {
        navigate('/work/'+name)
    }

    const { name, imgurl, github, live } = data

    return (
        <div 
            key={data}
            className="box"
        >

            <div className="box__img">
                
                <img
                    src={urlFor(imgurl)}
                    alt="screenshot of work"
                />

                <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                    className="box__hover"
                >

                    <div 
                        className="hover__item" 
                        onClick={goToWork}
                    >

                        <AiFillEye/>

                    </div>

                    <a 
                        className="hover__item"
                        href={live} 
                        target="_blank" 
                    >

                        <AiOutlineLink/>

                    </a>

                    <a 
                        className="hover__item"
                        href={github}
                        target="_blank"
                    >

                        <AiFillGithub/>

                    </a>

                </motion.div>

            </div>
            
            <p className="box__name">
                {name}
            </p>
   
        </div>
    )
}

export default Box