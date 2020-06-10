import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function TaskEditIcon(props) {
    const [showEditModal, setShowEditModal] = useState(false);
    const [editTaskInput, setEditTaskInput] = useState(props.task.name);

    const handleShowModal = () => {
        setShowEditModal(true);
        setEditTaskInput(props.task.name);
    };

    const handleCloseModal = () => {
        setEditTaskInput(props.task.name);
        setShowEditModal(false);
    };

    const editTask = () => {
        props.editTask(props.task.id, editTaskInput);
        setShowEditModal(false);
    };

    return (
        <div>
            <button type="button"
                    className="btn btn-sm float-left"
                    onClick={handleShowModal}>
                <i className="fa fa-pencil"/>
            </button>

            <Modal show={showEditModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text"
                           className="form-control"
                           id="taskName"
                           value={editTaskInput}
                           onChange={e => setEditTaskInput(e.target.value)}/>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={editTask}>
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

export default TaskEditIcon;