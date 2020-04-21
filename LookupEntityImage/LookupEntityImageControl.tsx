import * as React from "react";
//import { useState, useEffect } from "react";
//import { Stack, VirtualizedComboBox,TextField, IComboBoxOption,IComboBox, Image, IImageProps, ImageFit, warnConditionallyRequiredProps} from "@fluentui/react/lib/index"; 
import {mergeStyles, ImageIcon} from "@fluentui/react/lib";
// import { mergeStyles } from "@fluentui/react/lib/Styling";
// import { initializeIcons } from "@fluentui/react/lib/icons";


//PROPS for component (received from caller)
export interface ILookupEntityImageProps {
    imagedata: string;
    imagesize: number;
    rounded: boolean
}


const LookupEntityImageControl = (props : ILookupEntityImageProps): JSX.Element => {

    //STATE HOOKS VARIABLES 
    // const [options, setOptions] = useState<IComboBoxOption[]>([]);
    // const [selectedOption, setSelectedOption] = useState<IComboBoxOption|undefined>(undefined);
    // const [isLoading, setIsLoading] = useState<boolean>(true);

    const rounded = mergeStyles({
        borderRadius: 0.5
    })

    

    //MAIN RENDERING
    return ( 
        <ImageIcon imageProps={{src:"data:image/jpeg;base64," + props.imagedata ,
                                width:props.imagesize,
                                height:props.imagesize}}/> 
    )
    
                
}

export default LookupEntityImageControl;