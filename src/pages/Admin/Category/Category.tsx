import {
  DeleteOutlined,
  FormOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteCategory, listCategory } from '../../../api/categorys'
import { CateType } from '../../../types/CategoryType'
import { Button, Divider, message, Modal, PageHeader, Select, Table } from 'antd';
import styled from 'styled-components';

type Props = {}

const Category = (props: Props) => {
  const [category, setCategory] = useState<CateType[]>([])
  const { Option } = Select;
  useEffect(() => {
    const getCategories = async () => {
      const {data}= await listCategory()
      setCategory(data)
      console.log(data);
      
    };
    getCategories();
  },[])
  const handleRemove = async (id: string) => {
    const { data } = await deleteCategory(id);
    setCategory(category.filter((item) => item.id !== id));
  };
  const data = category.map((item, index) => {
    return {
      key: index + 1,
      id: item.id,
      name: item.name,

    };
  });

  const columns  = [
    {
      title: "Stt",
      dataIndex: "key",
      align: "center" as "center",
      key: "key",
      
    },
    {
      title: "Tên thư mục",
      dataIndex: "name",
      key: "name",
      align: "center" as "center",
    },
    {
      title: "Thao tác",
      key: "action",

      align: "center" as "center",
      render: (text: string, record: CateType) => {
        return (
          <>
            <Link to={`/admin/categorys/edit/${record.id}`}>
              <FormOutlined style={{ fontSize: "20px" }} />
            </Link>

            <BtnDelete
              onClick={() => {
                Modal.confirm({
                  title: `Bạn chắc chắn muốn xóa sản phẩm ${record.name}`,
                  okText: "Đồng ý",
                  okType: "danger",
                  onOk: () => {
                    handleRemove(record.id as string);
                    message.success('Xoa thanh cong');
                  },
                });
              }}
            >
              <DeleteOutlined style={{ fontSize: "20px", border: "none" }} />
            </BtnDelete>
            
          </>
        );
      },
    },
  ];

  return (
    <>
      <TitlePage
        title="Danh sách thư mục"
        extra={[
          <Link to="/admin/categorys/add" key="1">
            <PlusSquareOutlined style={{ fontSize: "35px" }} />
          </Link>,
        ]}
      />

      <Divider></Divider>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </>
  )
}
const TitlePage = styled(PageHeader)`
  font-size: 20px;
  color: #5f5e61;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 20px;
`;

const FilterTitle = styled.h4`
  font-size: 16px;  
  color: #5f5e61;
  font-weight: 600;
  line-height: 30px;
  display: flex;
  align-items: center;
`;

const BtnDelete = styled(Button)`
  border: none;
  color: red;
`;
export default Category