var ajax = function(options) {
    var opt = {
        url: options.url ? options.url : '',
        type: options.type ? options.type : 'get',
        data: options.data ? options.data : {},
        aynsc: options.aynsc ? options.aynsc : false,
        success: options.success ? options.success : function() {},
        error: options.error ? options.error : function() {}
    }
    if (opt.url) {
        var xhr = XMLHttpRequest ? new XMLHttpRequest : new window.ActiveXObject('Microsoft.XMLHTTP');
        var data = opt.data,
            url = opt.url,
            type = opt.type.toUpperCase(),
            dataArr = [];
        for (var k in data) {
            dataArr.push(k + "=" + data[k]);
        }
        if (type == 'GET') {
            url = url + '?' + dataArr.join('&');
            xhr.open(type, url.replace(/\?$/g, ''), opt.aynsc);
            xhr.send();
        }
        if (type == 'POST') {
            xhr.open(type, url, opt.aynsc);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send(dataArr.join('&'));
        }
        xhr.onload = function() {
            if (xhr.status == 200 || xhr.status == 304) {
                var res = xhr.responseText;
                if (typeof res === 'string') {
                    res = JSON.parse(res);
                    opt.success.call(xhr, res);
                }
            }
        }
    } else {
        console.log("请传入请求url!")
    }

}