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

const { Option } = Select;

const AddVisite = ({ modal3Open, setModal3Open }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("🚀 ~ onFinish ~ values:", values);
    form.resetFields();
  };
  return (
    <Modal
      title="New Customer"
      style={{
        top: 30,
      }}
      open={modal3Open}
      onOk={() => setModal3Open(false)}
      onCancel={() => setModal3Open(false)}
      footer={false}
    >
      <Form
        form={form}
        name="trigger"
        layout="vertical"
        autoComplete="off"
        onFinish={onFinish}
      >
        <Row gutter={[8]}>
          <Col span={24}>
            <Form.Item name="birthDate" label="Birthday">
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 8]}>
          <Col span={12}>
            <Form.Item
              name="reason"
              label=" Description"
              validateDebounce={1000}
              rules={[
                {
                  max: 10,
                  required: true,
                  message: "Please enter  Description",
                },
              ]}
            >
              <Input placeholder="Please enter  Description" />
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
    </Modal>

  );
};

export default AddVisite;
