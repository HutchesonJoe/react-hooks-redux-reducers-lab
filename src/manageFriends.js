const initialState = { friends: [] };

export function manageFriends(state=initialState, action) {
  if (action.type === "friends/add"){

    return {state.friends.push(action.payload)}
  } else if (action.type === "friends/remove"){
    return {friends:state.friends.filter((friend)=>friend.id!==action.payload)}
  }
  return state
}
