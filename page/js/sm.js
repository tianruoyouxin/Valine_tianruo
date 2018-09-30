$(document).ready(function() {
  $("#btn").click(function() {
    var options = {
      beforeSubmit: showRequest, //提交前的回调函数
      success: showResponse, //提交后的回调函数
	  clearForm: true,
      timeout: 5000 //限制请求的时间，当请求大于3秒后，跳出请求
    };
    function showRequest(formData, jqForm, options) {
    }
    function showResponse(data, status) {
      if (data.code == "success") {
        var url = data.data.url;
		///操作父框架元素
		$(".inputvalue" , parent.document).html("![" + fileName + "](" + url + ")");
		$(".inputvalue" , parent.document).click();
		fileName ='';
      } else {
        var msg = data.msg;
        if (msg != "No files were uploaded.") {
          alert(msg);
        }
      }
    }
    $("#upform").ajaxForm(options);
  });
});
var fileName =''
///获取名字
function getFileName(o) {
  var pos = o.lastIndexOf("\\");
  return o.substring(pos + 1);
}
//点击改变事件
$(document).ready(function() {
  $("#smfile").off("change");
  $("#smfile").on("change", function() {
 fileName = getFileName($("#smfile").val());
    $("#btn").click();
  });
});
