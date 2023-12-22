import React, { useState } from 'react';
import { Button, Space, Table } from 'antd';
import { NavLink } from 'react-router-dom';

//Dữ liệu bên ngoài component
const data = [
  {
    "id": 1,
    "name": "Adidas Prophere",
    "alias": "adidas-prophere",
    "price": 350,
    "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    "size": "[36,37,38,39,40,41,42]",
    "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    "quantity": 995,
    "deleted": false,
    "categories": "[{\"id\":\"ADIDAS\",\"category\":\"ADIDAS\"},{\"id\":\"MEN\",\"category\":\"MEN\"},{\"id\":\"WOMEN\",\"category\":\"WOMEN\"}]",
    "relatedProducts": "[2,3,5]",
    "feature": true,
    "image": "https://shop.cyberlearn.vn/images/adidas-prophere.png"
  },
  {
    "id": 2,
    "name": "Adidas Prophere Black White",
    "alias": "adidas-prophere-black-white",
    "price": 450,
    "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    "size": "[36,37,38,39,40,41,42]",
    "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    "quantity": 990,
    "deleted": false,
    "categories": "[{\"id\":\"ADIDAS\",\"category\":\"ADIDAS\"},{\"id\":\"MEN\",\"category\":\"MEN\"},{\"id\":\"WOMEN\",\"category\":\"WOMEN\"}]",
    "relatedProducts": "[1,4,6]",
    "feature": false,
    "image": "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png"
  }
];
const ProductManagement = () => {
  //Nội dung trong component
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: 'id', //Tiêu đề của từng column
      dataIndex: 'id',
      name: 'id'
    },
    {
      title: 'name', //Tiêu đề của từng column
      dataIndex: 'name',
      name: 'name'
    },
    {
      title: 'image', //Tiêu đề của từng column
      dataIndex: 'image',
      name: 'image',
      render: function (text, record, index) {
        // console.log('text',text);
        // console.log('record',record);
        // console.log('index',index);
        return <div>
          <img src={record.image} alt='...' width={50} height={50} />
        </div>
      }
    },
    {
      title: 'size', //Tiêu đề của từng column
      dataIndex: 'size',
      name: 'size',
      render: function (text, record, index) {
        const sizes = JSON.parse(text);
        return <div>
          {sizes?.map((number) => {
            return <span className='mx-2'>{number}</span>
          })}
        </div>
      },
    }, {
      title: 'Action',
      dataIndex: 'action',
      name: 'action',
      render: (text,record,index)=> {
        return <div>
            <NavLink to={`/detail/${record.id}`}>View detail</NavLink>
        </div>
      }
    }
  ];
  return (
    <div className="container">
      <h3>Product mangement </h3>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </div>
  );
}

export default ProductManagement