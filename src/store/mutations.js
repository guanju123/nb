import { VIEW_NAV,VIEW_FOOT,VIEW_LOADING} from './types'

let mutations={ 

  [VIEW_NAV]:(state,payload)=> state.bNav=payload,
  [VIEW_FOOT]:(state,payload)=> state.bFoot=payload,
  [VIEW_LOADING]:(state,payload)=> state.bLoading=payload,

};
export default mutations;
