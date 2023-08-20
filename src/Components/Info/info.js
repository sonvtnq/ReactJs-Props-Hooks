import { useEffect, useState } from 'react'
import CustomButton from '../customButton/customButton'
import CustomInput from '../customInput/customInput'
import './info.css'

const Info =props=>{
    const SelectionsGioiTinh=[
        'Giới tính',
        'Nam',
        'Nữ',
        'Khác'
    ]
    const SelectionsCity=[
        'Thành phố',
        'Hà Nội',
        'TP Hồ Chí Minh',
        'Đà Nẵng',
        'Hải Phòng',
        'Nam Định',
        'Khác'
    ]
    const closeInfo=()=>{
        props.setType('')
    }
    const Type=()=>{
        switch(props.type){
            case 'add':
                return 'Create'
            case 'detail':
                return ' '
            case 'update':
                return 'Update'
            case 'delete':
                return 'Confirm Delete'
            default:
                return ''
        }
    }
    // console.log(props.allowEdit);
    const _inputChange=e=>{
        // console.log(e.target.value);
        props.setData({
            ...props.data,
            [e.target.name]:e.target.value,
        })
        props.setDataShow({
            ...props.dataShow,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=()=>{
        props.proceed()
    }
    // useEffect(()=>{
    //     props.setData({
    //         ...props.data
    //     })
    // },[])
    // console.log(props.dataShow);
    // console.log(1);
    return (
        <div className={Type()?'info show':'info'}
            style={{padding:'1rem', 
                boxShadow:'0 0 10px rgba(0,0,0,0.5)',
                width: '500px',
                margin:'1rem',
                marginLeft:'0',
                borderRadius:'.5rem'
            }}  
        >
            <CustomInput
                label="Mã sinh viên"
                name="maSinhVien"
                type="text"
                placeholder=""
                inputChange={_inputChange}
                value={props.dataShow.maSinhVien}
                allowEdit={props.allowEdit}
            />
            <CustomInput
                label="Tên sinh viên"
                name="tenSinhVien"
                type="text"
                placeholder=""
                inputChange={_inputChange}
                value={props.dataShow.tenSinhVien}
                allowEdit={props.allowEdit}
            />
            <CustomInput
                label="Tuổi"
                name="tuoi"
                type="number"
                placeholder=""
                inputChange={_inputChange}
                value={props.dataShow.tuoi}
                allowEdit={props.allowEdit}
            />
            <CustomInput
                label="Giới tính"
                name="gioiTinh"
                type="select"
                placeholder="Nam"
                selections={SelectionsGioiTinh}
                inputChange={_inputChange}
                value={props.dataShow.gioiTinh}
                allowEdit={props.allowEdit}
            />
            <CustomInput
                label="Ngày sinh"
                name="ngaySinh"
                type="date"
                placeholder=""
                inputChange={_inputChange}
                value={props.dataShow.ngaySinh}
                allowEdit={props.allowEdit}
            />
            <CustomInput
                label="Nơi sinh"
                name="noiSinh"
                type="select"
                placeholder=""
                selections={SelectionsCity}
                inputChange={_inputChange}
                value={props.dataShow.noiSinh}
                allowEdit={props.allowEdit}
            />
            <CustomInput
                label="Địa chỉ"
                name="diaChi"
                type="text"
                placeholder=""
                inputChange={_inputChange}
                value={props.dataShow.diaChi}
                allowEdit={props.allowEdit}
            />
            
            {/* <button style={{padding:'.5rem 1rem',
                        backgroundColor:'blue',
                        borderRadius:'4px',
                        border:'none',
                        color:'#fff'
            }}>
                Create
            </button> */}
            <div>
                <CustomButton
                    content={Type()}
                    color={Type()=='Confirm Delete'?'green':(Type()=='Update'?'yellow':'blue')}
                    onClickButton={handleSubmit}
                    view={Type()==' ' || Type()==''?'none':null}
                />
                <CustomButton
                    content='Close'
                    color="red"
                    onClickButton={closeInfo}
                />
            </div>
            
        </div>
        // <></>
    )
}

export default Info