import immutablePersistenceTransform from '../Store/ImmutablePersistenceTransform'
import { persistentStoreBlacklist } from '../Reducers/'

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '2',
  storeConfig: {
    whitelist: [ 'login'],
    blacklist: ['app','nav'],
    transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST
