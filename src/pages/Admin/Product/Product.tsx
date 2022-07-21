import {
  DeleteOutlined,
  FormOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import {
  Button,
  Divider,
  Image,
  message,
  Modal,
  PageHeader,
  Select,
  Space,
  Switch,
  Table,
} from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import { listCategory } from "../../../api/categorys";
import {
  deleteProduct,

  GetPrWithCategory,
  listProduct,
} from "../../../api/product";
import { CateType } from "../../../types/CategoryType";
import { ProductType } from "../../../types/ProductType";

type Props = {

};

const Product = (props: Props) => {
  const [product, setProduct] = useState<ProductType[]>([]);
  const [category, setCategory] = useState<CateType[]>([]);
  const { Option } = Select;

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await listProduct();
      setProduct(data);
    };
    const getCategories = async () => {
      const { data } = await listCategory();
      setCategory(data);
      console.log(data);
    };
    getCategories();
    getProducts();
  }, []);
  


  const onFilerCategory = async (value: any) => {
    if (value === undefined) {
      const { data } = await listProduct();
      setProduct(data);
    } else {
      const { data } = await GetPrWithCategory(value);
      setProduct(data);
    }
  };

  const handleRemove = async (id: string) => {
    const { data } = await deleteProduct(id);
    setProduct(product.filter((item) => item.id !== id));
  };

  const data = product.map((item, index) => {
    return {
      key: index + 1,
      id: item.id,
      name: item.name,
      originalPrice: item.originalPrice,
      saleOffPrice: item.saleOffPrice,
      feature: item.feature,
      desc: item.desc,
      status: item.status,
      img: item.img,
      categoryId: item.categoryId,
    };
  });

  const columns = [
    {
      title: "Ảnh",
      dataIndex: "img",
      align: "center" as "center",
      key: "img",
      render: (text: string, record: ProductType) => {
        return <Image width={200} src={text} />;
      },
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      align: "center" as "center",
    },

    {
      title: "Danh mục sản phẩm",
      dataIndex: "categoryId",
      key: "categoryId",
      align: "center" as "center",
      render: (text: string) => {
        let name;
        category.map((item) => {
          if (item.id == text) {
            name = item.name;
          }
        });
        return <span>{name}</span>;
      },
    },

    {
      title: "Giá gốc",
      dataIndex: "originalPrice",
      key: "originalPrice",
      align: "center" as "center",
    },

    {
      title: "Giá khuyến mại",
      dataIndex: "saleOffPrice",
      key: "saleOffPrice",
      align: "center" as "center",
    },

    {
      title: "Đặc điểm nổi bật",
      dataIndex: "feature",
      key: "feature",
      align: "center" as "center",
    },

    {
      title: "Mô tả",
      dataIndex: "desc",
      key: "desc",
      align: "center" as "center",
    },


    {
      title: "Thao tác",
      key: "action",

      align: "center" as "center",
      render: (text: string, record: ProductType) => {
        return (
          <>
            <Link to={`/admin/products/edit/${record.id}`}>
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
        title="Danh sách sản phẩm"
        extra={[
          <Link to="/admin/products/add" key="1">
            <PlusSquareOutlined style={{ fontSize: "35px" }} />
          </Link>,
        ]}
      />
      <Space>
        <FilterTitle>Lọc:</FilterTitle>
        <Select
          placeholder="Danh mục cần tìm kiếm"
          onChange={onFilerCategory}
          allowClear={true}
        >
          {category.map((item, index) => {
            return (
              <Option value={item.id} key={index}>
                {item.name}
              </Option>
            );
          })}
        </Select>
      </Space>
      <Divider></Divider>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </>
  );
};

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

export default Product;
