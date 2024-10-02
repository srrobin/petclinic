import { Modal, message } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import PetForm from "./PetForm";
import { AxiosInstance, detailsPet, fetchPets, updatePet } from "../../utils/Axios";
import GlobalLoader from "../../utils/GlobalLoader";

const UpdatePet = ({ modalUpdatePet, setModalUpdatePet, petId = null }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    error,
    data: upPetData,
  } = useQuery({
    queryKey: ["pets", petId],
    queryFn: () =>
      AxiosInstance.get(`/pets/${petId}`).then((res) => res.data),
    cacheTime: 10000,
    staleTime: 30000,
    refetchOnWindowFocus: true,
  });
  const [newdata, setNewData] = useState(upPetData);
  useEffect(() => {
    setNewData(upPetData);
  }, [petId]);

  const { mutate } = useMutation({
    mutationFn: updatePet,
    onSuccess: (data) => {
      queryClient.setQueryData(["pets", id], data);
      queryClient.invalidateQueries(["pets", id]);
      navigate(`/owners/${id}`);
      message.success("Owner updated successfully");
    },
  });

  const handleSubmit = (values) => {
    const finalUp = {
      id: petId,
      ownerId: id,
      ...values,
      visits: upPetData.visits || [],
    };
    mutate(finalUp);
    setModalUpdatePet(false);
  };
  // if (isLoading) return <GlobalLoader />;
  // if (isError) return `An error has occurred: ${error.message}`;
  return (
    <Modal
      title="Update Pet"
      style={{
        top: 30,
      }}
      open={modalUpdatePet}
      onOk={() => setModalUpdatePet(false)}
      onCancel={() => setModalUpdatePet(false)}
      footer={false}
    >
      <PetForm initialValue={upPetData} handleSubmit={handleSubmit} />
    </Modal>
  );
};

export default UpdatePet;
