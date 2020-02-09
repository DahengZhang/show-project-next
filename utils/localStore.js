export default {
    setItem (key, value) {
        window.localStorage.setItem(key, JSON.stringify({ value }))
    },
    getItem (key) {
        try {
            return JSON.parse(window.localStorage.getItem(key)).value
        } catch (error) {
            return undefined
        }
    },
    removeItem (key) {
        localStorage.removeItem(key)
    }
}
