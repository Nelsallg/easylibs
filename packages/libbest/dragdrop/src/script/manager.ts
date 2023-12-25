type DraggedElement = HTMLElement;
type Mixed = Element | Error | null | undefined;

type DragAnimation = {
  animate: boolean;
  type?: string;
  position?: string;
};

export interface Manager<T extends DragAnimation> {
  droppingStart(): void;
  dragStart(event: DragEvent): DraggedElement | undefined | null;
  drop(event: DragEvent, animation?: T): Mixed;
  draggablePlaceholder(skeleton?: string | Element, animationType?: string): HTMLElement;
}
