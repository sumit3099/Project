export default function (state = null, action) {
    // eslint-disable-next-line
    switch (action.type) {
        case 'STORE_BBOOKS':
            return action.payload;
            // eslint-disable-next-line
            break;
    }
    return state;
}