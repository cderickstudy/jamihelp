import React, { useState } from 'react'
import MyDropzone from '../MyDropzone'
import MyButton from '../MyButton'
import { uploadFile } from '../../actions'
import s from './HomePage.module.scss'

const HomePage = () => {
    const [myFile, setMyFile] = useState()

    const processFile = async () => {
        if(!myFile) return null
        let formData = new FormData()
        formData.append("file", myFile)
        const result = await uploadFile(formData)
        console.log(result)
    }

    const handleFiles = (file) => {
        if (!file) return null
        return setMyFile(file)
    }

    return (
        <section className={`w-100 pt-5 ${s.backGround}`}>
            <div className="container mt-5">
                <div className="row mt-5 pt-5">
                    <div className="col-8 m-auto">
                        <h3 className="h3">Select a file to be processed:</h3>
                        <p className="pb-4">Only xlsx, txt or csv accepted.</p>
                        {!myFile && <MyDropzone multiple={false} accept=".xlsx,.csv,.txt" handleFiles={handleFiles} />}
                        {myFile &&
                            <section className="w-100">
                                <p><span className={s.fileUpload}>{myFile && myFile.name} <i onClick={() => setMyFile(null)} className="fas ml-4 text-danger fa-times" /></span></p>
                                <section className="w-100 text-right">
                                    <MyButton onClick={processFile} content="Process file" />
                                </section>
                            </section>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage
