var tabContents = document.querySelectorAll('.tab_info');

document.addEventListener('click', function (e) {
    if (e.target.className == "side_title") {
        var getData = e.target.dataset.id
        console.log(getData)
        var titles = document.querySelectorAll('.side_title');
        titles.forEach(title => {
            title.classList.remove('active')
        });

        tabContents.forEach(tabContent => {
            tabContent.style.display = 'none';
        });
        e.target.classList.add('active')
        document.querySelectorAll('.' + getData)[0].style.display = "block";
    }
})

document.querySelectorAll('.sidebar .side_title')[0].click()
