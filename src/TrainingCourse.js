import PropTypes from "prop-types";
import React from 'react'


const userData=[
   
    {
        name:"Spring Boot",
        Fee:"Paid",
        description:"Back-End Developer",
        profile:"images/java.png",
    },
    {
        name:"React",
        Fee:"Paid",
        description:"Front-End Developer",
        profile:"images/java.png",
    },
    {
        name:"Javacript",
        Fee:"Paid",
        description:"Front-End Developer",
        profile:"images/java.png",
    },
    {
      name:"CSS",
      Fee:"Free",
      description:"Front-End Developer",
      profile:"images/java.png",
      },
    {
        name:"PostmanAPI",
        Fee:"Free",
        description:"API Developer",
        profile:"images/java.png",
        },
    {
        name:"Bootstrap",
        Fee:"Free",
        description:"Front-End Developer",
        profile:"images/java.png",
    },
     {
      name:"HTML",
      Fee:"Free",
      description:"Front-End Developer",
      profile:"images/java.png",
    },
    {
        name:"HTML",
        Fee:"Free",
        description:"Front-End Developer",
        profile:"images/java.png",
      },

  ];
  
function User(props){
    return(
    <div className="divcard vd1">
       <div className="card-container">
        <img src={props.profile} className="ing" alt="" />
        <h3>{props.name}</h3>
        <h3>{props.Fee}</h3>
        <p>{props.description}</p>
        <div className="buttons">
          <button className="primary">Let Start</button>
          <button className="primary outline">Share</button>
        </div>
        <br />
       </div>
    </div>   
    )
  }
export const TrainingCourse = () => {
  return (
    <>
    <h1 className="Trainer">Course</h1>
    {userData.map((user,index)=>(
      <User key={index}
      name={user.name}
      Fee={user.Fee}
      description={user.description}
      profile={user.profile}
      skills={user.skills}/>
    ))}
    </>
  )
}


User.propTypes={
  name:PropTypes.string.isRequired,
  Fee:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  profile:PropTypes.string.isRequired,
}
export default TrainingCourse