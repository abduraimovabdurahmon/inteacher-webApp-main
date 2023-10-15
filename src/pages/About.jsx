import React from 'react'
import "./about.css"
import {BsTelegram} from "react-icons/bs"
import {AiFillYoutube} from "react-icons/ai"

const About = () => {
  return (
    <>
      <div className="container">
          <div className='about-title'>About us</div>
          <div className="about-box">
            <div className="about-text">
              <p><mark>InTeacher</mark> ga xush kelibsiz! Bizning o'qituvchilarimiz sizning o'qishingizda muvaffaqiyat qozonishingizga yordam berish uchun shu yerda.</p>
              <p>Ilg'or darajalari va katta o'qitish tajribasiga ega bo'lgan o'qituvchilarimiz sizning ehtiyojlaringizga moslashtirilgan yuqori sifatli ko'rsatmalarni taqdim etadigan fan bo'yicha mutaxassislardir.</p>
              <p>Mavzu bo'yicha bilimlardan tashqari, biz uzoq muddatli akademik muvaffaqiyat uchun muammolarni hal qilish va tanqidiy fikrlash ko'nikmalarini rivojlantirishga e'tibor qaratamiz.</p>
              <p>Sizning xavfsizligingiz bizning ustuvor vazifamizdir. Biz xavfsiz onlayn ta'lim muhitini ta'minlaymiz va shaxsiy ma'lumotlaringizni himoya qilamiz.</p>
              <p>Biz bilan taʼlim sayohatingizni boshlash uchun abduraimovabdurahmon@mail.ru yoki +998901427395 raqami orqali biz bilan bogʻlaning!</p>

              <a href='https://t.me/arabtilionline'><BsTelegram color='#0088cc' size={25}/>Telegram</a>    <a href='https://www.youtube.com/@ARABTILIONLINE' target='_blank'><AiFillYoutube color='red' size={25}/>Youtube</a>
            </div>
          </div>
      </div>
    </>
  )
}

export default About