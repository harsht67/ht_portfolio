// styles
import './Box.scss'

// icons
import { AiFillGithub, AiFillEye, AiOutlineLink } from 'react-icons/ai'

import { urlFor } from '../../client'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Box({data}) {

    const { name, imgurl, github, live } = data

    return (
        <div className="box">

            <div className="box__img">
                
                <div 
                    style={{backgroundImage: `url(${urlFor(imgurl)})`}}
                    className="img"
                >
                </div>

                <motion.div
                    className="hover"
                    whileHover={{ opacity: [0, 1] }}
                    transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                >

                    <Link 
                        to={`/work/${name}`}
                        className="hover__item" 
                    >

                        <AiFillEye/>

                    </Link>

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
            
            <p className="box__name f4">

                {name}
            
            </p>
   
        </div>
    )
}

export default Box