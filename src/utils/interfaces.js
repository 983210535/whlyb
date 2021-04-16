var domain = "https://liuyan-api.cjn.cn/"
var domain1 = "http://pic.liuyan.cjn.cn/"


var domain = "http://www.cnhcit.com:84/"
var domain1 = "http://pic.liuyan.cjn.cn/"

// var domain="http://221.232.78.61:84"
// var domain1="http://221.232.78.61:84"


// var domain="https://192.168.7.61:84/"
// var domain1="https://192.168.7.61:84/"
// var domain = "http://192.168.7.61:84/"
// var domain1 = "http://192.168.7.61:84/"
// var domain = "http://172.16.11.183:84/"
// var domain1 = "http://172.16.11.183:84/"


const interfaces = {
    usericon: domain,
    defaltUsericon: domain1 + '/files/usericon/usericon.jpeg',
    getOpenid: domain + '/messageboard/miniprogramuserinterface/login', //获取openid的接口
    bindaccount: domain + '/messageboard/miniprogramuserinterface/bindaccount',
    fivefl: domain + '/messageboard/internetUserInterface/fivefl', //五大分类
    leavemessagePosition: domain + '/messageboard/internetUserInterface/selectForum', //留言位置
    leavemessageIndex: domain + '/messageboard/internetUserInterface/selectIndexForum', //新增index API
    newleavemessage: domain + '/messageboard/miniprogramuserinterface/selectThreadsMinProgram', //最新留言
    arealeavemessage: domain + '/messageboard/internetUserInterface/selectThreadsByGroup', //根据板块的fid查询留言情况
    myleavemessage: domain + '/messageboard/internetUserInterface/selectThreadsByUser', //我的留言
    leavemessageArea: domain + '/messageboard/internetUserInterface/selectThreadsDomain', //留言领域
    leavemessageType: domain + '/messageboard/internetUserInterface/selectThreadsType', //留言类型
    leavemessage: domain + '/messageboard/internetUserInterface/leavemessage', //留言
    mainIp: domain1 + '/files/attachment/', //文件路劲前缀
    search: domain + '/messageboard/api/essearch/querySearchMapByPage', //搜索
    contentDetail: domain + '/messageboard/internetUserInterface/selectThreadsOne', //查看全文
    contentDetails: domain + '/messageboard/internetUserInterface/selectThreadsOneByUser', //我的关注查看全文
    selectTrashThreadsOneByUser: domain + '/messageboard/internetUserInterface/selectTrashThreadsOneByUser', //系统回复查看全文
    unreadData: domain + '/inbox/message/getunreadmessagelist', //站内信-获取未读消息列表
    setread: domain + '/inbox/message/updatemessagesread', //将消息设置为已读
    newcontent: domain + '/inbox/message/show', //获取消息详情
    comment: domain + '/messageboard/internetUserInterface/feedbackThreads', //评论
    sendCode: domain + '/messageboard/netuserinterface/sendSms', //发送短信验证码
    register: domain + '/messageboard/miniprogramuserinterface/register', //注册
    jb: domain + '/messageboard/internetUserInterface/getMyThreadsTotalNumber', //我的留言角标
    ybj: domain + '/messageboard/internetUserInterface/selectThreadsTrashByUser', //已办结

    myMsg: domain + '/messageboard/newsText/list', //我的消息
    peopleDz: domain + '/messageboard/threads/dz/list', //群众点评
    focus: domain + '/messageboard/internetUserInterface/selectThreadsUserFavorite', //关注列表
    satisfaction: domain + '/messageboard/internetUserInterface/fivemyfl', //排行榜--满意度
    toFocus: domain + '/messageboard/internetUserInterface/focusOnThreads', //关注

    valuate: domain + '/messageboard/threadsComment/add', //评论
    getvalueate: domain + '/messageboard/threadsComment/listComments' //获取评论


}

module.exports = interfaces