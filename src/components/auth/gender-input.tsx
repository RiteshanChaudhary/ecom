/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from 'react-select'
import { Controller, } from "react-hook-form";
import React from 'react';
interface IProps {
    control: any;
}
const GenderInput: React.FC<IProps> = ({ control }) => {

    const options = [
        {
            label: 'Male',
            value: 'male'
        },
        {
            label: 'Female',
            value: 'female'
        },
        {
            label: 'Others',
            value: 'others'
        },
    ]
    return (
        <>
            <Controller
                name="gender"
                control={control}
                render={({ field }) => {
                    return (
                        <>
                            <label>Gender</label>
                            <section >
                                <Select  {...field} options={options} />
                            </section>
                        </>
                    )
                }}
            />
        </>

    )
}

export default GenderInput



