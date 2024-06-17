import React, {useState} from "react"
import { Container } from "react-bootstrap"
import { useFolder } from "../../hooks/useFolder"
import AddFolderButton from "./AddFolderButton"
import AddFileButton from "./AddFileButton"
import Folder from "./Folder"
import File from "./File"
import Navbar from "./Navbar"
import FolderBreadcrumbs from "./FolderBreadcrumbs"
import { useParams, useLocation } from "react-router-dom"

export default function Dashboard() {
  const { folderId } = useParams()
  const { state = {} } = useLocation()
  const { folder, childFolders, childFiles } = useFolder(folderId, state.folder)

  const [showNotice, setShowNotice] = useState(true);

  const hideNotice = () => {
    setShowNotice(false) 
  }

  const styles = {
    margin : '3rem',
    padding : '1rem',
    backgroundColor : '#f5f5f5',
    border : '0.7px solid lightgrey',
    borderRadius : '10px'
  }
  return (
    <>
      <Navbar />
      <Container fluid>
        {/* Note to User, Remove Later */}
        {showNotice ? <div style={styles}>
          <h5>How to Use? <button onClick={hideNotice}>Hide This</button></h5>
          <p>This is your Dashboard, click on Icons to the right to Upload new file to the drive or create new folder to organize your files.</p>
          <p>TO-DO : 
          <br/>
          [feat] Preview option, currently user has to rely on browser to view their file. Implement preview for files just like available in Google Drive.</p>
          <p>
            [feat] Display Metadata
          </p> 
        </div> : null }
        <div className="d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
        </div>
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map(childFolder => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
        {childFolders.length > 0 && childFiles.length > 0 && <hr />}
        {childFiles.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFiles.map(childFile => (
              <div
                key={childFile.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <File file={childFile} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  )
}
