/**
 * Created by wqs on 2018/3/21.
 */
import wqs from './wqsmutations'
export default {
    setUser: (state, flag) => {
      state.user = flag
    },
    ...wqs
}
