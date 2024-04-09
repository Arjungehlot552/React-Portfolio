import React from 'react'

const ProjectCard = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <img src={props.image} alt="" />
    </div>
  )
}

export default ProjectCard
