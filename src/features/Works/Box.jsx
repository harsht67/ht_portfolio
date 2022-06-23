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

                    

                    <motion.div
                        className="hover__item f5"
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.15 }}
                    >
                        <Link to={`/work/${name}`}>
                            <AiFillEye/>
                        </Link>

                    </motion.div>


                    <motion.a 
                        className="hover__item f5"
                        href={live} 
                        target="_blank" 
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.15 }}
                    >

                        <AiOutlineLink/>

                    </motion.a>

                    <motion.a 
                        className="hover__item f5"
                        href={github}
                        target="_blank"
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.15 }}
                    >

                        <AiFillGithub/>

                    </motion.a>

                </motion.div>

            </div>
            
            <p className="box__name f4">

                {name}
            
            </p>
   
        </div>
    )
}

export default Box