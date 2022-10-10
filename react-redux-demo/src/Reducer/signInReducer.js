const signInReducer=(state="hello",action)=>
{
    switch(action.type){
        case "SIGNIN":
            return state="signed in";
        default:
            return state;
    }
}
export default signInReducer;