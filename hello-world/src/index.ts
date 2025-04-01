let weight: number | string;
//This is not possible
//let weightTwo: number & string;
type Draggable = {
    drag: () => void;
}

type Resizeable = {
    resize: () => void;
}

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
    drag: () => {
        console.log("Dragging");
    },
    resize: () => {
        console.log("Resizing");
    }
}