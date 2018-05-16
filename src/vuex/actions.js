/**
 * Created by wqs on 2018/3/21.
 */
export default {
  addAction(context){
    context.commit('add',10);
    setTimeout(()=>{context.commit('sub')},3000);
    console.log('我比sub提前执行');
  },
  subAction({commit}){
    commit('sub')
  },
  editUserName:function (user) {
    
  },
}
