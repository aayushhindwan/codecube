import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import {
    MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn
} from "mdbreact";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const c = () => {
    return (
        <Carousel  responsive={responsive}>
    <div style={{margin:"5vw",width:"90vw",background:'black',color:'white',borderRadius:"20px",boxShadow: "5px 10px 20px blue"}}>
        <h1 style={{padding:"5px"}}> Exam Guru— (HackNITP -Campus Hackathon in Jan 2020)</h1>
        <br/>
        <h5 style={{padding:"5px"}}>
An Android Application which assists the slow learner in his/her studies. Features:
Extractive Text Summarization (using Sentence Ranking Algorithm), Personalized Assistant(ChatBot implemented through IBM Watson),
and Automatic PPT Generation(using Google Slide APIs ).
        </h5>
    </div>
    <div style={{margin:"5vw",width:"90vw",background:'black',color:'white',borderRadius:"20px",boxShadow: "5px 10px 20px blue"}}>
        <h1 style={{padding:"5px"}}> Exam Guru— (HackNITP -Campus Hackathon in Jan 2020)</h1>
        <br/>
        <h5 style={{padding:"5px"}}>
An Android Application which assists the slow learner in his/her studies. Features:
Extractive Text Summarization (using Sentence Ranking Algorithm), Personalized Assistant(ChatBot implemented through IBM Watson),
and Automatic PPT Generation(using Google Slide APIs ).
        </h5>
    </div>
    <div style={{margin:"5vw",width:"90vw",background:'black',color:'white',borderRadius:"20px",boxShadow: "5px 10px 20px blue"}}>
        <h1 style={{padding:"5px"}}> Exam Guru— (HackNITP -Campus Hackathon in Jan 2020)</h1>
        <br/>
        <h5 style={{padding:"5px"}}>
An Android Application which assists the slow learner in his/her studies. Features:
Extractive Text Summarization (using Sentence Ranking Algorithm), Personalized Assistant(ChatBot implemented through IBM Watson),
and Automatic PPT Generation(using Google Slide APIs ).
        </h5>
    </div>
   
        </Carousel>);
}
export default c;
