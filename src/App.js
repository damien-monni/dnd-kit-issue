import { useDroppable, useDraggable, DndContext } from "@dnd-kit/core";
import { useState } from "react";

const Draggable = () => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });

  return (
    <div style={{ display: "flex" }}>
      <div
        data-cy="draggable"
        ref={setNodeRef}
        style={{
          transform: transform
            ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
            : undefined,
          border: "1px solid black",
          padding: 16,
          margin: "16px 0",
          backgroundColor: "white",
          cursor: "move",
        }}
        {...listeners}
        {...attributes}
      >
        DRAG AND DROP ME
      </div>
    </div>
  );
};

const Root = ({ isDropped }) => {
  const { isOver, setNodeRef: droppableRef } = useDroppable({
    id: "droppable",
  });

  return (
    <div>
      <Draggable />

      {isDropped ? null : (
        <div
          data-cy="droppable"
          ref={droppableRef}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 300,
            height: 300,
            border: "2px dashed gray",
            backgroundColor: isOver ? "gray" : "white",
          }}
        >
          DROP HERE
        </div>
      )}
    </div>
  );
};

function App() {
  const [isDropped, setIsDropped] = useState(false);

  return (
    <DndContext
      onDragEnd={(event) => {
        if (event.over?.id) {
          setIsDropped(true);
        }
      }}
    >
      <Root isDropped={isDropped} />
    </DndContext>
  );
}

export default App;
