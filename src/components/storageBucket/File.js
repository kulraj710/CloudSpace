import { faFile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function File({ file }) {
  
  console.log(file)
  return (
    <a
      href={file.url}
      target="_blank"
      className="btn btn-outline-dark text-truncate w-100"
      data-bs-toggle="tooltip" title={file.name}
    >
      <div style={{ display : 'flex', flexDirection : 'column', justifyContent : 'space-between'}}>
      <div style={{ minHeight : '230px'}}>
      <img src={file.url} alt="No Preview Available" height='200px' width='200px'/>
      </div>

      <div style={{ fontSize : '12px'}}>
      <FontAwesomeIcon icon={faFile} className="mr-2" />
       <span> {file.name} </span>
        </div>

      </div>
    </a>
  )
}
