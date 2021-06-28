import React, { Component, createRef } from "react";
import { Modal, FormControl, Button } from "react-bootstrap";
import styles from "./typesModal.module.css";

class TypesModal extends Component {
  constructor(props) {
    super(props);

    this.formControlRef = createRef();
  }

  componentDidMount() {
    this.formControlRef.current.focus();
  }

  handleSubmit() {
    this.props.addProprties();
  }

  render() {
    console.log(this.props);
    const { onClose } = this.props;

    return (
      <>
        <Modal
          show={true}
          onHide={() => onClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title
              id="contained-modal-title-vcenter"
              className={styles._modalTitle}
            >
              Add Elemnt types
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormControl
              placeholder="value"
              name="value"
              onChange={this.handleChange}
              onKeyPress={this.handleKeyDown}
              className="mb-3"
              ref={this.formControlRef}
            />
            <FormControl
              placeholder="Write a comment"
              name="comment"
              as="textarea"
              rows={5}
              onChange={this.handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleSubmit} variant="success">
              Add
            </Button>
            <Button onClick={()=>onClose()} variant="secondary">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default TypesModal;
