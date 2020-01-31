$( document ).ready(function() {
    $.ajax({
        url: 'jsons/portfolio.json',
        contentType: "application/json",
        dataType: 'json',
        success: function (data) {
            const main1 = $('<div/>',{class:'portfolioBLock1'});
            for (let i = 0; i < data.portfolioBLock1.length; i++) {
                const portblocks = $('<div/>',{class:`portblock bcolor${i + 1}`});
                const img = $('<img>', {src:data.portfolioBLock1[i].src,class:"img-fluid"});
                const overplay = $('<div/>',{class:'overlay'});
                const text = $('<div/>',{class:'text'});
                portblocks.append(img);
                portblocks.append(overplay);
                text.append(data.portfolioBLock1[i].name);
                text.appendTo(overplay);
                main1.append(portblocks);
                $("#nav-all").append(main1);
            }
        }
    });
});
$( document ).ready(function() {
    $.ajax({
        url: 'jsons/row2.json',
        contentType: "application/json",
        dataType: 'json',
        success: function (data) {
            const main2 = $('<div/>',{class:'portfolioBLock2'});
            for (let i = 0; i < data.portfolioBLock2.length; i++) {
                const portblocks = $('<div/>',{class:`portblock bcolor${i + 5}`});
                const img = $('<img>', {src:data.portfolioBLock2[i].src,class:"img-fluid"});
                const overplay = $('<div/>',{class:'overlay'});
                const text = $('<div/>',{class:'text'});
                portblocks.append(img);
                portblocks.append(overplay);
                text.append(data.portfolioBLock2[i].name);
                text.appendTo(overplay);
                main2.append(portblocks);
                $("#nav-all").append(main2);
            }
        }
    });
});

$( document ).ready(function() {
    $.ajax({
        url: 'jsons/headers.json',
        contentType: "application/json",
        dataType: 'json',
        success: function (data) {
            for (let i = 0; i < data.headers.length; i++) {
                const headersDiv = $('<div/>',{class:`d-flex justify-content-center`});
                headersDiv.html(`<h3>${data.headers[i].black}<span class="red_text"> ${data.headers[i].red}</span></h3>`);
                const textDiv = $('<div/>',{class:`font_style`});
                textDiv.html(`<p>
                                    Lorem ipsum dolor sit amet, consectetur <span class="red_text">${data.headers[i].red_text}</span> Integer
                                    sed magna vel velit
                                    dignissim luctus eu in urna. Dapibus egestas turpis.
                                </p>`);
                headersDiv.appendTo(document.getElementById(`head${i + 1}`));
                textDiv.appendTo(document.getElementById(`head${i + 1}`));
            };
        }
    });
});







