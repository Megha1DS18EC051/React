
//const val=10;
let input=window.prompt("enter the value")
const counterReducer=(state=parseInt(input),action)=>
{
    switch(action.type){
        case "INCREMENT":
            return state+action.value;
        case "DECREMENT":
            return state-action.value;
        default:
            return state;
    }
}
export default counterReducer