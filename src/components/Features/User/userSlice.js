import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        fullName: "",
        phoneNumber: "",
        email: "",
        companyName: "",
        accessToken: "",
        refreshToken: "",
        isAuthenticated: false
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            const {fullName, phoneNumber, email, companyName, accessToken, refreshToken} = action.payload;
            state.user = {
                fullName,
                phoneNumber,
                email,
                companyName,
                accessToken,
                refreshToken,
                isAuthenticated: !!refreshToken,
            }
        },

        clearUserData: (state) => {
            state.user = {};
        }
    }
})

export const {setUserData, clearUserData} = userSlice.actions;
export default userSlice.reducer;
