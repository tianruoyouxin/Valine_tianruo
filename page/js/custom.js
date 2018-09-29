///加载valine
var valine = new Valine();
var path = window.location.pathname.replace('index.html','');
var isEN = path.indexOf('en') > -1;
path = isEN ? path.replace('en/','') : path;
valine.init({
el: '.vcomment',
appId: '请填写您的appId',
appKey: '请填写您的appKey',
notify: false,
placeholder: '温馨提示：添加邮箱可以更及时的得到回复！',
avatar:'mm',
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
$(".vnick").css({"fontSize":size,"fontFamily":fontfamily});

///汉化按钮
$(".vemoji-btn").html('表情');
$(".vpreview-btn").html('预览');

///删除右下角版权信息，请尽可能保留该信息，以保证对于作者的支持
$(".info").html('');

///插入图片功能
var vimagehtml="<span class=vimage-btn style='font-size: 14px;font-family: 微软雅黑;'>图片";
var divline=" | ";
$('.vemoji-btn').before(vimagehtml) 
$('.vemoji-btn').before(divline) 
$('.vemojis').after("<div class='setimage' border='1px solid #f0f0f0' style=' border:1px solid #f0f0f0' ><iframe frameborder='0' src='./page/smms.html' width='100%'  scrolling='no' height='32px'</iframe></div> ") 
$(".setimage")[0].style.display='none';

///设置图片区域显示时机
$(document).ready(function() {
  $(function() {
    ///设置图片按钮
    $(".vimage-btn").on("click", function() {
          ///不显示表情
      if($(".vemojis").attr("style")=="display:block")
      {
        $(".vemojis").hide();
        $(".vemoji-btn").click();      
      }
         ///不显示预览
      if($(".vpreview").attr("style")=="display:block")
      {
        $(".vpreview").hide();
        $(".vpreview-btn").click();      
      }
       ///设置表情按钮
      if ($(".setimage")[0].style.display == "none") {
        $(".setimage")[0].style.display = "block";
      } else {
        $(".setimage")[0].style.display = "none";
      }
    });
      ///设置表情按钮
     $(".vemoji-btn").on("click", function() {
          ///不显示图片
     $(".setimage")[0].style.display='none';    
    });
    ///设置预览按钮
     $(".vpreview-btn").on("click", function() {
          ///不显示图片
       if($("#veditor").val()!="")
     { $(".setimage")[0].style.display='none';}    
    });
  });

});