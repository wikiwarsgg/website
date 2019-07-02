<template> </template>

<script>
export default {
  props: {
    locale: {
      default: "en_US",
      type: String
    },
    appId: String
  },
  mounted() {
    const fjs = document.getElementsByTagName("script")[0];
    if (document.getElementById("facebook-jssdk")) return;
    const js = document.createElement("script");
    js.id = "facebook-jssdk";
    js.src = `https://connect.facebook.net/${
      this.locale
    }/sdk.js#xfbml=1&version=v3.0&appId=${this.appId}&autoLogAppEvents=1`;
    fjs.parentNode.insertBefore(js, fjs);
  }
};
</script>
