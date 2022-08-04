import { InboxOutlined, PlusSquareOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  message,
  PageHeader,
  Row,
  Select,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import Meta from "antd/lib/card/Meta";
import TextArea from "antd/lib/input/TextArea";
import Dragger from "antd/lib/upload/Dragger";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addCategory, listCategory } from "../../../api/categorys";
import { addProduct } from "../../../api/product";
import { CateType } from "../../../types/CategoryType";
import { onPreview, upload } from "../../../utils/upimage";
import { toast, ToastContainer } from "react-toastify";
type Props = {};


const AddCate= (props: Props) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { Option } = Select;



  const onFinish = async (values: any) => {

    try {
      addCategory({
        name: values.name,
      });
      message.success('Them thanh cong');
      setTimeout(() => {
        navigate("/admin/categorys");
      }, 1000);
    } catch (error) {
      message.error('Them khong thanh cong');
    }
  };


  return (
    <>
      <TitlePage>Thêm mới danh mục</TitlePage>
      <FormAdd
        layout="vertical"
        onFinish={onFinish}
      >
        <Row>
        
          <Col span={12}>
            <InfoProduct>Thông tin sản phẩm</InfoProduct>
            <Form.Item
              name="name"
              label="Tên sản phẩm"
              rules={[{ required: true, message: "Mời nhập tên sản phẩm" }]}
            >
              <Input />
            </Form.Item>


            <Form.Item>
              <BtnSubmit type="primary" htmlType="submit">
                Thêm mới
              </BtnSubmit>
            </Form.Item>
          </Col>
        </Row>
      </FormAdd>
      <ToastContainer/>
    </>
  );
};

const TitlePage = styled.h3`
  font-size: 20px;
  color: #5f5e61;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 20px;
`;

const InfoProduct = styled.h3`
  font-size: 16px;
  color: #5f5e61;
  font-weight: 600;
  line-height: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e1e5eb;
`;

const FormAdd = styled(Form)`
  background-color: #fff;
  padding: 20px;
`;

const DivLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BtnSubmit = styled(Button)`
  width: 140px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`;

const LeftContent = styled.div`
  padding: 20px;
`;

const UploadImage = styled(Dragger)`
  margin-top: 20px;
  padding: 20px;
  background: #fff !important;
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
  border-bottom: 1px solid #ccc !important;
  margin-bottom: 20px;
`;
export default AddCate;