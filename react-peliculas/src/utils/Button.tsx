import React, { ReactElement } from "react";

export default function Button(props: buttonProps){
    return (
        <button type={props.type} onClick={props.onClick} className="btn btn-primary">{props.children}</button>
    )
}

interface buttonProps{
   children: React.ReactNode;// ReactElement 
   onClick?(): void; 
   type: "button" | "submit"
}

Button.defaultProps = {
    type: "button"
}
