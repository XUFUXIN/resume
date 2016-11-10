var Swiper = require("./components/swiper/swiper-3.3.1.min");
var swiperAnimate=require("./components/swiper/swiper.animate1.0.2.min");
var wx = require('weixin-js-sdk');
var swiper=new Swiper(".swiper-container",{

  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
 
});
console.log(Swiper);

var $ = require('zepto-modules/zepto');
require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/touch');
module.exports = $;
 //aa
$("#iScroll").hide();
$('#oenter').tap(function(){
	$('#iScroll').show();
	$('.swiper-container').hide();
	$.post('mock/skill.json', {}, function(response){
     var data=response;
     console.log(data);
     $("#scroller ul").append($("<li class='theli'><div>类型</div><div>熟悉程度</div><div>名称</div><div>时间</div></li>"));
     for(var i in data){
     $("#scroller ul").append($("<li class='theli'><div>"+data[i].category+"</div><div>"+data[i].level+"</div><div>"+data[i].name+"</div><div>"+data[i].time+"</div></li>"));
     }

})
});
$('#skill').tap(function(){
    $("#scroller ul li").remove();
    $.post('mock/skill.json', {}, function(response){
     var data=response;
     console.log(data);
     $("#scroller ul").append($("<li class='theli'><div>类型</div><div>熟悉程度</div><div>名称</div><div>时间</div></li>"));
     for(var i in data){
     $("#scroller ul").append($("<li class='theli'><div>"+data[i].category+"</div><div>"+data[i].level+"</div><div>"+data[i].name+"</div><div>"+data[i].detail+"</div></li>"));
     }

})
});
$('#project').tap(function(){
	$("#scroller ul li").remove();
	$.post('mock/project.json', {}, function(response){
     var data=response;
     console.log(data);
     $("#scroller ul").append($("<li class='theli'><div>类型</div><div>熟悉程度</div><div>名称</div><div>时间</div></li>"));
     for(var i in data){
     $("#scroller ul").append($("<li class='theli'><div>"+data[i].category+"</div><div>"+data[i].description+"</div><div>"+data[i].name+"</div><div>"+data[i].detail+"</div></li>"));
     }

})
});
$('#work').tap(function(){
	$("#scroller ul li").remove();
	$.post('mock/work.json', {}, function(response){
     var data=response;
     console.log(data);
     $("#scroller ul").append($("<li class='theli'><div>类型</div><div>熟悉程度</div><div>名称</div><div>时间</div></li>"));
     for(var i in data){
     $("#scroller ul").append($("<li class='theli'><div>"+data[i].category+"</div><div>"+data[i].description+"</div><div>"+data[i].name+"</div><div>"+data[i].detail+"</div></li>"));
     }

})
});


$.post("http://1252621032.applinzi.com/php/getsign.php",{
        url:window.location.href
    },function(data){
        pos=data.indexOf('}');
        dataStr=data.substring(0,pos+1);
        objData=JSON.parse(dataStr);
        console.log(dataStr);
        wx.config({
    debug: true,
    appId: objData.appId,
    timestamp: objData.timestamp,
    nonceStr: objData.nonceStr,
    signature: objData.signature,

    jsApiList: [
      // 所有要调用的 API 都要加到这个列表中
      'getLocation','chooseImage'
    ]
  });
    
  
   
    $('#getlocation').tap(function(){
         wx.ready(function () {
            wx.getLocation({
            type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
           success: function (res) {
        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        var speed = res.speed; // 速度，以米/每秒计
        var accuracy = res.accuracy; // 位置精度
       
    }
});

      
  });

    });
    $('#getphoto').tap(function(){
         wx.ready(function () {
            wx.chooseImage({
    count: 1, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
    }
});

      
  });
    });
       
    
    });


