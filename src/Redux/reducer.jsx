import { ADD_USER, DEL_USER, LOGIN_USER } from "./actions";
import { users } from "./states";

export const rootReducer = (state = users, action) => {
 
  switch (action.type) {
    case ADD_USER:
      let newUsers = [...state ];
      newUsers.push(action.payload);
      return newUsers;

    case DEL_USER:
      let newUser = [...state];
      newUser = newUser.filter((user) => user.id != action.payload);
      return newUser;

    case LOGIN_USER:
      let newuser = [...state];
      newuser.push(action.payload);
      return newuser;
  }
  return state;
};
