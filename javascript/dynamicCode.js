$( document ).ready(function() {
    $.ajax({
        url: 'jsons/row1.json',
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
            const main1 = $('<div/>',{class:'portfolioBLock2'});
            for (let i = 0; i < data.portfolioBLock2.length; i++) {
                const portblocks = $('<div/>',{class:`portblock bcolor${i + 5}`});
                const img = $('<img>', {src:data.portfolioBLock2[i].src,class:"img-fluid"});
                const overplay = $('<div/>',{class:'overlay'});
                const text = $('<div/>',{class:'text'});
                portblocks.append(img);
                portblocks.append(overplay);
                text.append(data.portfolioBLock2[i].name);
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
            for (let i = 0; i < data.portfolioBLock2.length; i++) {
                const portblocks = $('<div/>',{class:`portblock bcolor${i + 6}`});
                const img = $('<img>', {src:data.portfolioBLock2[i + 1].src,class:"img-fluid"});
                portblocks.append(img);
                $("#illustration").append(portblocks);
            }
        }
    });
});

const web_design = [
    {
        "src": "images/Layer_7.png",
        "name": "+ web design"
    },
    {
        "src": "images/Layer_18.png",
        "name": "+ web design"
    }
];

$( document ).ready(function() {
    for (let i = 0; i < web_design.length; i++) {
        const portblocks = $('<div/>',{class:`portblock bcolor${i + 1}`});
        const img = $('<img>', {src:web_design[i].src,class:"img-fluid"});
        portblocks.append(img);
        $("#web").append(portblocks);
    }
});



const digital_art = [
    {
        "src": "images/Layer_9%20(1).png",
        "name": "+ digital art"
    },
    {
        "src": "images/Layer_11.png",
        "name": "+ digital art"
    },
    {
        "src": "images/Layer_13.png",
        "name": "+ digital art"
    }
];

$( document ).ready(function() {
    for (let i = 0; i < digital_art.length; i++) {
        const portblocks = $('<div/>',{class:`portblock bcolor${i + 3}`});
        const img = $('<img>', {src:digital_art[i].src,class:"img-fluid"});
        portblocks.append(img);
        $("#digital").append(portblocks);
    }
});


$( document ).ready(function() {
    $.ajax({
        url: 'jsons/headers.json',
        contentType: "application/json",
        dataType: 'json',
        success: function (data) {
            for (let i = 0; i < data.headers.length; i++) {
                const headersDiv = $('<div/>',{class:`d-flex justify-content-center`});
                headersDiv.html(`<h3>${data.headers[i].head[0].black}<span class="red_text"> ${data.headers[i].head[0].red}</span></h3>`);
                const textDiv = $('<div/>',{class:`font_style`});
                    textDiv.html(`                    
                    <p>
                        Lorem ipsum dolor sit amet, consectetur <span class="red_text">${data.headers[i].head[0].red_text}</span> Integer
                        sed magna vel velit
                        dignissim luctus eu in urna. Dapibus egestas turpis.
                    </p>`);

                var result = document.getElementById(`head${i + 1}`);
                result.append(headersDiv);
                result.append(textDiv);
            };
        }
    });
});







