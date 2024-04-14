function addToCards(item) {
    return {
        type: 'ADD_TO_CREDITCARDS',
        payload: item
    }
}

function addToActive(item) {
    return {
        type: 'ADD_TO_ACTIVE',
        payload: item
    }
}

function removeFromStack(item) {
    return {
        type: 'REMOVE',
        payload: item
    }
}

function removeFromActive(item) {
    return {
        type: 'REMOVE_FROM_ACTIVE',
        payload: item
    }
}

export { addToCards, addToActive, removeFromStack, removeFromActive }