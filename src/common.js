
export function formatDate(value) {
    if(value !== null) {
        var time = new Date(value);
        var year = time.getFullYear();
        var month = ('00' + (time.getMonth() + 1)).slice(-2);
        var date = ('00' + time.getDate()).slice(-2);
        var hour = ('00' + time.getHours()).slice(-2);
        var minite = ('00' + time.getMinutes()).slice(-2);
        var second = ('00' + time.getSeconds()).slice(-2);
        return year + '/' + month + '/' + date + ' ' + hour + ':' + minite + ':' + second;
    } else {
        return '';
    }
}


