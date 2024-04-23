/* eslint-disable max-len */
import { Button, Col, DatePicker, Form, Input, Row, Select, Space } from "antd";
import React, { useEffect } from "react";

import {
  CaretLeftOutlined,
  CheckCircleFilled,
  ReloadOutlined,
} from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { AxiosInstance } from "../../utils/Axios";

const { Option } = Select;

const PetForm = ({ handleSubmit, initialValue }) => {
  const [form] = Form.useForm();
  const {
    isLoading,
    isError,
    data: species,
  } = useQuery({
    queryKey: ["species"],
    queryFn: () => AxiosInstance.get("/species").then((res) => res.data),
  });

  useEffect(() => {
    form.setFieldsValue({
      petname: initialValue?.petname || "",
      species: initialValue?.species || "",
      birthday: initialValue?.birthday ? dayjs(initialValue.birthday) : null,
    });
  }, [initialValue]);
  const onFinish = (values) => {
    const formattedValues = {
      ...values,
    };

    if (values.birthday) {
      formattedValues.birthday = dayjs(values.birthday).format("YYYY-MM-DD");
    }

    handleSubmit(formattedValues);
    form.resetFields();
  };

  return (
    <Form
      form={form}
      name="trigger"
      layout="vertical"
      autoComplete="off"
      onFinish={onFinish}
      // initialValues={initialValue}
    >
      <Row gutter={[16, 8]}>
        <Col span={12}>
          <Form.Item
            name="petname"
            label="Name"
            validateDebounce={1000}
            rules={[
              {
                max: 40,
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
              {species &&
                species?.map((item, index) => <Option key={index} value={item}>{item}</Option>)}
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[8]}>
        <Col span={24}>
          <Form.Item name="birthday" label="Birthday">
            <DatePicker style={{ width: "100%" }} format="YYYY-MM-DD" />
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
