/**
 * Copyright (c) 2020 Intelligent Software Research Center of ISCAS
 * Summer 2020 Homepage is licensed under Mulan PSL v2.
 * You can use this software according to the terms and conditions of the Mulan PSL v2.
 * You may obtain a copy of Mulan PSL v2 at:
 *          http://license.coscl.org.cn/MulanPSL2
 * THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
 * MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
 * See the Mulan PSL v2 for more details.
 */

const REQUEST_URL = 'https://isrc.iscas.ac.cn/summer2020/wxconfig';

var initWeixin = () => {
  if ((/mobile/.test(window.navigator.userAgent.toLowerCase())) ? true : false) {
    const url_ = encodeURIComponent(`${window.location.href.split("#")[0]}`);
    fetch(`${REQUEST_URL}?url=${url_}`)
    .then(res => res.json())
    .then(
        (result) => {
            window.wx.config({
                debug: false, // 开启调试模式。
                appId: result.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
                timestamp: result.timestamp, // 必填，生成签名的时间戳（10位）
                nonceStr: result.nonceStr, // 必填，生成签名的随机串,注意大小写
                signature: result.signature,// 必填，签名，见附录1
                jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone']
            });
        },
        (error) => {
          console.log(error);
        }
    );
  }
  return 0;
}
var readyWeixin = (title, description, imgUrl) => {
  if ((/mobile/.test(window.navigator.userAgent.toLowerCase())) ? true : false) {
    window.wx.ready(() => {
      //分享给朋友
      
      window.wx.updateAppMessageShareData({
          title: title || document.title, // 分享标题
          desc: description || document.getElementsByTagName("meta")[2].content, // 分享描述
          link: `${window.location.origin}${window.location.pathname}${window.location.hash}`, // 分享链接
          imgUrl: imgUrl || `http://wx2.sinaimg.cn/large/007f5mwTly1gf4t59re1kj302o02o3yh.jpg`, // 分享图标base64不可以
          success: function (res) {
            // 设置成功
            console.log(res)
            
          }
      });
    
      //分享到朋友圈
      window.wx.updateTimelineShareData({
          title: title || document.title, // 分享标题
          link: `${window.location.origin}${window.location.pathname}${window.location.hash}`, // 分享链接
          imgUrl: imgUrl || `http://wx2.sinaimg.cn/large/007f5mwTly1gf4t59re1kj302o02o3yh.jpg`, // 分享图标
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