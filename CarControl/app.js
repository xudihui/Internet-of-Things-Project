var express = require('express')
var app = express()



//获取物的属性
const Client = require('aliyun-api-gateway').Client;
const UUID = require('uuid');

// 用appKey和appSecret初始化客户端
const client = new Client('25403420', '3f38a9cd06959686ca61282f10650d53');

const Gateway = async ({url, apiVer, params, iotToken}) => {

    return await client.post(url, {
        data: {
            id: UUID.v1(), // 请求唯一标识，必填
            version: '1.0', // 协议版本，固定值1.0
            request: {
                iotToken, // iottoken，选填
                apiVer // api版本，必填
            },
            params: params || {} // 业务参数，必填
        },
        headers: {
            accept: 'application/json'
        },
        timeout: 3000
    });

};


//查询物的属性
const getParams = (param = "WaterSensorState") => {
    const params = {
        url: 'https://api.link.aliyun.com/thing/device/property/query',
        apiVer: '1.1.2',
        params: {
            // 接口参数
            "productKey":"a1wpOfcrTmp",
            "deviceName":"qts3s3oTy9aZym1wmtoJ",
            "propertyIdentifier":param
        }
    }
    return params;
}

//设置物的属性
const setParams = (value) => {
    const params = {
        url: 'https://api.link.aliyun.com/thing/device/properties/set',
        apiVer: '1.1.2',
        params: {
            // 接口参数
         "productKey":"a1wpOfcrTmp",
        "deviceName":"qts3s3oTy9aZym1wmtoJ",
        "properties":{"PowerSwitch":parseInt(value || 0)}
        }
    }
    return params;
}






app.use(express.static('public'));

// 获取物属性
app.get('/tuy.get', function (req, resq) {
     console.log(req.query.name)//name是属性名称
    Gateway(getParams(req.query.name))
    .then(res => {
       // const arr = ['天晴','下雨','下雪','台风']
        resq.send(res)
    })
    .catch(res => console.log(res));   
})

//设置物属性
app.get('/tuy.set', function (req, resq) {
   Gateway(setParams(req.query.value))
   .then(res => {
       resq.send(res)
   })
   .catch(res => console.log(res));  
})


app.listen(10001);