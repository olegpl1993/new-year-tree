import { Item } from "../../../shared/types";

export interface ItemsState {
  items: Item[];
}

export interface ItemsPayload {
  item?: Item;
  index?: number;
  position?: [number, number, number];
}

export const itemsSlice = {
  initialState: {
    items: [],
  },
  reducer: (
    state: ItemsState,
    action: { type: string; payload?: ItemsPayload }
  ) => {
    const actions: Record<string, () => ItemsState> = {
      ADD_ITEM: () => {
        const newItems = [...state.items];
        newItems.forEach((selectedItem) => {
          if (selectedItem.activeElement) {
            selectedItem.activeElement = false;
          }
        });
        if (action?.payload?.item) {
          newItems.push(action?.payload.item);
        }

        return {
          ...state,
          items: newItems,
        };
      },

      SET_ACTIVE_ITEM: () => {
        const newItems = [...state.items];
        newItems.forEach((selectedItem) => {
          if (selectedItem.activeElement) {
            selectedItem.activeElement = false;
          }
        });
        if (action?.payload?.index !== undefined) {
          newItems[action.payload.index].activeElement = true;
        }

        return {
          ...state,
          items: newItems,
        };
      },

      DELETE_ACTIVE_ITEM: () => {
        const newItems = [...state.items];
        newItems.forEach((selectedItem, index) => {
          if (selectedItem.activeElement) {
            newItems.splice(index, 1);
          }
        });

        return {
          ...state,
          items: newItems,
        };
      },

      MOVE_ACTIVE_ITEM: () => {
        const newItems = [...state.items];
        newItems.forEach((item) => {
          if (item.activeElement) {
            item.activeElement = false;
            item.position = action.payload?.position || item.position;
          }
        });

        return {
          ...state,
          items: newItems,
        };
      },
    };

    return actions[action.type]?.() || state;
  },
};
