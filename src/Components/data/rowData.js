import CustomButton from "../customButton/customButton"

const RowData=props=>{
    const detail=()=>{
        // console.log(props.detail());
        props.detail()
    }
    const update=()=>{
        props.update()
    }
    const deleteSV=()=>{
        props.deleteSV()
    }
    return(
        <div
            style={{width:'100%',display:'flex'}}
        >
            <div
                style={{width: props.widthColunm[0]}}
            >
                <p>{props.stt}</p>
            </div>
            <div
                style={{width: props.widthColunm[1]}}
            >
                <p>{props.data.maSinhVien}</p>
            </div>
            <div
                style={{width: props.widthColunm[2]}}
            >
                <p>{props.data.tenSinhVien}</p>
            </div>
            <div
                style={{width: props.widthColunm[3]}}
            >
                <p>{props.data.tuoi}</p>
            </div>
            <div
                style={{width: props.widthColunm[4]}}
            >
                <p>{props.data.gioiTinh}</p>
            </div>
            <div
                style={{width: props.widthColunm[5]}}
            >
                <CustomButton 
                    content='Xem'
                    color='red'
                    onClickButton={detail}
                />
                <CustomButton 
                    content='Sửa'
                    color='yellow'
                    onClickButton={update}
                />
                <CustomButton 
                    content='Xóa'
                    color='green'
                    onClickButton={deleteSV}
                />
            </div>
        </div>
    )
}

export default RowData