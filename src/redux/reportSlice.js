import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reports: [],
};

const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    addReport: (state, action) => {
      state.reports.push(action.payload);
    },
    deleteReport: (state, action) => {
      state.reports = state.reports.filter(
        (report) => report.id !== action.payload
      );
    },
    updateReport: (state, action) => {
      const { id, title, description } = action.payload;
      const index = state.reports.findIndex((report) => report.id === id);
      if (index !== -1) {
        state.reports[index] = { ...state.reports[index], title, description };
      }
    },
    setReports: (state, action) => {
      state.reports = action.payload;
    },
  },
});

export const { addReport, deleteReport, updateReport, setReports } =
  reportSlice.actions;
export default reportSlice.reducer;
