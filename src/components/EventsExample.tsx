import { ChangeEvent, DragEvent, FC, MouseEvent, useRef, useState } from "react";

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>("");
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        console.log("Управляемый: " + value);
        console.log("Неуправляемый: " + inputRef.current?.value) ;
    }

    const dragHadler = (e: DragEvent<HTMLDivElement>) => {
        console.log("Drag");
    }

    const dropHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
        console.log('Drop');
    }

    const leaveHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const dragWithPreventHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }

    return (
        <div>
            <input type="text" ref = {inputRef} placeholder="Неуправляемый инпут"/>
            <input type="text" value={value} onChange={changeHandler} placeholder="Управляемый инпут"/>
            <button onClick={clickHandler}>Кнопка</button>

            <div
                onDrag={dragHadler}
                draggable
                style={{ width: '200px', height: "200px", backgroundColor: 'blue' }}
            />

            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{ width: '200px', height: "200px", backgroundColor: isDrag ? 'red' : "blue", marginTop: "20px" }}
            />
        </div>
    )
}

export default EventsExample