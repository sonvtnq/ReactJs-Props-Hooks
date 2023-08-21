import './data.css'
import RowData from './rowData'

const Data=(props)=>{

    const widthColunm=['5%','20%','20%','10%','15%','30%']

    const detail=(key)=>{
        props.detail(key)
    }
    const update=(key)=>{
        props.update(key)
    }
    const deleteSV=(key)=>{
        props.deleteSV(key)
    }
    // console.log(props.listData);
    return(
        <div className='table'>
            <div 
                className='head'
            >
                <div
                    style={{width: widthColunm[0]}}
                >
                    <p>#</p>
                </div>
                <div
                    style={{width: widthColunm[1]}}
                >
                    <p>Mã Sinh viên</p>
                </div>
                <div
                    style={{width: widthColunm[2]}}
                >
                    <p>Tên sinh viên</p>
                </div>
                <div
                    style={{width: widthColunm[3]}}
                >
                    <p>Tuổi</p>
                </div>
                <div
                    style={{width: widthColunm[4]}}
                >
                    <p>Giới tính</p>
                </div>
                <div
                    style={{width: widthColunm[5]}}
                >
                    <p>Hành động</p>
                </div>
            </div>
            <div className='data'>
                {
                    !props.dataAfterSearch?(
                    props.listData.map((rowData,index)=>{
                        return(
                            <RowData
                                key={index}
                                widthColunm={widthColunm}
                                detail={() => detail(index + 1)}
                                update={() => update(index + 1)}
                                deleteSV={() => deleteSV(index + 1)}
                                // update={update}
                                // deleteSV={deleteSV}
                                data={rowData}
                                stt={index+1}
                            />
                        )
                        
                    })
                    ):(
                        props.dataAfterSearch.map((rowData,index)=>{
                            return(
                                <RowData
                                    key={index}
                                    widthColunm={widthColunm}
                                    detail={() => detail(index + 1)}
                                    update={() => update(index + 1)}
                                    deleteSV={() => deleteSV(index + 1)}
                                    // update={update}
                                    // deleteSV={deleteSV}
                                    data={rowData}
                                    stt={index+1}
                                />
                            )
                            
                        })
                    )
                }
            </div>
        </div>
    )
}

export default Data