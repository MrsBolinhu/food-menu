import api from './api'
import authHeader from './auth.header'

const createItem = (newItem) => {
    api.post("create_item.php", newItem, { headers: authHeader() })
}

const listItems = () => {
    return api.get("list_items.php", { headers: authHeader() })
}

const listItem = (itemId) => {
    return api.get("list_item.php", { itemId: itemId }, { headers: authHeader() })
}

const searchItem = () => { }

const editItem = (itemId) => { }

const deleteItem = (itemId) => {
    api.delete("delete_item.php", { headers: authHeader(), params: { itemId: itemId } })
}


const requestService = {
    createItem,
    listItems,
    listItem,
    searchItem,
    editItem,
    deleteItem,
}

export default requestService