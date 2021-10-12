// Author:	{{Author}}
// License:	{{License}}
// Date:	{{currentDate}}
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  // Add more (action) imports here from the slice
  select{{ title Name }},
} from './{{ lower Name }}Slice';
import styles from './{{ title Name }}.module.css';

export const {{ title Name}} = () => {
  
  // Some state which was extracted from the root state
  const {{ lower Name }} = useSelector(select{{ title Name }});
  
  // To interact with the root state selection use the dispatcher and 
  // the slice actions
  const dispatch = useDispatch();

  // This is component only state
  const [state, setState] = useState({});
  return ();
}
