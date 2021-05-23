import React from 'react';
import {Input} from 'react-native-elements';

export const InputText = (props)=> {

    var textHolder = props.textHolder;
    var textLabel = props.textLabel;
    var iconChoice = props.iconChoice;

    return(
        <Input
            placeholder={textHolder}
            label={textLabel}
            leftIcon={{
                type:'font-awesome',
                name: iconChoice
            }}
            
        />
    );
}