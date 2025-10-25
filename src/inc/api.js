import axios from 'axios';

const prefix = '/web/api/';

export default {
    async call(url, method="GET", body={}) {
        if (window.startLoading) window.startLoading();

        var rs = await axios({
            method,
            url: prefix + url + '/',
            data: body,
            withCredentials: true
        }).catch(e=> e.response? e.response: e);

        if (window.stopLoading) window.stopLoading();
        return rs;
    }
};



// WEBPACK FOOTER //
// ./src/inc/api.js