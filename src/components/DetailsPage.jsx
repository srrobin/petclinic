/* eslint-disable max-len */
import { CaretLeftOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Col, Descriptions, Row, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { GiDeer } from "react-icons/gi";

import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { Link, useParams } from "react-router-dom";
import { AxiosInstance } from "../utils/Axios";
import GlobalLoader from "../utils/GlobalLoader";
import AddVisite from "./AddVisite";
import UpdateOwner from "./owner/UpdateOwner";
import AddPet from "./pet/AddPet";
import UpdatePet from "./pet/UpdatePet";

const titleStyle = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  flex: "auto",
  color: "rgba(0, 0, 0, 0.88)",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "1.5",
  marginBottom: "15px",
};
const PetClinic = () => {
  const [petId, setPetId] = useState();
  const [petInfo, setPetinfo] = useState();
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modalUpdatePet, setModalUpdatePet] = useState(false);
  const [modalVisite, setModalVisite] = useState(false);

  const { id } = useParams();
  const {
    isLoading,
    isError,
    error,
    data: owner,
  } = useQuery({
    queryKey: ["petclinic"],
    queryFn: () =>
      AxiosInstance.get(`/owners/${id}?_embed=pets`).then((res) => res.data),
    // cacheTime: 10000,
    // staleTime: 30000,
    // refetchOnWindowFocus: true,
  });
  const [ownerUp, setOwnerUp] = useState(owner);

  useEffect(() => {
    setOwnerUp(owner);
  }, [owner]);

  if (isLoading) return <GlobalLoader />;
  if (isError) return `An error has occurred: ${error.message}`;
  return (
    <>
      <div>
        <Descriptions
          title="Owner Information"
          size="small"
          extra={
            <Space>
              <Button
                onClick={() => setModal1Open(true)}
                type="primary"
                icon={<EditOutlined />}
              >
                {" "}
                Update Owner{" "}
              </Button>
              <Button
                onClick={() => setModal2Open(true)}
                type="primary"
                icon={<GiDeer />}
              >
                Add Pet
              </Button>
              <Link to="/owners">
                <Button type="primary" icon={<CaretLeftOutlined />}>
                  back
                </Button>
              </Link>
            </Space>
          }
          items={[
            {
              id: "1",
              label: "Name",
              children: owner ? owner?.name : "",
            },
            {
              id: "2",
              label: "Email",
              children: owner ? owner?.email : "",
            },
            {
              key: "3",
              label: "Phone",
              children: owner ? owner?.phone : "",
            },
            {
              key: "4",
              label: "Address",
              children: owner ? owner?.address : "",
            },
            {
              key: "5",
              label: "City",
              children: owner ? owner?.city : "",
            },
            {
              key: "6",
              label: "Status",
              children: owner ? owner?.status : "",
            },
          ]}
        />
      </div>

      <div>
        <Row>
          <Col span={24} style={{ marginTop: "20px" }}>
            <div style={titleStyle}>Pets and Visits</div>
            {owner &&
              owner?.pets?.map((item, index) => (
                <div
                  key={item.id}
                  style={{
                    background: "#f5f5f5",
                    padding: "10px",
                    marginBottom: "15px",
                    borderRadius: "6px",
                  }}
                >
                  <Row>
                    <Col span={12}>
                      <div>
                        <dl>
                          <dt>Name</dt>
                          <dd>{item.petname}</dd>
                          <dt>Birth Day</dt>
                          <dd>{dayjs(item.birthday).format("YYYY-MM-DD")}</dd>
                          <dt>Species</dt>
                          <dd>{item.species}</dd>
                        </dl>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div>
                        <Table
                          size="small"
                          pagination={false}
                          dataSource={item.visits}
                          columns={[
                            {
                              title: "Date",
                              dataIndex: "date",
                              key: "date",
                            },
                            {
                              title: "Description",
                              dataIndex: "reason",
                              key: "reason",
                            },
                          ]}
                          rowKey="id"
                        />
                        <Space style={{ marginTop: "5px", float: "right" }}>
                          <Button
                            onClick={() => {
                              setModalUpdatePet(true);
                              setPetId(item.id);
                            }}
                            type="primary"
                            icon={<EditOutlined />}
                          >
                            update pet
                          </Button>
                          <Button
                            onClick={() => {
                              setModalVisite(true);
                              setPetId(item?.id);
                              setPetinfo(item);
                            }}
                            type="primary"
                            icon={<FaUserDoctor />}
                          >
                            Add Visit
                          </Button>
                        </Space>
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
          </Col>
          <UpdateOwner modal1Open={modal1Open} setModal1Open={setModal1Open} />
          <AddPet modal2Open={modal2Open} setModal2Open={setModal2Open} />
          <>
            <UpdatePet
              petId={petId}
              modalUpdatePet={modalUpdatePet}
              setModalUpdatePet={setModalUpdatePet}
            />
            <AddVisite
              petId={petId}
              petInfo={petInfo}
              modalVisite={modalVisite}
              setModalVisite={setModalVisite}
            />
          </>
        </Row>
      </div>
    </>
  );
};
export default PetClinic;
