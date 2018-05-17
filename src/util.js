/**
 * Created by wqs on 2018/4/4.
 */
import axios from 'axios'
// import io from 'socket.io-client'
import VueDraggableResizable from 'vue-draggable-resizable'

const queryData = {
  uniqueId: '',            // 用户唯一标识
  userSource : 'web',      // 访客为 weixin ,坐席为 web
  userName : '18611771122' // 用户名
}

export default{
  install(Vue,options)
  {
    // Vue.use(ElementUI);
    var that = this;
    Vue.component('vue-draggable-resizable', VueDraggableResizable)
    // Vue.component('Calendar', Vue.extend(CalendarComponent));
    Vue.prototype.reqUrl = 'http://171.36.1.7:8080/officeToPDF';
    Vue.prototype.goUrl = function (url) {
      this.$router.push(url);
    };
    Vue.prototype.goBack = function (url) {
      this.$router.back();
    };
    Vue.prototype.$axios = function (obj) {
      var that =this;
      return new Promise((resolve,reject) => {
        obj.data = obj.data || {};
        obj.url = obj.url || '';
        obj.method = obj.method || 'POST';
        obj.complete = function(res){
          console.log(res);
        };
        axios({
          data:obj.data,
          url:obj.url,
          method: obj.method || 'POST',
        }).then(res =>{
          resolve(res.data);
        }).catch((err,res) => {
          that.$message('请求失败');
          reject(err)
        });
      })
    };
    Vue.prototype.$get = function fetch(url,params={}){
      var that =this;
      return new Promise((resolve,reject) => {
        axios.get(url,{
          params,
        }).then(response => {
          console.log(response)
          if(response.status == 200){
            resolve(response.data);
          }else{
            that.$message('请求失败,状态值'+response.status);
          }
        }).catch((err,res) => {
          that.$message('请求失败');
          reject(err)
        })
      })
    };
    Vue.prototype.$post = function post(url,data = {}){
      var that =this;
      return new Promise((resolve,reject) => {
        axios.post(url,data)
          .then(response => {
            resolve(response.data);
          }, err => {
            that.$message('请求失败')
            reject(err)
          }).catch((err,res) => {
          that.$message('请求失败');
          reject(err)
        })
      })
    };
    // Vue.prototype.socket = io('http://120.26.209.139:9089/?queryData=' + JSON.stringify(queryData), {
    //   'force new connection': true,
    //   reconnection: true,
    //   reconnectionDelay: 3000, //多长时间后建立一个新的连接
    //   reconnectionAttempts: 2
    // });
  }
}
