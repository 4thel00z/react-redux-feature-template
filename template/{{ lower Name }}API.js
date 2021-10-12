// Author:	{{Author}}
// License:	{{License}}
// Date:	{{currentDate}}
// A mock function to mimic making an async request for data
export const fetch{{ title Name }} = (/* { data } */) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ /* data: data */ }), 500)
  );
}
