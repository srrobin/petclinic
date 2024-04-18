import { Form, Select, Tag } from "antd";

export const UserStatus = ({ status }) => {
  switch (status) {
    case 1:
      return <Tag color="success">Admitted</Tag>;
    case 2:
      return <Tag color="warning">Observation </Tag>;
    case 3:
      return <Tag color="error"> Discharged</Tag>;
    default:
      return <Tag color="success">Admitted</Tag>;
  }
};
