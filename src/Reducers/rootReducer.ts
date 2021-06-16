
import { combineReducers } from 'redux';
import { emailReducer } from './EmailReducer';
import { idReducer } from './IdReducer';
import { nomReducer } from './NomReducer';
import { roleReducer } from './RoleReducer';
import { tokenReducer } from './TokenReducer';
import { prenomReducer } from './PrenomReducer';


export const rootReducer=combineReducers({
    emailReducer,
    idReducer,
    nomReducer,
    roleReducer,
    tokenReducer,
    prenomReducer
}
)

export type RootState = ReturnType<typeof rootReducer>