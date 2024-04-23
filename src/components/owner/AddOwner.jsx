import { Modal, message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import OwnerForm from "./OwnerForm";
import { createOwner } from "../../utils/Axios";

const AddOwner = ({ modal1Open, setModal1Open, ownerslength }) => {
  const navigate = useNavigate();
  const quaryclient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createOwner,
    onSuccess: () => {
      quaryclient.invalidateQueries({ queryKey: ["owner"] });
      navigate("/owners");
      message.success("Owner added successfully");
    }
  });
  const handleSubmit = (values) => {
    const newOwner = {
      id: (ownerslength + 1).toString(),
      ...values
    };
    mutate(newOwner);
    setModal1Open(false);
  };

  return (
    <Modal
      title="Add New Owner"
      style={{
        top: 30,
      }}
      open={modal1Open}
      onOk={() => setModal1Open(false)}
      onCancel={() => setModal1Open(false)}
      footer={false}
    >
      <OwnerForm
        initialValue={{}}
        handleSubmit={handleSubmit}
      />
    </Modal>
  );
};

export default AddOwner;
