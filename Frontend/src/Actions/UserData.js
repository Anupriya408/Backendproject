export  const UserData = (dispatch)=>{

    // return(dispatch,getState)=>{
       async function GetData(){
        let res = await fetch('https://dead-gold-binturong-kilt.cyclic.app/users');
        let data= await res.json();
    
        dispatch({
            type:"USERDATA",
            payload:data
        })

       }
       GetData()
}