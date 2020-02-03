$( document ).ready(function() {
    $.ajax({
        url: 'jsons/portfolio.json',
        contentType: "application/json",
        dataType: 'json',
        success: function (data) {
            const main = $('<div/>',{class:'row portfolioBLock'});
            const mainill = $('<div/>',{class:'nav-illustration'});
            const maindgd = $('<div/>',{class:'nav-digital'});
            const mainweb = $('<div/>',{class:'nav-web'});
            for (let i = 0; i < data.portfolio.length; i++) {
                const portblocks = $('<div/>',{class:`col-xl-3 col-lg-3 col-md-3 col-sm-6 portblock bcolor${i + 1}`});
                const img = $('<img>', {src:data.portfolio[i].src,class:"img-fluid"});
                const overplay = $('<div/>',{class:'overlay'});
                const text = $('<div/>',{class:'text'});
                portblocks.append(img);
                portblocks.append(overplay);
                text.append(data.portfolio[i].name);
                text.appendTo(overplay);
                main.append(portblocks);
                $("#nav-all").append(main);

                if (data.portfolio[i].type === "illustration"){
                    const portblockill = $('<div/>',{class:`col-xl-3 col-lg-3 col-md-3 col-sm-6 portblock bcolor${i + 1}`});
                    const imgill = $('<img>', {src:data.portfolio[i].src,class:"img-fluid"});
                    portblockill.append(imgill);
                    mainill.append(portblockill);
                    $("#nav-illustration").append(mainill);
                }else
                    if(data.portfolio[i].type === "digital"){
                    const portblockdgt = $('<div/>',{class:`col-xl-3 col-lg-3 col-md-3 col-sm-6 portblock bcolor${i + 1}`});
                    const imgdgt = $('<img>', {src:data.portfolio[i].src,class:"img-fluid"});
                    portblockdgt.append(imgdgt);
                    maindgd.append(portblockdgt);
                    $("#nav-digital").append(maindgd);
                }else{
                    const portblockweb = $('<div/>',{class:`col-xl-3 col-lg-3 col-md-3 col-sm-6 portblock bcolor${i + 1}`});
                    const imgweb = $('<img>', {src:data.portfolio[i].src,class:"img-fluid"});
                    portblockweb.append(imgweb);
                    mainweb.append(portblockweb);
                    $("#nav-web").append(mainweb);
                }
            }
        }
    });

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






