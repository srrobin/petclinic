/* eslint-disable max-len */
import React, { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Modal, Row, Space, message } from "antd";
import { CaretLeftOutlined, CheckCircleFilled, ReloadOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { AxiosInstance, updateVisit } from "../utils/Axios";

const { TextArea } = Input;

const AddVisite = ({ modalVisite, setModalVisite, petId, petInfo }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateVisit,
    onSuccess: () => {
      queryClient.invalidateQueries(["pets", petInfo.id]);
      navigate(`/owners/${id}`);
      message.success("Visit added successfully");
    },
    onError: (error) => {
      message.error(`Failed to add visit: ${error.message}`);
    },
  });
  const onFinish = (values) => {
    const visit = {
      id: (petInfo.visits ? petInfo.visits.length + 1 : 1).toString(),
      date: dayjs(values.date).format("YYYY-MM-DD"),
      reason: values.reason,
    };
    const updatedPetInfo = {
      ...petInfo,
      visits: [...(petInfo.visits || []), visit],
    };
    mutate(updatedPetInfo);
    setModalVisite(false);
    form.resetFields();
  };
  return (
    <Modal
      title="Regular Visit"
      open={modalVisite}
      onCancel={() => setModalVisite(false)}
      footer={null}
    >
      <Form
        form={form}
        name="addVisitForm"
        layout="vertical"
        onFinish={onFinish}
      >
        <Row gutter={[8]}>
          <Col span={24}>
            <Form.Item name="date" label="Date">
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[8]}>
          <Col span={24}>
            <Form.Item
              name="reason"
              label="Description"
              rules={[
                { max: 1000, required: true, message: "Please enter a description" }
              ]}
            >
              <TextArea style={{ width: "100%" }} rows={4} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Space>
              <Button icon={<CaretLeftOutlined />} onClick={() => setModalVisite(false)}>Back</Button>
              <Button icon={<ReloadOutlined />} htmlType="reset">Reset</Button>
              <Button type="primary" icon={<CheckCircleFilled />} htmlType="submit">Submit</Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default AddVisite;
