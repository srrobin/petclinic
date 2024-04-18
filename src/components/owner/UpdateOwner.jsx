import { Modal, message } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import OwnerForm from "./OwnerForm";
import { detailsOwner, updateOwner } from "../../utils/Axios";

const UpdateOwner = ({ modal1Open, setModal1Open }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, isError, error, data: updateData } = useQuery({
    queryKey: ["petclinic", id],
    queryFn: ({ signal }) => detailsOwner({ signal, id })
  });

  const { mutate } = useMutation({
    mutationFn: updateOwner,
    onSuccess: (data) => {
      queryClient.setQueryData(["petclinic", id], data);
      queryClient.invalidateQueries(["petclinic", id]);
      navigate(`/owners/${id}`);
      message.success("Owner updated successfully");
    },
  });

  const handleSubmit = (values) => {
    console.log("🚀 ~ handleSubmit ~ values:", values);
    mutate({
      id,
      ...values,
      pets: updateData.pets
    });
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
      <OwnerForm initialValue={updateData} handleSubmit={handleSubmit} />
    </Modal>
  );
};

export default UpdateOwner;
