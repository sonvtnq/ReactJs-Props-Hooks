import CustomButton from "../customButton/customButton"
import CustomInput from "../customInput/customInput"

const MainHeader=props=>{
    const add=()=>{
        props.add();
    }
    const search=()=>{
        props.search()
    }
    const selectionsSort=[
        'Sắp xếp',
        'Mã sinh viên',
        'Tên sinh viên',
        'Tuổi',
    ]
    return(
        <div 
            style={{
                display:'flex', 
                justifyContent:'space-between', 
                alignItems:'center',
                margin:'auto',
                backgroundColor:'#f7f7f7'
            }}
        >
            <CustomButton 
                content='Thêm mới sinh viên'
                color='blue'
                onClickButton={add}
            />
            <div
                style={{
                    width:'30%',
                    display:'flex',
                    alignItems:'center',
                }}
            >
                <CustomInput 
                    label=''
                    name='search'
                    type='text'
                    placeholder='Search here'
                    paddingRight='0px'
                    width='300px'
                />
                <CustomButton
                    content='Tìm kiếm'
                    color='blue'
                    onClickButton={search}
                />
            </div>
            <CustomInput 
                label=''
                name='sort'
                type='select'
                selections={selectionsSort}
                // placeholder='Sắp xếp'
                width='300px'
            />
        </div>
    )
}

export default MainHeader   