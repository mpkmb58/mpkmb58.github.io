import React, { useState, useEffect } from 'react'

function Product() {
    const [nama, setNama] = useState();


    useEffect(() => {
        if (nama) {
            document.title = `Profil | ${nama}`
        }
    }, [nama])


    function handleNameChange(e) {
        setNama(e.target.value)
    }



    return (
        <section className="container d-flex justify-content-center align-items-center flex-column">
            <h1>
                {!nama ? <i>-Ketik nama anda-</i> : nama}
            </h1>
            <input type="text" className="form-control" value={nama} onChange={handleNameChange} />
        </section>
    )
}

export default Product
