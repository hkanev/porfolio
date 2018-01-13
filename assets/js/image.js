(() => {
    let images = ['cert3', 'cert4', 'cert1', 'cert2', 'cert5', 'cert6'];
    let mainImage = $('#certificateImage' );

    $('#nextBtn').click((e) => {
        e.preventDefault();
        mainImage.fadeOut(100,function()
        {
            let next_val = document.getElementById( "img_no" ).value;
            next_val = Number(next_val)+1;
            if(next_val >= images.length)
            {
                next_val = 0;
            }
            mainImage.attr( 'src' , 'assets/images/'+images[next_val]+'.png' );
            $('#certificateLink').attr('href', 'assets/images/'+images[next_val]+'.png');
            document.getElementById( "img_no" ).value = next_val;
        });
        mainImage.fadeIn(1000);
    });

    $('#previousBtn').click((e) => {
        e.preventDefault();
        mainImage.fadeOut(100,function()
        {
            let prev_val = document.getElementById( "img_no" ).value;
            prev_val = Number(prev_val)-1;
            if(prev_val <= -1)
            {
                prev_val = images.length - 1;
            }
            mainImage.attr( 'src' , 'assets/images/'+images[prev_val]+'.png' );
           $('#certificateLink').attr('href', 'assets/images/'+images[prev_val]+'.png');
            document.getElementById( "img_no" ).value = prev_val;
        });
        mainImage.fadeIn(1000);
    });
})();

