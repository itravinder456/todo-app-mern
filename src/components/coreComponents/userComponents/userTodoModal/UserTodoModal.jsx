import React, { useState } from "react";
import { Button, Icon, Modal } from "semantic-ui-react";

const UserTodoModal = (props) => {
  const { open, setOpen } = useState(false);

  return (
    <Modal
      // dimmer={dimmer}
      open={props.open}
      onClose={() => ""}
    >
      <Modal.Header>Use Google's location service?</Modal.Header>
      <Modal.Content>
        Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={() =>""}>
          Disagree
        </Button>
        <Button positive onClick={() => ""}>
          Agree
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default UserTodoModal;
