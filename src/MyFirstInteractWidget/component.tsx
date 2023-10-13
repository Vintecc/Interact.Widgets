import React from "react";
import { IBaseProps, IBaseActions } from "@vintecc/interact";

/* component interface */
export interface IMyFirstInteractWidget extends IBaseProps, IBaseActions {
    name: string,
}

/* component react logic */
export const MyFirstInteractWidget = React.forwardRef<any, IMyFirstInteractWidget>((props, ref) => {
    return <div
        ref={ref}
        style={{
            zIndex: props.zIndex,
            backgroundColor: props.backgroundColor,
            color: props.color,
            fontSize: props.fontSize
        }}

        // standard events from IBaseActions
        onClick={() => props.onClick?.(props.name)}              // change undefined to the value this component uses
        onPointerOver={() => props.onHover?.(props.name)}        // change undefined to the value this component uses
        onPointerDown={() => props.onPointerDown?.(props.name)}  // change undefined to the value this component uses
        onPointerUp={() => props.onPointerUp?.(props.name)}      // change undefined to the value this component uses
    >
        {/* component logic goes here */}
        <h1>Header {props.name}</h1>
    </div>
});