import React from 'react';
import Text from './Text';
import Password from './Password';
import Label from './Label';
import Radio from './Radio';
import TextArea from './TextArea';
import Select from './Select';
import { ErrorMessage } from 'formik';
import './input.scss';

export default function Input(props) {
    const inputs = {
        text: Text,
        password: Password,
        radio: Radio,
        textarea: TextArea,
        select: Select
    };
    const InputComponent = inputs[props.type];
    return (
        <div className={`formgroup ${props.inline ? 'form-inline' : ''}`}>
            <div className="d-flex align-items-center justify-content-between">
                <Label label={props.label} />
                {props.showLink && (
                    <a className="forget-pass" onClick={props.handleAction}>
                        {props.content}
                    </a>
                )}
            </div>
            <InputComponent {...props} />

            <ErrorMessage name={props.name} component="span" className="validation-error" />
        </div>
    );
}
