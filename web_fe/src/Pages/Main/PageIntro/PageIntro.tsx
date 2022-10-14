import * as React from 'react';

interface props {
    imgsrc : string;
    explanation : string;
}

const PageIntro:React.FC<props> = ({imgsrc, explanation}) => {
    return <p>{imgsrc} : {explanation}</p>;
}

export default PageIntro;