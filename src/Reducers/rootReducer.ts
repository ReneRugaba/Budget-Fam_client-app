
import { combineReducers } from 'redux';
import { emailReducer } from './EmailReducer';
import { idReducer } from './IdReducer';
import { nomReducer } from './NomReducer';
import { roleReducer } from './RoleReducer';
import { tokenReducer } from './TokenReducer';


export const rootReducer=combineReducers({
    emailReducer,
    idReducer,
    nomReducer,
    roleReducer,
    tokenReducer
}
)

export type RootState = ReturnType<typeof rootReducer>