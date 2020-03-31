function News() {

}

News.prototype.listenUploadFileEvent = function () {
    var uploadBtn = $('#thumbnail-btn');
    uploadBtn.change(function () {
        var file = uploadBtn[0].files[0];
        var formdata = new FormData();
        formdata.append('file', file);
        xfzajax.post({
            'url': '/cms/upload_file/',
            'data': formdata,
            'processData': false,
            'contentType': false,
            'success':function () {
                
            }
        })
    });
};

News.prototype.run = function () {

};

$(function () {
    var news = new News();
    news.run()
});