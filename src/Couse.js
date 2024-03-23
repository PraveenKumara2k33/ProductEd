import PropTypes from "prop-types";
import React from 'react'

const userData=[
    {
      name:"James",
      city:"New York",
      description:"Front-End Developer",
      skills:["UI/UX","HTML",
      "Front Development","CSS",
      "Wordpress","Javascript",
      "React","Node"],
      online:false,
      profile:"images/Judo.jpg",
    },
    {
      name:"Robert",
      city:"Cali",
      description:"Full Stack Web Developer",
      skills:["HTML",
      "Web Development","CSS",
      "Wordpress","Javascript",
      "React","Node"],
      online:false,
      profile:"images/Judo.jpg",
    },
    {
      name:"Nancy",
      city:"Salem",
      description:"Java Full Stack Developer",
      skills:["Java","HTML",
      "JSP","CSS",
      "Spring Boot","Javascript",
      "React","PostAPI"],
      online:true,
      profile:"images/Judo.jpg",
    },
    {
        name:"Nancy",
        city:"Salem",
        description:"Full Stack Web Developer",
        skills:["UI Design","HTML",
        "JSP","CSS",
        "Angular","Javascript",
        "React","PostAPI","Redux"],
        online:true,
        profile:"images/Judo.jpg",
      },
  ];
  
function User(props){
    return(
    <div className="divcard vd2">
       <div className="card-container">
        <span className={props.online ? "pro online":"pro offline"}>
          {props.online?"ONLINE":"OFFLINE"}
        </span>
        <img src={props.profile} className="ing" alt="" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
          <button className="primary">Message</button>
          <button className="primary outline">Following</button>
        </div>
        <div className="skills">
          <h6>Skills</h6>
          <ul>
           {props.skills.map((skill,index)=>(
            <li key={index}>{skill}</li>
           ))}
          </ul>
        </div>
       </div>
    </div>   
    )
  }
export const Couse = () => {
  return (
    <>
    <h1 className="Trainer">Trainer</h1>
    {userData.map((user,index)=>(
      <User key={index}
      name={user.name}
      city={user.city}
      description={user.description}
      online={user.online}
      profile={user.profile}
      skills={user.skills}/>
    ))}
    </>
  )
}
User.propTypes={
  name:PropTypes.string.isRequired,
  city:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  skills:PropTypes.arrayOf(PropTypes.string).isRequired,
  online:PropTypes.bool.isRequired,
  profile:PropTypes.string.isRequired,
}
export default Couse