const textAnim = document.querySelector('h1');

new Typewriter(textAnim, {
    loop: true,
    deleteSpeed: 20
})

.changeDelay(100)
.typeString("Hello ! Moi c'est Thomas")
.pauseFor(300)
.typeString("<strong>, Dev Frond-End</strong> !")
.pauseFor(1000)
.deleteChars(12)
.typeString('<span style="color:#ff6910"> HTML</span> !')
.pauseFor(1000)
.deleteChars(6)
.typeString('<span style="color:#254bdd"> CSS</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color:midnightblue"> React</span> !')
.pauseFor(1000)
.deleteChars(7)
.typeString('<span style="color:#d6be08"> JavaScript</span> !')
.start()