const initialphoto = 'https://pbs.twimg.com/profile_images/1201373174094385155/PWpKVly2_400x400.jpg';
export const photoReducer = (photo = initialphoto, action) => {
    switch (action.type) {
        case 'SHOWPHOTO':
            return action.payload;
        default: return photo;
    }
}