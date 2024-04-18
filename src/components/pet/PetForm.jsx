import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
} from "antd";
import React, { useState } from "react";

import {
  CaretLeftOutlined,
  CheckCircleFilled,
  ReloadOutlined,
} from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "../../utils/Axios";

const { Option } = Select;

const PetForm = ({ handleSubmit, initialValue }) => {
  const {
    isLoading,
    isError,
    data: species,
  } = useQuery({
    queryKey: ["species"],
    queryFn: () =>
      AxiosInstance.get("/species").then((res) => res.data),
  });
  const initialValues = {
    name: initialValue.name || "",
    species: initialValue.species || "",
    birthday: initialValue.birthday || "",
  };
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("🚀 ~ onFinish ~ values:", values);
    handleSubmit(values);
    form.resetFields();
  };
  return (
    <Form
      form={form}
      name="trigger"
      layout="vertical"
      autoComplete="off"
      onFinish={onFinish}
      initialValues={initialValues}
    >

      <Row gutter={[16, 8]}>
        <Col span={12}>
          <Form.Item
            name="name"
            label=" Name"
            validateDebounce={1000}
            rules={[
              {
                max: 10,
                required: true,
                message: "Please enter  name",
              },
            ]}
          >
            <Input placeholder="Please enter  name" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="species"
            label="Species"
            rules={[
              {
                required: true,
                message: "Please select statue!",
              },
            ]}
          >
            <Select placeholder="select pet species">
              {species && species?.map((item) => (
                <Option value={item}>{item}</Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[8]}>
        <Col span={24}>
          <Form.Item name="birthDate" label="Birthday">
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="submit__btn">
            <Space>
              <Button icon={<CaretLeftOutlined />}>Back</Button>
              <Button icon={<ReloadOutlined />} htmlType="reset">
                Reset
              </Button>
              <Button
                type="primary"
                icon={<CheckCircleFilled />}
                htmlType="submit"
              >
                Submit
              </Button>
            </Space>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default PetForm;
