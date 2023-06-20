import React from "react";

/* component interface */
export interface IMyFirstInteractWidget {
    name : string
    onClick : () => void
}

/* component react logic */
export const MyFirstInteractWidget = React.forwardRef<any, IMyFirstInteractWidget>((props, ref) => {
    return <div ref={ref} onClick = {() => {props.onClick; console.log("hi world")}}  >       
         <h1>hi world this is my first interact widget {props.name}</h1>
    </div>
});