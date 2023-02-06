let Data={
    Search:[],
    Cart:[],
    User:[]
}
export default function ShopDressReducer(state=Data, action){
    switch(action.type){
    case "GETCARTDATA": {
            // console.log(action.payload)
              return{
                ...state,
                Cart:action.payload
              }
        }
    case "GETSEACHDATA"  :{
        

        return{
            ...state,
            Search:action.payload
        }
    }  
    case "USERDATA"  :{
        

        return{
            ...state,
            User:action.payload
        }
    }  
        default:{
            return state
                
           
        }
    }
}