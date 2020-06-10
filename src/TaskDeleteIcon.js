import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function TaskDeleteIcon(props) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleShowModal = () => {
        setShowDeleteModal(true);
    };

    const handleCloseModal = () => {
        setShowDeleteModal(false);
    };

    const deleteTask = () => {
        props.deleteTask(props.task.id);
        setShowDeleteModal(false);
    };

    return (
        <div>
            <button type="button"
                    className="btn btn-sm float-left"
                    onClick={handleShowModal}>
                <i className="fa fa-trash-o"/>
            </button>

            <Modal show={showDeleteModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to delete the task?</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.task.name}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={deleteTask}>
                        OK
                    </Button>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default TaskDeleteIcon;