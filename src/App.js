import { useDroppable, useDraggable } from "@dnd-kit/core";

function App() {
  // Droppable
  const { isOver, setNodeRef: droppableRef } = useDroppable({
    id: "droppable",
  });

  // Draggable
  const {
    attributes,
    listeners,
    setNodeRef: draggableRef,
    transform,
  } = useDraggable({
    id: "draggable",
  });

  return (
    <div>
      <div
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

      <div style={{ display: "flex" }}>
        <div
          data-cy="draggable"
          ref={draggableRef}
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
    </div>
  );
}

export default App;
