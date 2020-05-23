const REQUEST_URL = 'https://isrc.iscas.ac.cn/summer2020/wxconfig';

var initWeixin = () => {
  if ((/micromessenger/.test(window.navigator.userAgent.toLowerCase())) ? true : false) {
    fetch(`${REQUEST_URL}?url=${window.location.href.split('#')[0]}`)
    .then(res => res.json())
    .then(
        (result) => {
            // console.log(window.location.href.split('#')[0])
            // alert(result.timestamp)
            // alert(result.nonceStr)
            // alert(result.signature)
            window.wx.config({
                debug: false, // 开启调试模式。
                appId: result.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
                timestamp: result.timestamp, // 必填，生成签名的时间戳（10位）
                nonceStr: result.nonceStr, // 必填，生成签名的随机串,注意大小写
                signature: result.signature,// 必填，签名，见附录1
                jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone']
            }); 
            readyWeixin();
        },
        (error) => {
          console.log(error);
        }
    );
  }
  return 0;
}
var readyWeixin = (title, description, imgUrl) => {
  if ((/micromessenger/.test(window.navigator.userAgent.toLowerCase())) ? true : false) {
    window.wx.ready(() => {
      //分享给朋友
      window.wx.updateAppMessageShareData({
          title: title || document.title, // 分享标题
          desc: description || '关注开源软件和开源社区，培养和发掘更多优秀的开发者。', // 分享描述
          link: window.location.href, // 分享链接
          imgUrl: imgUrl || require("../img/share.jpg"), // 分享图标
          success: function () {
            // 设置成功
          }
      });
    
      //分享到朋友圈
      window.wx.updateTimelineShareData({
          title: title || document.title, // 分享标题
          link: description || window.location.href, // 分享链接
          imgUrl: imgUrl || require("../img/share.jpg"), // 分享图标
          success: function () {
              // 设置成功
          }
      });
    });
  }
  return 0;
}
export {
  initWeixin,
  readyWeixin
}