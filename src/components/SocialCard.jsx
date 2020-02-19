import React from 'react';
import 'tachyons';

import image from '../assets/images/frank.jpg';

const SocialCard = ({
        imageVal={image}, 
        name="Gaurav Menezes", 
        flavour="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, consequuntur? Iusto odit fugiat reprehenderit voluptates obcaecati autem? Soluta, eaque reprehenderit exercitationem laborum repellat maiores magnam quas rem eum vel voluptates."
    }) => (
        /* Advised min-width: 1000px */
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 w-30">
        <div className="flex items-center w-50">
            <img src={imageVal} alt="test" width="100px" className="ma2 pa2 br4" height="100px"/>
            <h1>{name}</h1>
        </div>
        <div className="flex flex-wrap">
            <p>{flavour}</p>
        </div>        
    </div>
)

export default SocialCard;