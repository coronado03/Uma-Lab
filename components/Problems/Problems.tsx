import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ProblemsGrid from './ProblemsGrid';


function Problems() {
  
  return (

        <div className='bg-[#E6E6E6]'>
        <h1 className='bg-[#E6E6E6] text-black text-3xl text-center font-semibold pt-10 pb-24'>What problems does UMA solve?</h1>


<ProblemsGrid>
    <div>
        <h1 className='font-bold'>Insufficient brand recognition</h1>
        <p>Strengthening corporate identity, including name, tagline and style, to increase brand awareness and recognition</p>
    </div>

    <div>
        <h1 className='font-bold'>Ineffective marketing campaigns</h1>
        <p>Applying strategic marketing approaches, including targeted advertising, creating engaging content and an active social media presence, to attract target audiences and improve the effectiveness of your marketing campaigns</p>
    </div>

    <div>
        <h1 className='font-bold'>Limited media profile and low conversion on web resources</h1>
        <p>Website development and optimization, active social media management, ensuring wide coverage of your company in the online environment to attract new customers</p>
    </div>

    <div>
        <h1 className='font-bold'>Ineffective interaction with the audience in social media</h1>
        <p>Developing a social media strategy, creating interesting and engaging content, maintaining regular communication with the audience to attract and increase customer interest through social media</p>
    </div>

</ProblemsGrid>
        </div>


);
}

export default Problems;

