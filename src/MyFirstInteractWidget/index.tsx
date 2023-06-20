import { InteractComponent } from "@vintecc/interact";
import { MyFirstInteractWidget, IMyFirstInteractWidget } from "./component";

const InteractComponentInstance = new InteractComponent<IMyFirstInteractWidget>(MyFirstInteractWidget);
InteractComponentInstance.name = "MyFirstInteractWidget";
InteractComponentInstance.version = "V1.0.0";
InteractComponentInstance.category = "Basic";
InteractComponentInstance.uiSettings = [
   {
    propName:"name",
    type:"input",
    default:"hi world",
    category:"Basic",
    name:"Name"
    }
];
InteractComponentInstance.uiEvents = [
    {
        propName:"onClick",
        action:"event",
        eventName:"",
        name:"On click"
    }
];

export default InteractComponentInstance;