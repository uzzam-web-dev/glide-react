import React from 'react';
import styles from './SlidingBorderButton.module.css'

interface ButtonProps {
    label: String,
    color?: string,
    backGroundColor?: string,
    width?: string,
    height?: string,
}


const SlidingBorderButton = ({ label, color, backGroundColor, width, height }: ButtonProps) => {
    return <>
        <button
            // style={{
            //     ...(backGroundColor) && { backgroundColor: backGroundColor },
            //     ...(color) && { color: color },
            //     ...(width) && { width: width },
            //     ...(height) && { height: height },
            // }}
            id='btn-5'
            className={styles.btn_5}
        >{label ?? "Button"}</button>

    </>
}

export default SlidingBorderButton;