var searchButton = document.getElementById('button1');
searchButton.onclick = function() {
    
    const pageVisited = localStorage.getItem("AdvertismentPage.html")

    if(!pageVisited){
        localStorage.setItem('AdvertismentPage.html',true);
        window.location.href = 'AdvertismentPage.html';
    }
    else{
        localStorage.clear()
        window.location.href = 'RealPage.html';
        
    }
    
}




