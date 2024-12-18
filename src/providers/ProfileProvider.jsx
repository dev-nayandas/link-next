import { useReducer } from "react";
import { ProfileContext } from "../context";
import { initialState, profileReducer } from "../reducers/ProfileReducer";

// eslint-disable-next-line react/prop-types
const ProfileProvider = ({ children }) => {
    const [state, dispatch] = useReducer(profileReducer, initialState);
    return (
        <ProfileContext.Provider value={{ state, dispatch }}>
            {children}
        </ProfileContext.Provider>
    );
};

export default ProfileProvider;
