import { Modal } from "antd";
import React from "react";
import OwnerForm from "./OwnerForm";

const AddOwner = ({ modal1Open, setModal1Open }) => {
  const handleSubmit = (values) => {
    const data = {
      ...values,
    };
    console.log("🚀 ~ handleSubmit ~ data:", data);
    // mutate(data);
    setModal1Open(false);
  };
  return (
    <Modal
      title="New Customer"
      style={{
        top: 30,
      }}
      open={modal1Open}
      onOk={() => setModal1Open(false)}
      onCancel={() => setModal1Open(false)}
      footer={false}
    >
      <OwnerForm initialValue={{}} handleSubmit={handleSubmit} />
    </Modal>
  );
};

export default AddOwner;
