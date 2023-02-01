export const isDividerVisible = (elementIndex: number, array: any[]) => {
    if (!array || array.length ===0) {
        return false
    }

    return elementIndex !== array.length - 1
}