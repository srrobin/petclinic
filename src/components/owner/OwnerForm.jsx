import { Button, Col, Form, Input, Row, Select, Space } from "antd";
import React, { useEffect } from "react";

import {
  CaretLeftOutlined,
  CheckCircleFilled,
  ReloadOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const OwnerForm = ({ handleSubmit, initialValue }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(initialValue);
  }, [initialValue]);

  const onFinish = (values) => {
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
    >

      <Row gutter={[16, 8]}>
        <Col span={12}>
          <Form.Item
            name="name"
            label="Name"
            validateDebounce={1000}
            rules={[
              {
                max: 60,
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
            name="status"
            label="Status"
            rules={[
              {
                required: true,
                message: "Please select statue!",
              },
            ]}
          >
            <Select placeholder="select your gender">
              <Option value="1">Admitted</Option>
              <Option value="2">Observation</Option>
              <Option value="3">Discharged</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[8]}>
        <Col span={12}>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                max: 50,
                required: true,
                message: " enter email ",
              },
            ]}
          >
            <Input placeholder=" enter  email" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[
              {
                max: 11,
                required: true,
                message: " enter phone number",
              },
            ]}
          >
            <Input placeholder=" enter phone number" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[8]}>
        <Col span={12}>
          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                max: 200,
                required: true,
                message: " enter your address",
              },
            ]}
          >
            <Input placeholder=" enter your address" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="city"
            label="City"
            rules={[
              {
                max: 10,
                required: true,
                message: "enter your city",
              },
            ]}
          >
            <Input placeholder="enter your password" />
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

export default OwnerForm;
