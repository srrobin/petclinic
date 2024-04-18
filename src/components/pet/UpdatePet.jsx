import { Modal } from "antd";
import React from "react";
import PetForm from "./PetForm";

const UpdatePet = ({ modal2Open, setModal2Open }) => {
  const handleSubmit = (values) => {
    const data = {
      ...values,
    };
    console.log("🚀 ~ handleSubmit ~ data:", data);
    // mutate(data);
    setModal2Open(false);
  };
  return (
    <Modal
      title="New Customer"
      style={{
        top: 30,
      }}
      open={modal2Open}
      onOk={() => setModal2Open(false)}
      onCancel={() => setModal2Open(false)}
      footer={false}
    >
      <PetForm initialValue={{}} handleSubmit={handleSubmit} />
    </Modal>
  );
};

export default UpdatePet;
