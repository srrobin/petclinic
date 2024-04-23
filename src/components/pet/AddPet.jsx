import { Modal, Tag, message } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import PetForm from "./PetForm";
import { AxiosInstance, createOwner, createPet, fetchPets } from "../../utils/Axios";
import GlobalLoader from "../../utils/GlobalLoader";

const AddPet = ({ modal2Open, setModal2Open, owner }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const quaryclient = useQueryClient();

  const { isLoading, isError, error, data: allpets } = useQuery({
    queryKey: ["pets",],
    queryFn: ({ signal }) => fetchPets({ signal })
  });
  const { mutate } = useMutation({
    mutationFn: createPet,
    onSuccess: (data) => {
      quaryclient.invalidateQueries(["pets"]);
      quaryclient.setQueryData(["pets"], data);
      navigate(`/owners/${id}`);
      message.success("Pet added successfully");
    }
  });

  const handleSubmit = (values) => {
    const updatePetData = {
      id: (allpets.length).toString(),
      ownerId: id,
      ...values,
      visies: []
    };
    mutate(updatePetData);
    setModal2Open(false);
  };
  if (isLoading) return <GlobalLoader />;
  if (isError) return `An error has occurred: ${error.message}`;
  return (
    <Modal
      title="Add Pet"
      style={{
        top: 30,
      }}
      open={modal2Open}
      onOk={() => setModal2Open(false)}
      onCancel={() => setModal2Open(false)}
      footer={false}
    >
      <>
        Owner :  <Tag color="geekblue"> {owner?.name}</Tag>
        <PetForm initialValue={{}} handleSubmit={handleSubmit} />
      </>
    </Modal>
  );
};

export default AddPet;
