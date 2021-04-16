const https ={
    request(options={}){
        const {url,data,header,method,params} = options;
        // 加载动画
        wx.showLoading({
            title:"加载中..."
        })
        var headerdata
        if(header){
            headerdata={
                'content-type': 'application/x-www-form-urlencoded',
                JwtAuthorization:wx.getStorageSync("token")
            }
        }else{
            headerdata=''
        }
        return new Promise((resolve,reject)=>{
            wx.request({
                url,
                data,
                header:headerdata,
                method,
                params,
                success:function(res){
                    wx.hideLoading();

                    // 判断网络
                    if(res.statusCode == 404){
                        reject()
                        return false;
                    }else if(res.statusCode != 200){
                        wx.showToast({
                            title:'网络出错，稍后再试！',
                            icon:'none'
                        })
                        
                        wx.redirectTo({
                            url:"/pages/register/main"
                        })

                        // wx.clearStorage()
                        // return false;
                    }
                    // 成功返回数据
                    resolve(res.data)
                },
                fail:function(err){
                    wx.hideLoading();
                    reject(err)
                },
                complete:function(){
                    wx.hideLoading();
                }
            })
        })
    }
}
export default https;