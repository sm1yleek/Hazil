let i = prompt('Kimligingiz qiziqmi ? Unda Ismingizni Kiriting !')
alert('Salom ' + i)

let s = +prompt(i + ' - Yoshingizni Kiriting')
alert('Tayyor bolsangiz  Sorovnomani boshlaymiz !')

let u = prompt('Hissiyotlaringizni boshqarish onsonmi ? \n\n Ha / Yoq')

if (u === 'Ha') {

    let num = prompt('Ozingizni yolgiz his qilasizmi ? \n\nHa / Yoq')

    let kam = prompt('Boshqalar sizni kamsitadilarmi ? \n\nHa / Yoq')

    alert(i + ' Javoblarga kora siz KOT bolekansz. Sal dalbayobro bolekansiz ! Ortolariz sizzi Yibanutiro bola deb hisoblashadi ! Agar sizziyam shunaqa ortolariz bosa bu Sorovnomani unga Jonatib Qoyin U ham HUrsan bolsin')

}else if (u === 'Yoq'){
 
    let tim = prompt('Ozingizni yolgiz his qilasizmi ? \n\nHa / Yoq')

    let mit = prompt('Boshqalar sizni kamsitadilarmi ? \n\nHa / Yoq')

    alert(i + ' Javoblarga kora siz Yaxshi bolaga oxshavos . Baribir sal Kotro bolekansiz ! Hamma sizzi zor deb hisoblashini istaysizu lekin qolizdan kelmaydi ! Siz kop multfilm korvorganakansz ! Hullas Chortsiz ! Agar sizziyam shunaqa ortolariz bosa bu Sorovnomani unga Jonatib Qoyin U ham HUrsan bolsin')

}