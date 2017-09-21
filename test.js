/*1、鼠标放在数字上，背景改变，图片切换；
2、鼠标放在容器上，停止播放图片；
3、图片从容器上移开后，继续播放图片；
4、每2秒自动切换图片；*/

// 1、autoPlay函数中，if条件语句中，为什么不能用if(index+1>=pic.length)或if(index>=pic.length-1)?
window.onload = function(){
    var box = document.getElementById("content_center"),
         pic = document.getElementById("pic").getElementsByTagName("li"),
         num = document.getElementById("num").getElementsByTagName("li"),
        index = 0,
        timer = null;
      var  arrow = box.getElementsByTagName("div");

    //定义并调用自动播放函数
    timer = setInterval(autoPlay , 2000);


//鼠标滑过整个容器时停止自动播放
    box.onmouseover = function(){
        clearInterval(timer);
        arrow.style.display = "block";
    }

//鼠标离开整个容器时继续播放至下一张
    box.onmouseout = function(){
       timer = setInterval(autoPlay,1000);
    }

//遍所有数字导航实现划过切换至对应的图片
    for (var i = 0; i < num.length; i++) {
        num[i].onmouseover = function () {
            clearInterval(timer);
            index = this.innerText - 1;
            changePic(index);
        }
    }

    function autoPlay(){
        if(++index>=pic.length){
            index = 0;
        }
        changePic(index);
    }

//定义图片切换函数
    function changePic(curIndex){
        for(var i=0;i<pic.length;++i){
            pic[i].style.display = "none";
            num[i].className = "";
        }
        pic[curIndex].style.display = "block";
        num[curIndex].className = "on";
    }

//选项卡切换
    var oTab=document.getElementsByClassName('right_3')[0];
    var aLi=oTab.getElementsByTagName('li');
    var oTabBox=oTab.getElementsByTagName('div')[1];
    var aBox=oTabBox.getElementsByTagName('div');
    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].onmouseover=function(){
            for(var j=0;j<aBox.length;j++){
                aLi[j].className='';//取消菜单样式
                aBox[j].className='hide';//隐藏所有的tabDiv
            }
            aLi[this.index].className='selected';
            aBox[this.index].className='';
        }
    }


//鼠标经过“配送城市”的事件
    var city = document.getElementById("city");
    var city_now = city.getElementsByTagName("span");
    var city_list = document.getElementById("city_list");

function show(n){

    city_list.style.display = "block";
}
    function hide(n){
        city_list.style.display = "none";
    }

}



