import {FC, InputHTMLAttributes } from "react";

export interface CustomInput extends InputHTMLAttributes<HTMLInputElement>{
    type:string
    name:string
    placeHolder:string
    value:string
}

export const INPUTCustom:FC<CustomInput>=({placeHolder,name,value,onChange,onBlur,...rest})=>{
    return (
        <>
            <input
            placeholder={placeHolder}
            value={value}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            { ...rest}
            />
        </>
    )
}