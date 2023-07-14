import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

//Fun times making sure I understand props & state
// passed props from App.js to this modal component by adding so many props to the component in the App function
//I got confused on how to pass state down. I ended up passing each state down individually.
//TODO destructure props in the parameter below
//     understand passing state down from parent more fully!
//     practice bootstrap styling & CSS

function EditModal(props) {
  // const [updatedUserName, setUpdatedUserName] = useState("");
  // const [updatedJobTitle, setUpdatedJobTitle] = useState("");
  // const [updatedCompanyName, setUpdatedCompanyName] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleClick() {
    //updatedUserName
    //updatedJobTitle
    //updatedCompanyName
    props.user.name = props.updatedUserName;
    props.user.jobTitle = props.updatedJobTitle;
    props.user.companyName = props.updatedCompanyName;
    props.user.id = props.updateUser(props.id, props.user);
  }

  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <label>Update Name</label>
              <input
                onChange={(e) => {
                  console.log(props.updatedUserName);
                  props.setUpdatedUserName(e.target.value);
                }}
              ></input>
            </Form.Group>
            <br></br>
            <Form.Group className="mb-3">
              <label>Update Job Title</label>
              <input
                onChange={(e) => props.setUpdatedJobTitle(e.target.value)}
              ></input>
            </Form.Group>
            <br></br>
            <label>Update Company Name</label>
            <Form.Group className="mb-3">
              <input
                onChange={(e) => props.setUpdatedCompanyName(e.target.value)}
              ></input>
            </Form.Group>
            <br></br>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
