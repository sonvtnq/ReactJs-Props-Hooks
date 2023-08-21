import { useState } from "react";
import React from "react";
import Info from "../Info/info";
import Data from "../data/data"
import MainHeader from "../mainHeader/mainHeader"

const Main=props=>{
    const defaultData={
        maSinhVien:'',
        tenSinhVien:'',
        tuoi:'',
        gioiTinh:'',
        ngaySinh:'',
        noiSinh:'',
        diaChi:'',
    }
    const [keyIndex,setKeyIndex]=useState()
    const  [data,setData]=useState({
        ...defaultData
    })
    const  [dataShow,setDataShow]=useState({
        ...defaultData
    })
    const [type,setType]=useState('')
    const [allowEdit,setAllowEdit]=useState(false)
    const [listData,setListData]=useState([
        {
            maSinhVien:'SV001',
            tenSinhVien:'Nguyễn Văn A',
            tuoi:'20',
            gioiTinh:'Nam',
            ngaySinh:'2003-01-26',
            noiSinh:'Hà Nội',
            diaChi:'Kim Liên, Đống Đa',
        },
    ])

    // hiển thị các hành động
    const add=()=>{
        setType('add');
        // console.log(dataShow);
        setDataShow({...defaultData})
        setData({...defaultData})
        setAllowEdit(false)
    }
    const search=()=>{
        setType('search');
        // console.log('search');
        setAllowEdit(false)
    }
    const detail=(key)=>{
        setDataShow(listData[key-1])
        // console.log(key);
        setType('detail');
        setAllowEdit(false)
    }
    const update=(key)=>{
        setDataShow(listData[key-1])
        setType('update');
        setAllowEdit(true)
        setKeyIndex(key-1)
    }
    const deleteSV=(key)=>{
        setType('delete');
        setDataShow(listData[key-1])
        setAllowEdit(false)
        setKeyIndex(key-1)
    }

    //Xử lý các hành động
    const proceed= ()=>{
        switch(type){
            case 'add':
                // console.log('add');
                // console.log(data);
                setListData(listData=>[...listData,data]);
                return
            case 'update':
                // console.log('update');
                setListData(listData=>{
                    const updatedData = [...listData];
                    updatedData[keyIndex] = dataShow;
                    return updatedData;
                });
                return 
            case 'delete':
                setListData(prevListData => prevListData.filter((_, index) => index !== keyIndex));
                setType('')
                // console.log('delete');
                return 
            default:
                return 
        }
    }
    // console.log(keyIndex);
    // console.log(1);
    // console.log(dataShow);
    return(
        <div
            style={{display:'flex', width:'100%'}}
        >
             <div 
                style={{
                    padding:'1rem 2rem',
                    boxShadow:'0 0 5px 0 rgba(0,0,0,0.5)',
                    borderRadius:'.5rem',
                    overflow:'hidden',
                    width:'100%',
                }}
                className={(type && type !== 'search') ? 'main showInfo' : 'main'}
            >
                <MainHeader add={add} search={search}/>
                <div
                    style={{borderTop:'1px solid rgba(0,0,0,0.3)'}}
                >
                    <h2>Danh sách sinh viên</h2>
                    <Data 
                        detail={detail}
                        update={update}
                        deleteSV={deleteSV}
                        listData={listData}
                    />
                </div>
                
            </div>
            <Info
                type={type}
                setType={setType}
                proceed={proceed}
                setData={setData}
                setDataShow={setDataShow}
                data={data}
                dataShow={dataShow}
                allowEdit={allowEdit}
            />
        </div>
       
    )
}
export default Main