const userReducer = (state = {}, actions: any) => {
  switch (actions.type) {
    case "ALL_USERS":
      return actions.data;
    default:
      return state;
  }
};

export default userReducer;
