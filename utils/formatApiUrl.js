export default (url, args) => {
    for (let i in args) {
        url = url.replace(new RegExp(`{${i}}`, 'g'), args[i])
    }
    return url
}
