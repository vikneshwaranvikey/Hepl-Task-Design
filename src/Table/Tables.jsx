import React, { useEffect, useState } from 'react'
import { Space, Table } from 'antd';
import axios from "axios";



const columns = [
    {
        key: '1',
        title: 'ID',
        dataIndex: 'id',
        render: (text) => <a>{text}</a>,
        sorter: (rec1, rec2) => {
            return rec1.id - rec2.id
        }
    },
    {
        key: '1',
        title: 'Name',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>,
        sorter: (rec1, rec2) => {
            return rec1.name < rec2.name
        }
    },
    {
        key: '2',
        title: 'E-Mail',
        dataIndex: 'email',

    },
    {
        key: '4',
        title: 'Action',
        render: () => (
            <Space size="middle">
                <a ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-orange-300 fill-orange-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
                </a>
                <a ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
                </a>
            </Space>
        ),
    }
];

function Tables() {
    const [Data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("https://jsonplaceholder.typicode.com/users")
            setData(result.data)
        }
        fetchData()
    }, [])


    return (
        <div ><Table className=' font-bold' columns={columns} style={{ fontSize: "bold" }} dataSource={Data} /></div>
    )
}

export default Tables;





// const data = [
//     {
//         key: '1',
//         name: 'John Brown',
//         address: 'New York No. J Lake Park',

//     },
//     {
//         key: '2',
//         name: 'Aim Green',
//         address: 'London No. A Lake Park',
//     },
//     {
//         key: '3',
//         name: 'Goe Black',
//         address: 'Sydney No. G Lake Park',

//     },
//     {
//         key: '4',
//         name: 'Bim Green',
//         address: 'London No. B Lake Park',
//     },
//     {
//         key: '5',
//         name: 'Koe Black',
//         address: 'London No. K Lake Park',
//     },
//     {
//         key: '6',
//         name: 'Him Green',
//         address: 'London No. H Lake Park',
//     },
//     {
//         key: '7',
//         name: 'Mohn Brown',
//         address: 'London No. M Lake Park',
//     },
// ];