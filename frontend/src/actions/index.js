export const addSection = (item) =>{
    
    return{
        type : 'ADD_SECTION',
        payload : item
    }
    
}

export const selectSectionIndex = (item)=>{
    return{
        type : 'SELECTED_SECTION_INDEX',
        payload : item
    }
}

export const re_arrangeSections = (item)=>{
    return{
        type :'RE_ARRANGENED_SECTIONS',
        payload : item
    }
}