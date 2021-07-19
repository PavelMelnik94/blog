import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import ProgressBar from './ProgressBar/ProgressBar'


export default function SoftSkills() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div className='hard__skills'>
          
        <div onClick={toggle} className='hard__skills_header'>
            <span className='hard_skills_header__icon'> 
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-braces" viewBox="0 0 16 16">
  <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z"/>
</svg>
</span>
            <h1 className='hard_skills_header__title'>hard skills</h1>
        </div>
        <Collapse  isOpen={isOpen}>
          <div className='hard__skills_content'>

              <ProgressBar
               skillName='HTML5'
               progressPercent='78%'
               description='Хорошие знания html5.Понимаю какой должна быть верстка для валидаторов и разных устройств.Стараюсь верстать на 95+ зеленых зон.Использую семантические теги.Стараюсь не перегружать верстку ненужными вложениями.
               Стараюсь продумать проект на перед.Не люблю таблицы.плохо знаком с <canvas>. не люблю бутстрап и сетку, предпочитаю сделать всё вручную.'  />

              <ProgressBar
              skillName='CSS3'
              progressPercent='84%'
              description='Истользую препроцессор SCSS. Обожаю flex-box.Часто пользуюсь простой grid-сеткой.косвенно знаком с БЭМ, но нейминг делаю так: диван диван__подушка диван__подушка-большая диван__подушка_навалка  дивин__подушка_наволка-красная' />

             <ProgressBar
              skillName='JavaScript'
              progressPercent='69%'
              description='Манипуляции с DOM.хорошо понимаю самые необходимые для реакта вещи.' />

              <ProgressBar
              skillName='ООП'
              progressPercent='30%'
              description='Основные принципы знаю. Косвенно знаком, но в силу реакта выбрал функциональное.Может быть, когда-нибудь посмотрю и в сторону angular' />

              <ProgressBar
              skillName='ReactJs'
              progressPercent='89%'
              description='Основной род моих занятий. начинал с классовых компонентов, но теперь пишу на функциональных. понимаю принцип SPA. интересуюсь реактом в ширину и глубину. Понимаю принцип иммутабельности и FLUX архитектуры. понимаю как пишуться переиспользуемые компоненты. знаю основные хуки. понимаю как настроить роутинг.' />

              <ProgressBar
              skillName='Preprocessing'
              progressPercent='50%'
              description='пользуюсь уже настроеной сборками gulp, eslint, jshint и webpack' />
            
          </div>
        </Collapse>
      </div>
    );
}
