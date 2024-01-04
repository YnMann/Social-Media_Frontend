import { createSlice } from "@reduxjs/toolkit";

export const socketsSlice = createSlice({
  name: "sockets",
  initialState: {
    socket: null,
    isConnected: false,
  },
  reducers: {
    connectSocket: (state, action) => {
      state.socket = action.payload;
      state.isConnected = true;
    },
    disconnectSocket: (state) => {
    //   if (state.socket !== null) state.socket.disconnectWS();
      state.socket = null;
      state.isConnected = false;
    },
  },
});

export const { connectSocket, disconnectSocket } = socketsSlice.actions;
export default socketsSlice.reducer;
