export const CAT_LIST = 'CAT_LIST';

// Store the cat list to save having to do multiple API calls
export function setCatList(catList) {
    return {
        type: 'CAT_LIST',
        catList
    }
}
