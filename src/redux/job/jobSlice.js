import { createSlice } from "@reduxjs/toolkit";
import { allJobs, setJobsInStorage } from "../../utilities/storage";

// Initial Job State
const initialState = {
  allJobs: allJobs ? JSON.parse(allJobs) : null,
};

// Job Reducer
export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    // Actions
    setJobs: (state, action) => {
      setJobsInStorage(action.payload);
      state.allJobs = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setJobs } = jobSlice.actions;

export default jobSlice.reducer;
