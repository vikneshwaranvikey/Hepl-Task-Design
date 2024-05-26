
import { Space, Table, message, Modal, Input } from 'antd';
import { useEffect, useState } from 'react';
import TransparentLoader from '../loader/TransparentLoader';
function Tables(props) {

    const { searchData } = props  //passData Destructure
    const [dataSource, setDataSource] = useState(searchData);
    const [editrecord, setEditrRecord] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setTimeout(() => {
                    setDataSource(searchData);
                    setLoader(false);
                }, 1000);
            } catch (error) {
                console.error('Error fetching data:', error);

            }
        };

        fetchData();

    }, [searchData]);

    const columns = [
        {
            key: '1',
            title: 'ID',
            dataIndex: 'id',
            render: (text) => <a href='icon'>{text}</a>,
            sorter: (rec1, rec2) => {
                return rec1.id - rec2.id
            }
        },
        {
            key: '2',
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <a href='icon'>{text}</a>,
            sorter: (rec1, rec2) => {
                return rec1.name < rec2.name
            }
        },
        {
            key: '3',
            title: 'E-Mail',
            dataIndex: 'email',
            sorter: (re1, re2) => {
                return re1.email < re2.email
            }
        },
        {
            key: '4',
            title: 'Address',
            dataIndex: 'address',
            render: (val) => {
                return val.street;
            }
        },
        {
            key: '5',
            title: 'Action',
            render: (record) => (
                <Space size="middle">
                    <a onClick={(e) => {
                        e.preventDefault();
                        onEditRecord(record);
                    }} href='icon'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-orange-300 fill-orange-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
                    </a>

                    <a onClick={(e) => {
                        e.preventDefault();
                        onDeleteStudent(record);
                    }} href='icon'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </a>
                </Space>
            ),
        }
    ];

    const onEditRecord = (record) => {
        setIsEdit(true);
        setEditrRecord({ ...record })
    }
    const onDeleteStudent = (record) => {
        Modal.confirm({
            title: "Are you sure, you want to delete this record?",
            okType: "danger",
            onOk: () => {
                setDataSource((pre) => {
                    message.success('Successfully deleted');
                    return pre.filter((student) => student.id !== record.id);
                });
            },
        });
    };
    const resetEditing = () => {
        setIsEdit(false);
        setEditrRecord(null);
    };
    return (
        <div >
            {loader ? <TransparentLoader /> : <Table className=' font-bold' columns={columns} style={{ fontSize: "bold" }} dataSource={dataSource} />}
            <Modal
                title="Edit Student"
                visible={isEdit}
                okText="Save"
                okType="danger"
                onCancel={() => {
                    resetEditing();
                }}
                onOk={() => {
                    setDataSource((pre) => {
                        return pre.map((student) => {
                            if (student.id === editrecord.id) {
                                return editrecord;
                            } else {
                                return student;
                            }
                        });
                    });
                    resetEditing();
                }}
            >

                <Input value={editrecord?.name} onChange={(e) => setEditrRecord((pre) => { return { ...pre, name: e.target.value } })} />
                <Input value={editrecord?.email} onChange={(e) => setEditrRecord((pre) => { return { ...pre, email: e.target.value } })} />
                <Input value={editrecord?.address.street} onChange={(e) => setEditrRecord((pre) => { return { ...pre, address: e.target.value } })} />

            </Modal>
        </div>
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