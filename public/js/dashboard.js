const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
const themeToggler = document.querySelector(".theme-toggler")

// show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block'
})

// close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none'
})

// change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})

// CHART
const chart = document.querySelector("#chart").getContext('2d')

// create a new chart instance
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Apr', 'Jun', 'Sep', 'Nov'],
        datasets: [
            {
                label: 'Pendidikan',
                data: [6, 0, 7, 6, 0, 0],
                borderColor: '#7380ec',
                borderWidth: 2
            },
            {
                label: 'Penunjang',
                data: [2, 1, 0, 0, 1, 1],
                borderColor: '#41f1b6',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})