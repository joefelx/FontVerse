const UserReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        user: action.payload,
      };

    default:
      break;
  }
};

export default UserReducer;
