import React, {useState} from 'react';
import '../assets/Services.scss';



const BlocService = (props) => {
    const [more, setMore] = useState(false);

    const showMore = () => {

        setMore(!more);
        
    }

    return (
        <div className='service_sub_container'>
            <h1 className='service_name'>{props.name}</h1>
            <p className='service_explication'>{props.explication}</p>
            {more && <p className='service_explication more'>{props.more}</p>}
            <a onClick={showMore} className='more_button'>Plus</a>
        </div>
    )
}


export default BlocService;