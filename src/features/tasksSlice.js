import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tasks from "../data/tasks";

// Имитация асинхронного запроса
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasks);
    }, 1000);
  });
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    status: "idle", // idle | loading | succeeded | failed
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default tasksSlice.reducer;
