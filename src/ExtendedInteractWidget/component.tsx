import React from "react";
import { IBaseProps, IBaseActions, DataBinding } from "@vintecc/interact";

/* component interface */
export interface IExtendedInteractWidget extends IBaseProps, IBaseActions {
    data: DataBinding<boolean>,
    inactiveText: string,
    activeText: string,
    inactiveColor: string,
    activeColor: string,
    indicatorSize: number,
    gap: number,
    onChange?: (value: boolean) => void
}

/* component react logic */
export const ExtendedInteractWidget = React.forwardRef<any, IExtendedInteractWidget>((props, ref) => {
    return <div
        ref={ref}
        style={{
            display: "flex",
            gap: `${props.gap}px`,
            alignItems: "center",

            margin: props.componentSpacing?.margin,
            padding: props.componentSpacing?.padding
        }}

        // standard events from IBaseActions
        onClick={() => props.onClick?.(props.data?.value)}              // change undefined to the value this component uses
        onPointerOver={() => props.onHover?.(props.data?.value)}        // change undefined to the value this component uses
        onPointerDown={() => props.onPointerDown?.(props.data?.value)}  // change undefined to the value this component uses
        onPointerUp={() => props.onPointerUp?.(props.data?.value)}      // change undefined to the value this component uses
    >
        {/* component logic goes here */}
        <button
        onClick={() => {
            props.data?.onChange?.(!props.data?.value);
            props.onChange?.(!props.data?.value);
        }}
        style={{
            width: props.width,
            height: props.height
        }}>
            {props.data?.value == true ? props.activeText : props.inactiveText}
        </button>
        <div style={{
            width: `${props.indicatorSize}px`,
            height: `${props.indicatorSize}px`,
            borderRadius: "50%",
            backgroundColor: props.data?.value === true ? props.activeColor : props.inactiveColor
        }}></div>
    </div>
});