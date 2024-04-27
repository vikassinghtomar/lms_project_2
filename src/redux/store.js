import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slices/Authslice";
import CourseSliceReducer from "./slices/CourseSlice";
const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        course: CourseSliceReducer
    },
    devTools: true
});

export default store;