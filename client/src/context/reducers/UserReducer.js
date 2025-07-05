const UserReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      console.log("setting");

      return {
        user: action.payload,
      };

    default:
      break;
  }
};

export default UserReducer;
