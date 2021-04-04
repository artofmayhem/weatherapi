import React from 'react'


export default function List(props) {
    const comicList = props
    const data = comicList.comicNames
    //console.log(data)
    // data && data.map((item, idx) => {
    //     return console.log("comic List", item )

    // })
   

    return ( 
        <div className='d-flex justify-content-center flex-column' style={{backgroundColor: "#222", opacity: '0.9', textAlign: 'center', padding: '2vw'}}>
            <h6>Known Appearances</h6>
            {/* {data.items && data.items.map((item, idx) => {
                return (
                    <p stl>{comicList.comicNames.items[idx].name}</p>
                )
            })} */}
        </div>
    ) 

    
}