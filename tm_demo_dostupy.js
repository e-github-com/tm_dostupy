$.ajax({
    type: "GET",
    dataType: "json",
    url: '/projects/' + Plushki.current_project['identifier'] + '/showaccess',
    success: function (data){
        var output = '<h4>Ошибка при поиске доступов. Может быть их нет?</h4>';
        if (data && data.result) {
            output = Plushki.top_btns.oto_parse_access(data.result);

            //console.log(output);

            output += '<style>\
                         #dostupy {\
                            max-width: 300px;\
                            overflow:hidden;\
                         }\
                         #dostupy .accesstable {\
                            width: 100%;\
                            border-collapse: collapse;\
                         }\
                         #dostupy .accesstable thead th {\
                            border: 1px solid #ccc;\
                            background: #ccc;\
                         }\
                         #dostupy .accesstable td {\
                            border: 1px solid #ccc;\
                            font-size: 11px;\
                            word-wrap: break-word;\
                         }\
                         #dostupy #dostupy-link {\
                            display: block;\
                            margin: 5px 0;\
                         }\
                       </style>';

            output = '<div id="dostupy">\
                        <h3>Доступы</h3>\
                        ' + output + '\
                        <a id="dostupy-link" href="/projects/access/wiki/' + data.page_name + '">На страницу с доступами</a>\
                      <div>';

            $('#sidebar').prepend(output);
        }
    }
});

