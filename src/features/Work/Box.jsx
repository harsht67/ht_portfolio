// styles
import './Box.scss'

import { urlFor } from '../../client'

import { useNavigate } from 'react-router'

function Box({data}) {

    const navigate = useNavigate()

    const goTo = () => {
        navigate('/work/'+name)
    }

    const { name, imgurl } = data

    return (
        <div 
            key={data}
            className="box"
        >

            <div className="box__img">
                
                <img
                    src={urlFor(imgurl)}
                    alt="screenshot of work"
                    onClick={goTo}
                />

            </div>
            
            <p className="box__name">
                {name}
            </p>
   
        </div>
    )
}

export default Box