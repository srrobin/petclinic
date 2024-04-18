import React, { useState } from "react";
import { Button, Card, Col, Descriptions, Radio, Row, Space, Table } from "antd";
import { EditOutlined, AppstoreAddOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { AxiosInstance } from "../utils/Axios";
import GlobalLoader from "../utils/GlobalLoader";
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
  marginBottom: "15px"
};
const PetClinic = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const { id } = useParams();
  const {
    isLoading,
    isError,
    error,
    data: owner,
  } = useQuery({
    queryKey: ["petclinic"],
    queryFn: () =>
      AxiosInstance.get(`/petclinic/${id}`).then((res) => res.data),
  });

  if (isLoading) return <GlobalLoader />;
  if (isError) return `An error has occurred: ${error.message}`;

  console.log("🚀 ~ UserList ~ owner:", owner);
  return (
    <>
      <div>
        <Descriptions
          title="Owner Information"
          size="small"
          extra={
            <Space>
              <Button onClick={() => setModal1Open(true)} type="primary" icon={<EditOutlined />}> Update Owner   </Button>
              <Button onClick={() => setModal2Open(true)} type="primary" icon={<AppstoreAddOutlined />}>Add Pet</Button>
              <Link to="/owners">
                <Button type="primary" icon={<AppstoreAddOutlined />}>back</Button>
              </Link>
            </Space>
        }
          items={
            [{
              key: "1",
              label: "Name",
              children: owner ? owner?.name : "",
            },
            {
              key: "2",
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
            }
            ]}
        />
      </div>

      <div>
        <Row>
          <Col span={24} style={{ marginTop: "20px" }}>
            <div style={titleStyle}>Pets and Visits</div>
            {owner && owner?.pets?.map((item, index) => (
              <div key={item.id} style={{ background: "#f5f5f5", padding: "10px", marginBottom: "15px" }}>
                <Row>
                  <Col span={12}>
                    <div>
                      <dl>
                        <dt>Name</dt>
                        <dd>{item.name}</dd>
                        <dt>Birth Day</dt>
                        <dd>{item.birthday}</dd>
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
                        dataSource={item?.visits}
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
                          }
                        ]}
                        rowKey="id"
                      />
                      <Space style={{ marginTop: "5px", float: "right" }}>
                        <Button onClick={() => setModal2Open(true)} type="primary" icon={<EditOutlined />}>update pet</Button>
                        <Button type="primary" icon={<AppstoreAddOutlined />}>add visit</Button>
                      </Space>
                    </div>

                  </Col>
                </Row>
              </div>
            ))}
          </Col>
          <UpdateOwner modal1Open={modal1Open} setModal1Open={setModal1Open} />
          <AddPet modal2Open={modal2Open} setModal2Open={setModal2Open} />
          <UpdatePet modal2Open={modal2Open} setModal2Open={setModal2Open} />
          <UpdatePet modal2Open={modal2Open} setModal2Open={setModal2Open} />
        </Row>
      </div>
    </>

  );
};
export default PetClinic;

/* eslint-disable max-len */
// import { AppstoreAddOutlined, EditOutlined } from "@ant-design/icons";
// import { useQuery } from "@tanstack/react-query";
// import { Button, Col, Descriptions, Row, Space, Table } from "antd";
// import React from "react";
// import { useParams } from "react-router-dom";
// import { AxiosInstance } from "../utils/Axios";
// import GlobalLoader from "../utils/GlobalLoader";

// const titleStyle = {
//   overflow: "hidden",
//   whiteSpace: "nowrap",
//   textOverflow: "ellipsis",
//   flex: "auto",
//   color: "rgba(0, 0, 0, 0.88)",
//   fontWeight: "600",
//   fontSize: "16px",
//   lineHeight: "1.5",
//   marginBottom: "15px"
// };

// const PetClinic = () => {
//   const { id } = useParams();
//   const { isLoading, isError, error, data: owner } = useQuery({
//     queryKey: ["petclinic"],
//     queryFn: () => AxiosInstance.get(`/petclinic/${id}`).then((res) => res.data),
//   });

//   if (isLoading) return <GlobalLoader />;
//   if (isError) return `An error has occurred: ${error.message}`;

//   return (
//     <>
//       <div>
//         <Descriptions
//           title="Owner Information"
//           size="small"
//           extra={
//             <Space>
//               <Button type="primary" icon={<EditOutlined />}> Update Owner </Button>
//               <Button type="primary" icon={<AppstoreAddOutlined />}> Add Pet </Button>
//             </Space>
//           }
//           items={[
//             { key: "1", label: "Name", children: owner ? owner.name : "" },
//             { key: "2", label: "Email", children: owner ? owner.email : "" },
//             { key: "3", label: "Phone", children: owner ? owner.phone : "" },
//             { key: "4", label: "Address", children: owner ? owner.address : "" },
//             { key: "5", label: "City", children: owner ? owner.city : "" },
//             { key: "6", label: "Status", children: owner ? owner.status : "" },
//           ]}
//         />
//       </div>

//       <div>
//         <Row>
//           <Col span={24} style={{ marginTop: "20px" }}>
//             <div style={titleStyle}>Pets and Visits</div>
//             {owner && owner?.pets?.map((item, index) => (
//               <div style={{ background: "#f5f5f5", padding: "10px", marginBottom: "15px" }}>
//                 <Row>
//                   <Col span={12}>
//                     <div>
//                       <dl>
//                         <dt>Name</dt>
//                         <dd>{item.name}</dd>
//                         <dt>Birth Day</dt>
//                         <dd>{item.birthday}</dd>
//                         <dt>Species</dt>
//                         <dd>{item.species}</dd>
//                       </dl>
//                     </div>
//                   </Col>
//                   <Col span={12}>
//                     <div>
//                       <Table
//                         size="small"
//                         pagination={false}
//                         dataSource={item.visits}
//                         columns={[
//                           { title: "Date", dataIndex: "date", key: "date" },
//                           { title: "Description", dataIndex: "reason", key: "reason" }
//                         ]}
//                       />
//                       <Space style={{ marginTop: "5px", float: "right" }}>
//                         <Button type="primary" icon={<EditOutlined />}> Update Pet </Button>
//                         <Button type="primary" icon={<AppstoreAddOutlined />}> Add Visit </Button>
//                       </Space>
//                     </div>
//                   </Col>
//                 </Row>
//               </div>
//             ))}
//           </Col>
//         </Row>
//       </div>
//     </>
//   );
// };

// export default PetClinic;
