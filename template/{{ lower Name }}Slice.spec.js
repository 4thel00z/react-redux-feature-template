// Author:	{{Author}}
// License:	{{License}}
// Date:	{{currentDate}}
import {{lower Name}}Reducer, {
  // TODO: add action name
} from './{{ lower Name}}Slice';

describe('{{ lower Name }} reducer', () => {
  const initialState = {
    // TODO: add initial state here  
  };

  it('should handle initial state', () => {
    expect({{lower Name}}Reducer(undefined, { type: 'unknown' })).toEqual({
    });
  });
  // TODO: uncomment or remove
  /*
  it('should handle someAction', () => {
    const { unpackedArg } = counterReducer(initialState, someAction());
    expect(unpackedArg ).toEqual(4);
  });
  */
});
