import { InboxOutlined, PlusSquareOutlined } from "@ant-design/icons";
import {
  Avatar,
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
import { RcFile } from "antd/lib/upload";
import Dragger from "antd/lib/upload/Dragger";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import {
  categoryUpdate,
  listCategory,
  listCategoryDetail,
} from "../../../api/categorys";
import { listProductDetail, productUpdate } from "../../../api/product";
import { CateType } from "../../../types/CategoryType";
import { onPreview, upload } from "../../../utils/upimage";

type Props = {};

const CategoryEdit = (props: Props) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();




  const { id } = useParams();

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await listCategoryDetail(id as string);
      form.setFieldsValue(data);
    };
    getCategories();
  }, []);
  const onFinish = async (values: any) => {
    const dataInput = {
      id: id,
      name: values.name,
    };

    try {
      categoryUpdate(dataInput);
      message.success("Sửa thành công");
      setTimeout(() => {
        navigate("/admin/categorys");
      }, 1000);
    } catch (error) {
      message.error("Sửa không thành công");
    }
  };

  return (
    <>
      <TitlePage>Chỉnh sửa danh mục</TitlePage>
      <FormAdd layout="vertical" onFinish={onFinish} form={form}>
        <Row>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Tên danh mục"
              rules={[{ required: true, message: "Username is required" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <BtnSubmit type="primary" htmlType="submit">
                Sửa danh mục
              </BtnSubmit>
            </Form.Item>
          </Col>
        </Row>
      </FormAdd>
      <ToastContainer />
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
export default CategoryEdit;
function updateCategory(dataInput: { name: any }, id: string | undefined) {
  throw new Error("Function not implemented.");
}
