//const url = "http://localhost:8033";
const url = "/underwater";
const serverPath = url;

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}


function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}


function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}


const ax = axios.create({
        baseURL: url,
        timeout: 10000,
        // headers: { Authorization: token,
        //     // userId: userinfo.userId,
        //     // roleId: userinfo.roleId
        // }
    }
);

function POST(url, data, config) {
        return ax.post(url, data, config||{}).then(function (response) {
            // const data = response.data;
            // if (data.status != 'ok' ) {
            //     alert("错误"+ data.message)
            //     return
            // }
            return response.data
        })
}


function PUT(url, data, config) {
    return ax.put(url, data, config||{}).then(function (response) {
        // const data = response.data;
        // if (data.status != 'ok' ) {
        //     alert("错误"+ data.message)
        //     return
        // }
        return response.data
    })
}

function GET(url, data, config) {
        return ax.get(url, data, config||{}).then(function (response) {
            // const data = response.data;
            // if (data.status != 'ok' ) {
            //     alert("错误"+ data.message)
            //     return
            // }
            return response.data
        })
}

function DownLoadURL(path) {
    return url + path
}

function formatDateTime(inputTime) {
    var date = new Date(inputTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
};


function format(now, format) {
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var monthStr = ""
    if (month > 9) {
        monthStr = "" + month
    } else {
        monthStr = "0" + month
    }
    //根据参数所传递的时间格式来进行具体的操作
    if (format == 'yyyy-mm') {
        return year + '-' + monthStr ;
    }
}

function nDayBefore(n) {
    var date = new Date(new Date() - n * 30 * 24 * 60 * 60 * 1000);
    return format(date, 'yyyy-mm')
}


function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}