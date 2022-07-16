import {errorSlice} from './index';
import * as selectors from './selectors';



export const errorActions = {
    ...errorSlice.actions
}

export const errorSelectors = {
    ...selectors
}
