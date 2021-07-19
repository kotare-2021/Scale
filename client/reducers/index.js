import {combineReducers} from 'redux'

import auth from './auth'
import fish from './fish'
import rules from './rules'
import stats from './stats'
import locations from './locations'
import diary from './diary'
import achievements from './achievements'
import methods from './methods'
import bird from './bird'
import usersAchievements from './usersAchievements'

export default combineReducers({
  auth,
  fish,
  rules,
  stats,
  locations,
  diary,
  achievements,
  methods,
  bird,
  usersAchievements
})
