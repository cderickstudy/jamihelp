import React from 'react'
import Dropzone from 'react-dropzone'
import MyButton from '../MyButton'
import s from './MyDropzone.module.scss'

const MyDropzone = ({
    accept,
    multiple,
    handleFiles,
    customClass,
}) => {
    if (!handleFiles) return null
    return (
        <Dropzone accept={accept} multiple={multiple} onDrop={files => handleFiles(files && files[0])}>
            {({ getRootProps, getInputProps, }) => (
                <section className={`${customClass || ''} ${s.mainDrop}`} {...getRootProps()}>
                    <input {...getInputProps()} />
                    <section className="w-100 text-center">
                        <p className={`${s.txtglobeBlue} pb-3`}>Drag and Drop or click in the button <i className={`fas fa-file-upload`} /></p>
                        <MyButton onClick={() => null} content="Upload file" />
                    </section>
                </section>
            )}
        </Dropzone>
    )
}
export default MyDropzone
