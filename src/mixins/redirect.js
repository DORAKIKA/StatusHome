import { onBeforeMount } from "vue";
// 路由重定向
// 将其他url访问转移至博客或其他网站
export function useRedirect(url) {
  onBeforeMount(() => {
    // 重定向
    if (window.location.pathname !== "/") {
      if (url) {
        ElNotification({
          title: "点击前往",
          message: `检测到携带额外路径，是否前往${url}?`,
          "on-click": () => {
            window.location.href = url + window.location.pathname;
          },
          position: "bottom-right",
          duration: 0,
          "custom-class": "pointer",
        });
      }
    }
  });
}
