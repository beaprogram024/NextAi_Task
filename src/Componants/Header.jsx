import React from 'react'

const Header = () => {
    return (
        <>
            <div className="container-fuild" style={{margin:'0px',padding:'0px',boxSizing:'border-box'}}>
                <div className="row " style={{ height: '50px' }}>
                    <div className="col-sm-6 d-flex">
                    <div className='p-3'>
                    <i class="fa-sharp fa-solid fa-envelope fa-xl" style={{ color: 'red' }}></i>&nbsp;
                        <span > <b style={{ color: 'gray' }}>
                            Info@compnay@com
                        </b> </span>

                    </div>

                    <div className='p-3'>
                    <i class="fa-sharp fa-solid fa-map-location-dot fa-xl" style={{ color: 'red' }}></i>&nbsp;
                        <span > <b style={{ color: 'gray' }}>
                        Sanny sale beach FL 33160
                        </b> </span>

                    </div>
                    

                    </div>
                    <div className="col-sm-6 d-flex justify-content-center">
                        <div className="mt-2 mx-2 p-2"
                            style={{ height: '40px', width: '40px', borderRadius: '50%', border: ' 1px solid rgb(238, 238, 238)', backgroundColor: 'gray' }}>
                            <i className="fa-brands fa-twitter fa-xl" style={{ color: 'white'  }}></i>
                        </div>
                        <div className="mt-2 mx-2 p-2"
                            style={{ height: '40px', width: '40px', borderRadius: '50%', border: ' 1px solid rgb(238, 238, 238)', backgroundColor: 'gray' }}>
                            <i className="fa-brands fa-facebook fa-xl" style={{ color: 'white'  }}></i>
                        </div>
                        <div className="mt-2 mx-2 p-2"
                            style={{ height: '40px', width: '40px', borderRadius: '50%', border: ' 1px solid rgb(238, 238, 238)', backgroundColor: 'gray' }}>
                            <i className="fa-brands fa-instagram fa-xl" style={{ color:'white' }}></i>
                        </div>
                        <div className="mt-2 mx-2 p-2 "
                            style={{ height: '40px', width: '40px', borderRadius: '50%', border: ' 1px solid rgb(238, 238, 238)', backgroundColor: 'gray' }}>
                            <i className="fa-brands fa-linkedin fa-xl" style={{ color: 'white'  }}></i>
                        </div>



                    </div>
                </div>
            </div>

        </>
    )
}

export default Header