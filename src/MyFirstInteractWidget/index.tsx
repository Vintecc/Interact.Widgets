import { InteractComponent, GetBaseProperties, basePropsUiSettings, basePropsUiEvents } from "@vintecc/interact";
import { MyFirstInteractWidget, IMyFirstInteractWidget } from "./component";
import { Name, Version } from "./Version.json"

const InteractComponentInstance = new InteractComponent<IMyFirstInteractWidget>(MyFirstInteractWidget);
InteractComponentInstance.name = Name;
InteractComponentInstance.version = Version;
InteractComponentInstance.category = "Basic";
// if the component could be a parent and have child components set isCanvas to true
// InteractComponentInstance.isCanvas = true;
InteractComponentInstance.uiSettings = [
    {
        propName: "name",
        type: "input",
        default: ""
    },

    // there are some basic base properties on a component: "zIndex", "backgroundColor", "color", "fontSize", "width", "height" and "componentSpacing" (margin and padding).
    // if these properties are not component-dependent, use the base properties.
    ...GetBaseProperties([
        "zIndex",
        "backgroundColor",
        "color",
        "fontSize"
    ]),
];
InteractComponentInstance.uiEvents = [
    // basePropsUiEvents are standard events, e.g.: onClick, onHover, onPointerDown & onPointerUp
    ...basePropsUiEvents,
    
];

export default InteractComponentInstance;