import React from 'react';
import headerImg from '../../../images/blog-bg.jpeg';
import handImg from '../../../images/writingHand.png';



const HeaderContent = () => {
    return (
       <div>
            <div className="h-96 bg-cover flex flex-col justify-center items-center" style={{backgroundImage: `url(${headerImg})`}} >
            <img className="h-24" src={handImg} alt="" />
            <h1 className="text-5xl text-white" style={{fontFamily: "'Monoton', cursive"}}>Blogger Memories</h1>
        </div>
        <div className="bg-blue-200 h-24 flex justify-center items-center">
            <h1 className="text-2xl"  style={{fontFamily: "'Pacifico', cursive"}}>Conversation is king. Content is just something to talk about. ~Cory Doctorow</h1>
        </div>
       </div>
    );
};

export default HeaderContent;