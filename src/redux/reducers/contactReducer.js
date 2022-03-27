const initialState = [
    {
        id: 0,
        name: "avinash"
    },
    {
        id: 1,
        name: "patel"
    }
];
const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state;
        case "DELETE_CONTACT":
            const filterContact = state.filter((contact) => contact.id !== action.payload && contact);
            state = filterContact;
            return state;
        default:
            return state;
    }
}

export default contactReducer;