//login
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from '../constants/UserConstants';
import {
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET
} from '../constants/UserConstants';
const initUserInfo = {
    userInfo: null
};
export const userLoginReducer = (state = initUserInfo, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true, userInfo: null };
        case USER_LOGIN_SUCCESS:
            console.log('loggin success');
            return { loading: false, success: true, userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload, userInfo: null };
        case USER_LOGOUT:
            return { userInfo: null };

        case USER_UPDATE_PROFILE_REQUEST:
            console.log('update request:', state);
            return { ...state, loading: true, success: false };
        case USER_UPDATE_PROFILE_SUCCESS:
            const token = state.userInfo.token;
            let tmpUserInfo = { ...action.payload };
            tmpUserInfo.token = token;
            console.log('check state:', state.userInfo);
            return { ...state, loading: false, success: true, userInfo: { ...tmpUserInfo } };
        case USER_UPDATE_PROFILE_FAIL:
            console.log('check state: run failed');

            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
