import {charactersSlice} from './index';
import * as selectors from './selectors';
import * as actions from './actions';


export const charactersActions = {
    ...actions,
    ...charactersSlice.actions
}

export const charactersSelectors = {
    ...selectors
}
