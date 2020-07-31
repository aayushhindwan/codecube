const initialState = {
    name : "shivam",
    status : "draft",
    selected : true,
    selectedSectionIndex : null,
    sections : []
}

const updateSections = (state = initialState,action)=>  {
    switch(action.type){
         case "ADD_SECTION":
             return {
                ...state,
                sections: [...state.sections, action.payload]
             }
         case "SELECTED_SECTION_INDEX" :
             return {
                 ...state,
                 selectedSectionIndex : action.payload
             }  
         case "RE_ARRANGENED_SECTIONS" :
               return {
                   ...state,
                   sections : [action.payload ]
               }      

         default : 
                  return state    
    }
}

export default updateSections;