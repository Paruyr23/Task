$( document ).ready(function() {
    $.ajax({
        url: 'jsons/portfolio.json',
        contentType: "application/json",
        dataType: 'json',
        success: function (data) {
            const main1 = $('<div/>',{class:'portfolioBLock1'});
            for (let i = 0; i < data.portfolio[0].length; i++) {
                const portblocks = $('<div/>',{class:`portblock bcolor${i + 1}`});
                const img = $('<img>', {src:data.portfolio[0].portfolioBLock[i].src,class:"img-fluid"});
                console.log(data.portfolio)
            }
        }
    });
});



// <div class="portblock bcolor1 ">
//     <img src="images/Layer_7.png" alt="1" class="img-fluid">
//     <div class="overlay">
//         <div class="text">+ web design</div>
//     </div>
// </div>
