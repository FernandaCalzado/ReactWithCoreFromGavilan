import React, { ReactElement } from "react";

export default function Button(props: buttonProps){
    return (
        <button disabled={props.disabled} type={props.type} onClick={props.onClick} className="btn btn-primary">{props.children}</button>
    )
}

interface buttonProps{
   children: React.ReactNode;// ReactElement 
   onClick?(): void; 
   type: "button" | "submit";
   disabled: boolean;
}

Button.defaultProps = {
    type: "button",
    disabled:false
}
