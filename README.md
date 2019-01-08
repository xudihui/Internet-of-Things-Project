# Internet-of-Things-Project
智能车窗项目

## 主要链接
电脑显示端(响应实时开关窗)：http://47.101.66.6/index.html
手持设备端(感应天气数据，下发开关窗指令)：http://47.101.66.6/phone.html
手持设备debug模式(韩美龙调试专用):http://47.101.66.6/phone.html?debug=true

## 硬编码规范细则
#### 字段01:WaterSensorState：
0：天晴
1：下雨
2：下雪
3：台风

#### 字段02：PowerSwitch：
0:窗户关闭
1:窗户开启



## 其它页面特效：
下雨：(不响应实时开关窗)：http://47.101.66.6/index-rain.html
下雪：(不响应实时开关窗)：http://47.101.66.6/index-snow.html
