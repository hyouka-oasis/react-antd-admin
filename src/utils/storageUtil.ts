export const setStorage = (key: string, value: string ) => {
    localStorage.setItem(key, value)
}

export const getStorage = (key: string): string | undefined | unknown | Array<string> => {
    return localStorage.getItem(key)
}

export const clearStotage = (): void => {
    localStorage.clear()
}
