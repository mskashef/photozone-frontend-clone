import store from 'store';
const initialState = {
    homePagePosts: [],
    username: store.get('username'),
    openedChat: undefined
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'setHomePagePosts':
            return {
                ...state,
                homePagePosts: action.value
            };
        case 'setUsername':
            return {
                ...state,
                username: action.value
            };
        case 'setOpenedChat':
            return {
                ...state,
                openedChat: action.value
            };
        default:
            return state;
    }
};
export default reducer;
