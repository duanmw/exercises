import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css
import Vue from 'vue';
import Toast from 'muse-ui-toast';
import Loading from 'muse-ui-loading';
// Vue.use(Toast);
Vue.use(Toast, {
  position: 'top',               // 弹出的位置
  time: 3000,                       // 显示的时长
  closeIcon: 'close',               // 关闭的图标
  close: true,                      // 是否显示关闭按钮
  successIcon: 'check_circle',      // 成功信息图标
  infoIcon: 'info',                 // 信息信息图标
  warningIcon: 'priority_high',     // 提醒信息图标
  errorIcon: 'warning'              // 错误信息图标
})

Vue.use(Loading);

// new Vue({
//   methods: {
//     loading () {
//       const loading = this.$loading({
//         // ...options
//       });
//       setTimeout(() => {
//         loading.close();
//       }, 3000)
//     }
//   }
// });

// // or
// const loading = Loading({
//   // ...options
// });
// setTimeout(() => {
//   loading.close();
// }, 3000)