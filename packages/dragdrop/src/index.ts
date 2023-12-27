
import { textHtmlToNode } from "../../utils/src/functions/convert-type";
import { enableScrollBehavior } from "../../utils/src/functions/scroll-behavior";

type Draggable = HTMLElement;
type DraggedElement = HTMLElement;
type EnteredDraggable = HTMLElement;
type LeftDraggable = HTMLElement;
type Mixed = Element | Error | null | undefined;

type DragAnimation = {
  animate: boolean;
  type?: string;
  position?: string;
};

export class DragAndDropManager<T extends DragAnimation> {
  private dragged: HTMLElement | undefined;
  private isDragging: boolean = false;
  private draggableParent: HTMLElement | undefined;
  private afterElement: HTMLElement | null = null;
  private placeholder: HTMLElement | null = null;
  private slip: string = "";
  private outerDragged: boolean = false;
  private startY: number = 0;
  private currentY: number = 0;
  private dragEvent: DragEvent | undefined;
  private dropEvent: DragEvent | undefined;

  constructor() {}

  public droppingStart(): void {
    const draggables = document.querySelectorAll('.draggable');
    draggables.forEach(() => {
      document.addEventListener('drag', this.drag.bind(this), false);
      document.addEventListener('dragover', this.dragOver.bind(this), false);
      document.addEventListener('dragenter', this.dragEnter.bind(this), false);
      document.addEventListener('dragleave', this.dragLeave.bind(this), false);
      document.addEventListener('dragend', this.dragEnd.bind(this), false);
    });
  }

  private drag(event: DragEvent): void {
    this.dragged = event.target as HTMLElement;
  }

  public dragStart(event: DragEvent): DraggedElement | undefined | null {
    if (event) {
      this.dragged = event.target as HTMLElement;
      this.startY = event.clientY;
      if (this.dragged.classList.contains('undraggable')) {
        return null;
      }
      this.dragEvent = event;
      this.dragged.style.opacity = '.4';
      this.dragged.classList.add('dragging');
      enableScrollBehavior();
      this.isDragging = true;
      return this.dragged;
    }
  }

  private dragOver(event: DragEvent): void {
    let element: HTMLElement = event.target as HTMLElement;
    this.currentY = event.clientY;
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
      let parent = element.closest('.dropzone');
      let undroppable = element.closest('.undroppable');
      if (!parent) {
        event.dataTransfer.dropEffect = 'none';
      } else if (undroppable) {
        event.dataTransfer.dropEffect = 'none';
      } else {
        event.dataTransfer.dropEffect = 'copy';
      }
    }

