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
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cup-straw" viewBox="0 0 16 16">
  <path d="M13.902.334a.5.5 0 0 1-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A.78.78 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 0 1 .303-.356l2.5-1a.5.5 0 0 1 .65.278zM9.768 4.607A13.991 13.991 0 0 0 8 4.5c-1.076 0-2.033.11-2.707.278A3.284 3.284 0 0 0 4.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085l.18-.808zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a5.514 5.514 0 0 1-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69 1.27 0 2.081-.441 2.438-.69.042-.029.09-.094.102-.215l.852-8.03a5.517 5.517 0 0 1-.435.127 8.88 8.88 0 0 1-.89.17zM4.467 4.884s.003.002.005.006l-.005-.006zm7.066 0-.005.006c.002-.004.005-.006.005-.006zM11.354 5a3.174 3.174 0 0 0-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222z"/>
</svg>
</span>
            <h1 className='hard_skills_header__title'>Soft</h1>
        </div>
        <Collapse  isOpen={isOpen}>
          <div className='hard__skills_content'>

              <ProgressBar
               skillName='Коммуникабельность'
               progressPercent='70%'
               description='В меру общительный.Ни больше ни меньше.'  />

              <ProgressBar
              skillName='Организованность'
              progressPercent='90%'
              description='Стараюсь планировать и продумывать планы наперед со всеми негативными сценариями.' />

             <ProgressBar
              skillName='Команда'
              progressPercent='50%'
              description='Всё зависит от команды.Опираясь на свой опыт работы в коллективах, пожалуй скажу, что проблем нет.Но сплаченый коллектив людей вызывающих у меня антипатию может стать проблемой.' />

              <ProgressBar
              skillName='Пунктуальность'
              progressPercent='100%'
              description='Стараюсь распоряжаться временем как ресурсом недостающим.Всегда рихожу на встречу раньше времени.На досуге занимаюсь делами на которые в перспективе времени может не хватить.' />

              <ProgressBar
              skillName='Креативность'
              progressPercent='95%'
              description='Большой уровень насмотренности.Непереношу однообразие и обыйденность.' />

              <ProgressBar
              skillName='Гибкость'
              progressPercent='100%'
              description='Тактичность на высоте.' />

              <ProgressBar
              skillName='Лидерские качества'
              progressPercent='20%'
              description='К сожелению или частью я точно не лидер.Предпочитаю не брать ответственность за других.Не умею мотивировать.' />

              <ProgressBar
              skillName='Дружелюбность'
              progressPercent='100%'
              description='Культура и чувство юмора на максималках.' />

              <ProgressBar
              skillName='Критическое мышление'
              progressPercent='90%'
              description='Постоянно анализирую всё вокруг и делаю обоснованные выводы.Иногда они противоречат лично моей точке зрения, но кроме черного и белого есть и другие цвета.' />

              <ProgressBar
              skillName='Эмоциональный интелект'
              progressPercent='100%'
              description='Мой самый полезный навык.Именно благодаря ему работают все остальные навыки в повышенном режиме.' />


            
          </div>
        </Collapse>
      </div>
    );
}
