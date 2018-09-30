///加载valine
var valine = new Valine();
var path = window.location.pathname.replace('index.html','');
var isEN = path.indexOf('en') > -1;
path = isEN ? path.replace('en/','') : path;
valine.init({
el: '.vcomment',
appId: 'J6ENodl47uj9S8OprHIQLTlj-gzGzoHsz',
appKey: 'XmTprVsONLA9BAmseYaNnK6G',
notify: false,
placeholder: '温馨提示：添加邮箱可以更及时的得到回复！',
avatar:'mp',
guest_info:['nick', 'mail'],
path:path,
lang: isEN ? 'en' : 'zh-cn',
visitor:true
})
///修改字体
var size=14+'px';
var fontfamily='微软雅黑';
///需要修改的元素
$(".vnick").css({"fontSize":size,"fontFamily":fontfamily});
$(".vmail").css({"fontSize":size,"fontFamily":fontfamily});
$(".veditor").css({"fontSize":size,"fontFamily":fontfamily});
$(".vpreview").css({"fontSize":size,"fontFamily":fontfamily});
$(".vemoji-btn").css({"fontSize":size,"fontFamily":fontfamily});
$(".vpreview-btn").css({"fontSize":size,"fontFamily":fontfamily});
$(".vimage-btn").css({"fontSize":size,"fontFamily":fontfamily});
///删除右下角版权信息，请尽可能保留该信息，以保证对于作者的支持
$(".info").html('');
///设置图片区域显示时机
$(document).ready(function() {
  $(function() {
    ///设置图片按钮
    $(".vimage-btn").on("click", function() {
		$(window.frames['ajaxframes'].document).find("#smfile")[0].click();
    });
  });

});