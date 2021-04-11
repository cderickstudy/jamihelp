import React from 'react'
import s from './MyButton.module.scss'

const MyButton = ({
    alternative,
    onClick,
    content,
    disabled,
    customClass,
}) => {
    if (!content) return null
    return (
        <span
            onClick={(e) => {
                if (disabled) return null
                return onClick(e)
            }}
            aria-hidden="true"
            role="button"
            className={`${s.myButton} ${disabled ? s.disabled : ''} ${alternative ? s.altButton : ''} ${customClass || ''}`}
        >
            {content}
        </span>
    )
}

export default MyButton
