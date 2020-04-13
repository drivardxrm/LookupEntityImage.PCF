import * as React from "react";
//import { useState, useEffect } from "react";
//import { Stack, VirtualizedComboBox,TextField, IComboBoxOption,IComboBox, Image, IImageProps, ImageFit, warnConditionallyRequiredProps} from "@fluentui/react/lib/index"; 
import { ImageIcon} from "@fluentui/react/lib/Icon";
// import { mergeStyles } from "@fluentui/react/lib/Styling";
// import { initializeIcons } from "@fluentui/react/lib/icons";


//PROPS for component (received from caller)
export interface ILookupEntityImageProps {
    imagedata: string;
}


const LookupEntityImageControl = (props : ILookupEntityImageProps): JSX.Element => {

    //STATE HOOKS VARIABLES 
    // const [options, setOptions] = useState<IComboBoxOption[]>([]);
    // const [selectedOption, setSelectedOption] = useState<IComboBoxOption|undefined>(undefined);
    // const [isLoading, setIsLoading] = useState<boolean>(true);



    //MAIN RENDERING
    return ( 
        <ImageIcon style={{  width:32, height:32 }} imageProps={{src:"data:image/jpeg;base64," + props.imagedata ,width:25,height:25}}/> 
    )
    
                
}

export default LookupEntityImageControl;