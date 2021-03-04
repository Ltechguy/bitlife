import * as actions from '../actions/actionTypes'

const initialState = {
    age: 0,
    actions: [
      { action: "I was born in Italy.", },
      { action: "My mother's name is Chiara, she is 34." },
      { action: "My father's name is Antonio, he is 38." }
    ]
};

const moreActions = [
  {action: "I found out that I hate broccoli."},
  {action: "I enjoyed a Pina Colada with my mom."},
  {action: "I wanna break free."},
  {action: "I want to become a rockstar when I grow up."},
  {action: "Damn, this broccoli are shit."}
]


const incrementAge = (state, action) => {
  let num = Math.round(Math.random() * 10 % moreActions.length);
  if(num >= moreActions.length) {
    num--;
  }
  return { 
    actions: [moreActions[num]],
    age: state.age + 1 
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case actions.INCREMENT_AGE:
        return incrementAge(state, action);
      default:
        return state;
    }
};

export default reducer;
