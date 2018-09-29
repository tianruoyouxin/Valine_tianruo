$(document).ready(function() {
  $("#btn").click(function() {
    var options = {
      beforeSubmit: showRequest, //提交前的回调函数
      success: showResponse, //提交后的回调函数
      timeout: 5000 //限制请求的时间，当请求大于3秒后，跳出请求
    };
    function showRequest(formData, jqForm, options) {
      document.getElementById("mdurl").value = "正在获取图片代码...";
    }
    function showResponse(data, status) {
      if (data.code == "success") {
        var url = data.data.url;
        var fileName = getFileName($("#smfile").val());
        document.getElementById("mdurl").value =
          "![" + fileName + "](" + url + ")";
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
function getFileName(o) {
  var pos = o.lastIndexOf("\\");
  return o.substring(pos + 1);
}
//复制按钮
$(document).ready(function() {
  $("#copymd").click(function() {
    new clipBoard($("#mdurl"), {
      copy: function() {
        return $("#mdurl").val();
      }
    });
  });
});
$(document).ready(function() {
  $("#inputimage").click(function() {
    $("#smfile").click();
  });
});
$(document).ready(function() {
  $("#smfile").off("change");
  $("#smfile").on("change", function() {
    $("#btn").click();
  });
});
