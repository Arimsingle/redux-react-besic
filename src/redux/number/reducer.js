const initialNum = 0;
export const numberReducer = (numbers = initialNum, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return action.paylaod + 1;
        case 'DECREMENT':
            return action.paylaod - 1;
        default: return numbers;
    }
}