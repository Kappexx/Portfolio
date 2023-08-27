// DUCKS pattern

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {

  rotation: false
}

const starSlice = createSlice({
  name: "starRotation",
  initialState,
  reducers: {
    changeRotationState(state) {

      // dip copy agar gvinda statis radgan immeri akondrolebs da uzrunvelyofs
      state.rotation = !state.rotation
    }
  }
})

export const  {changeRotationState} = starSlice.actions

export default starSlice.reducer