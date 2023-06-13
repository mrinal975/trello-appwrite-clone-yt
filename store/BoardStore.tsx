import { create } from "zustand";
import { getTodosGroupedByColumn } from "@/lib/getTodosGroupedByColumn";
interface BoardState {
  board: any;
  getBoard: () => void;
}
export const useBoardStore = create<BoardState>((set) => ({
  bears: {
    columns: new Map<TypedColumn, Column>(),
  },
  getBoard: async () => {
    const board = await getTodosGroupedByColumn();
    set({ board });
  },
}));
