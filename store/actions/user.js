import localStore from 'utils/localStore'
import { INIT_USER } from 'store/actionTypes'

export const initUser = () => {
    return {
        type: INIT_USER,
        value: localStore.getItem('user') || {}
    }
}
