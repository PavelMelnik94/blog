
import React from "react";
import Accordion from '../components/Accordion/Accordion'

const arrow = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg>`


export default function Knowledge() {
  return (
    <div className="post-content">

      <article className="article">
        <h1 className="article-header">Чем пользуюсь</h1>
        <div className="article-content">
          
        {'  '}
        
        <Accordion icon={arrow} title='Верстка' content=' структура выглядит следующим образом <br />

<img src="https://wp.pavelmelnik.ru/wp-content/uploads/2021/07/html.jpg" alt="html" />

верстать предпочитаю вручную, без "бутстрапов",хотя могу и с ними. <br />
В позиционировании и лэйауте предпочтаю флексбоксы и грид сетки.
w3c валидатор, зеленые зоны google page speed. 
'/>
          

          <Accordion icon={arrow} title='Стили' content='<img src="https://wp.pavelmelnik.ru/wp-content/uploads/2021/07/css.jpg" alt="css" />
           
           <br />
           Пользуюсь в основном препроцессором sass(scss). могу на чистом.
           <br />
           Из ui библиоткек в основном использую <a href="https://materializecss.com/">materialize css</a>, <a href="https://bulma.io/">bulma css</a>, <a href="https://github.com/dmitry-lavrik/smart-grid"> smart grid</a> и моё любимое - <a href="https://csslayout.io/">https://csslayout.io/</a>.
<br/>
            Стараюсь следовать компонентному подходу.разбиваю верстку на глобальные секции, которые разбиваю на логические блоки, а те, уже на компоненты, подкомпоненты и элементы.Стили для каждой сущности храню в отдельных файлах.
            <br />
            Файлы с брейкпоинтами выглядят так: styles/media/_mobile.scss(_tablet.scss, _desktop).Запросы прописываю обычно так: <br/>
            @media (min-width: 320px) and (max-width: 570px).Mobile first не пробовал, но попробовал бы.
            <br/>
            в роли таск-менеджера gulp(готовая сборка из интернетов) 
'/>
        
        <Accordion icon={arrow} title='JavaScript' content='В силу реакта на нативном пишу редко, но всегда читаю переводы статей на хабре и постоянно изучаю подкапотные темы.
                jquery почти не использую. иногда пользуюсь axios и underscoreJs.Знаю базовые принципы ОПП, но практически было только знакомство.Понимаю промисы, коллбэки, замыкание, деструктуризацию, глубокое и поверхностное копирование.знаком с FLUX архитекрутой.Понимаю CRUD.
                <br />
                Сейчас в стадии перехода на typescript.
'/>

<Accordion icon={arrow} title='React' content='Реакт наше всё.Начинал на классовых компонентах, затем плавно перешел на функциональные и как следствие, классовыми почти не пользуюсь.понимаю как работает JSX, Props. Понимаю как работает shadow DOM.Знаю основные хуки - useRef, useEffect, useState, useReducer. Context Api. Понимаю как работает rest api и рендер элементов с ключами.Роутинг. PropTypes.
'/>
            

            <Accordion icon={arrow} title='Графика' content='Нарезаю макеты по большей части в Figma, но могу и в Photoshop или Marcy. В ближайшее время возможно попробую и Avocode.
            Картинки, иконки, шрифты отпимизирую через минификацию gulp, и сервисами по сжатию.
'/>
            

           
        
        </div>
        

        
      </article>
    </div>
  );
}

export { Knowledge };
