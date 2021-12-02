import {
  CaseReducer,
  createSlice,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";

interface Book {
  id: string;
  title: string;
  author: string;
}

interface BooksState {
  list: Book[];
}

const initialState: BooksState = {
  list: [
    {
      id: nanoid(),
      title: "Thus Spoke Zarathustra",
      author: "Friedrich Nietzsche",
    },
    {
      id: nanoid(),
      title: "Insomnia",
      author: "Stephen King",
    },
  ],
};

const addBookReducer: CaseReducer<
  BooksState,
  PayloadAction<Omit<Book, "id">>
> = (state, action) => {
  state.list.push({ ...action.payload, id: nanoid() });
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: addBookReducer,
  },
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;
