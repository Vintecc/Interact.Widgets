import { InteractComponent, GetBaseProperties, basePropsUiSettings, basePropsUiEvents } from "@vintecc/interact";
import { ExtendedInteractWidget, IExtendedInteractWidget } from "./component";
import { Name, Version } from "./Version.json"

const InteractComponentInstance = new InteractComponent<IExtendedInteractWidget>(ExtendedInteractWidget);
InteractComponentInstance.name = Name;
InteractComponentInstance.version = Version;
InteractComponentInstance.category = "Basic.Extended";

// if the component could be a parent and have child components set isCanvas to true
// InteractComponentInstance.isCanvas = true;

InteractComponentInstance.uiSettings = [
    {
        category: "Data",
        propName: "data",
        type: "databinding",
        binding: "two-way",
        default: "",
    },
    {
        propName: "gap",
        type: "number",
        default: 5
    },
    {
        propName: "activeText",
        type: "input",
        default: "Active"
    },
    {
        propName: "inactiveText",
        type: "input",
        default: "InActive"
    },
    {
        propName: "activeColor",
        type: "colorpicker",
        default: "#A8E04F"
    },
    {
        propName: "inactiveColor",
        type: "colorpicker",
        default: "#FD5757"
    },
    {
        category: "Size",
        propName: "indicatorSize",
        type: "number",
        default: 10
    },

    // there are some basic base properties on a component: "zIndex", "backgroundColor", "color", "fontSize", "width", "height" and "componentSpacing" (margin and padding).
    // if these properties are not component-dependent, use the base properties.
    ...GetBaseProperties([
        "width",
        "height",
        "componentSpacing"
    ]),
];
InteractComponentInstance.uiEvents = [
    // basePropsUiEvents are standard events, e.g.: onClick, onHover, onPointerDown & onPointerUp
    ...basePropsUiEvents,

    {
        name: "On change",
        propName: "onChange",
        action: "event",
        eventName: ""
    }
];

export default InteractComponentInstance;