    if (
      this.draggableParent &&
      this.draggableParent.classList.contains("draggable")
    ) {
      const element = this.draggableParent.closest(".dropzone") as HTMLElement;
      if (this.isDragging) {
        this.afterElement = this.getDragAfterElement(
          element,
          event.clientY
        ) as HTMLElement;
        this.slip = this.draggingSlip();
        if (this.afterElement) {
          if ("top" === this.slip) {
            // animeIn({
            //   element: this.dragged,
            //   animation: {
            //     type: "slide",
            //     position: "bottom",
            //     clearAfterApplying: true,
            //   },
            //   display: null,
            // });
            element.insertBefore(this.dragged as Node, this.afterElement);
          }
          if ("bottom" === this.slip) {
            // animeIn({
            //   element: this.dragged,
            //   animation: {
            //     type: "slide",
            //     position: "top",
            //     clearAfterApplying: true,
            //   },
            //   display: null,
            // });
            element.insertBefore(
              this.dragged as Node,
              this.afterElement?.nextElementSibling as Node
            );
          }
        }
      }
    }
  }

  private dragEnter(event: DragEvent): EnteredDraggable {
    let element: HTMLElement = event.target as HTMLElement;
    this.draggableParent = element.parentElement as HTMLElement;
    if (element.classList.contains("dropzone")) {
      element.style.background = "rgba(0, 0, 0, 0.5)"; //#8b5cf6
    }
    return element;
  }

  private dragLeave(event: DragEvent): LeftDraggable {
    let element: HTMLElement = event.target as HTMLElement;
    this.draggableParent = element.parentElement as HTMLElement;
    if (
      element.classList.contains("dropzone") ||
      element.classList.contains("draggable")
    ) {
      element.style.background = "";
      if (this.placeholder) {
        element.removeChild(this.placeholder);
        this.placeholder = null;
      }
    }
    return element;
  }

  private dragEnd(event: Event): Draggable {
    let draggable: HTMLElement = event.target as HTMLElement;
    draggable.style.opacity = "";
    draggable.classList.remove("dragging");
    this.isDragging = false;
    if (
      this.placeholder &&
      this.draggableParent &&
      this.draggableParent.classList.contains("draggable")
    ) {
      const element = this.draggableParent.closest(
        ".dropzone"
      ) as HTMLElement;
      element.insertBefore(this.draggableParent, this.placeholder);
      element.removeChild(this.placeholder);
      this.placeholder = null;
    }
    return draggable;
  }

  public drop(event: DragEvent, animation?: T): Mixed {
    if (event) {
      event.preventDefault();
      let dropzone: HTMLElement = event.target as HTMLElement;
      this.dropEvent = event;
      if (dropzone.classList.contains("undroppable")) {
        return null;
      }
      try {
        if (dropzone.classList.contains("dropzone")) {
          dropzone.style.background = "";
          if (null != this.dragged?.parentNode) {
            this.dragged.parentNode.removeChild(this.dragged);
          }
          if (dropzone.localName == "td") {
            let tr = dropzone.parentElement;
            if (null != tr) {
              let dropzoneParent = tr.parentElement;
              if (null != dropzoneParent) {
                dropzoneParent.appendChild(this.dragged as Node);
              }
              tr.remove();
              return dropzoneParent;
            }
          }
        } else if (!dropzone.classList.contains("dropzone")) {
          return dropzone.closest(".dropzone");
        }
      } catch (error) {
        if (typeof error === "string") {
          return new Error(error);
        }
      }
    }
  }

  private hundleDraggedPosition(dropzone: Element): Element|undefined {
    const siblingElements = Array.from(dropzone!.children);
    const dropIndex = siblingElements.indexOf(dropzone);
    console.log({ dropIndex, siblingElements, dropzone });
    if (dropIndex !== -1) {
      let insertIndex = dropIndex;

      // Find the index of the element before the dropzone
      for (let i = dropIndex - 1; i >= 0; i--) {
        if (!siblingElements[i].classList.contains("undroppable")) {
          insertIndex = i + 1; // Insert after the element before the dropzone
          break;
        }
      }

      siblingElements.splice(insertIndex, 0, this.dragged as Element);
      const dropzoneParent = dropzone.parentElement!;
      dropzoneParent.innerHTML = ""; // Clear dropzone
      siblingElements.forEach((sibling) =>
        dropzoneParent.appendChild(sibling)
      );

      return dropzoneParent;
    }
  }

  public draggablePlaceholder(
    skeleton?: string | Element,
    animationType?: string
  ): HTMLElement|undefined {
    if (!skeleton) {
      skeleton = document.createElement("tr");
      const td = document.createElement("td");
      const div = document.createElement("div");
      skeleton.className = "draggable-skeleton";
      td.colSpan = 12;
      div.className = "rotating-border";
      td.appendChild(div);
      skeleton.appendChild(td);
      if (animationType) {
        this.setAnimation(skeleton, animationType);
      }
      return skeleton as HTMLElement;
    }
    if (typeof skeleton === "string") {
      return textHtmlToNode(skeleton) as HTMLElement;
    }
  }

  private setAnimation(element: Element, animationType?: string): void {
    let fromInToOut = true;
    const type = animationType ?? "slide";
    if ("top" === this.draggingSlip()) {
      fromInToOut = false;
    } else if ("bottom" === this.draggingSlip()) {
      fromInToOut = true;
    }
    // animeIn({
    //   element: element as HTMLElement,
    //   animation: { type, position: "top", clearAfterApplying: true },
    //   display: null,
    //   fromInToOut,
    // });
  }

  public draggingSlip(): string {
    if (this.currentY < this.startY) {
      return "top";
    } else if (this.currentY > this.startY) {
      return "bottom";
    }
    return "";
  }

  private getDragAfterElement(container: HTMLElement, y: number): Element | null {
    const draggableElements = Array.from(
      container.querySelectorAll(".draggable:not(.dragging)")
    );

    let closestElement = null;
    let minOffset = Number.POSITIVE_INFINITY;

    for (const child of draggableElements) {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > -box.height / 2 && offset < minOffset) {
        minOffset = offset;
        closestElement = child;
      }
    }
    return closestElement;
  }
}

