import ticketListReducer from '../../reducers/ticket-list-reducer';

describe('ticketListReducer', () => {
  let action;
  

  const currentState = {
    1:{
      names: 'Ryan & Aimen',
      location: '4B',
      issue: 'Redux action is not working correctly.',
      id: 1
    }, 2: {
      names: 'Jasmine and Justine',
      location: '2A',
      issue: 'Reducer has side effects.',
      id: 2 
    }
  };
  
  const ticketData = {
    names: "Ryan & Aimen",
    location: "4B",
    issue: "Reduct action is not working correctly.",
    id: 1
  };
  

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new ticket data to mainTicketList", () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type:"ADD_TICKET",
      names: names,
      location: location,
      issue: issue,
      id: id
    };

    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });


  test("should successfully delete a ticket", () => {
    action = {
      type: "DELETE_TICKET",
      id: 1
    };
    expect(ticketListReducer(currentState, action)).toEqual({
      2: {
        names: "Jasmine and Justine",
        location:"2A",
        issue: 'Reducer has side effects.',
        id: 2
      }
    });
  });
});
