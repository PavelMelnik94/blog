import React from "react";
import Slider from '../components/Slider/Slider'


export default function About() {
  return (
    <div className="post-content">

      <article className="article">
        <h1 className="article-header">Hello world</h1>
        <div className="article-content">
          Привет!<del>немного шаблона</del> меня зовут Паша.Живу в Минске.<del>внешне на 20</del> 27 лет.Имею <del>пту</del> средне-техническое образование "столяр-станочник".Работаю по сей день в <del>коллективе</del> мебели, уже 8 лет.Средний балл 2(из 10ти), Английского не знаю. 
          <hr className='hr-dashed' />
          <h2>Зачатие</h2>
        <p>
          В далеком 2009, во времена локальных сеток между домами, cs 1.6, wow 2.4.2, фиолетовых челок и сдачей стеклянных бутылок с денежной выгодой дабы посидеть пол часа на компах, рос я.Мне тогда только купили компьютер.Пришел <del>сисадмин</del> Алексей и установил ВИНДУ.Было интересно везде ковыряться и менять настройки(особенно рееста.их много), поэтому заходил он часто.Открытием было то, что в сети был <del>cms со стартовой версткой</del> ПОРТАЛ с форумом, куда люди с района заходили обменяться опытом, мнением, узнать о новостях. Особенно мне нравилась "гостевая книга".Что-то типа чата.Тогда я подумал - тоже хочу так! 
        </p>
        <p>Начал копать в интернете и осваивать macromedia mreamwiever, который на фоне тамшней cms выглядел убого по одной <del>для меня</del> причине - сайт нужно было делать самому.Найти картинки, шрифты, придумать кнопки...ну нафиг.Начал гуглить(как гуглил 14ти летний ребенок), и наткнулся на CMS.Тогда балом правил DLE(Data Life Engine), но были и другие: WordPress, Joomla, Drupal.Где-то на форуме прочитал что нужна "связка", и пройдя по ссылке скачал PhpMyAdmin, в который входили php, apache, MySql. установил их, бд и по интрукции начал устанавливать DLE.Устанвка закончилась успехом, радости был полный школьный ранец.Помню что опробовал все cms и форума, но понравилась только Joomla.отценивал их я разумеется по стандартной верстке потому что не знал что её можно поменять.Подумал - хочу менять! начал копаться в файлах и заметил что они все .php.Погуглил php и понял - что надо!</p>
        <p>Вскоре я закончил школу и стал вопрос: а куда же двоечнику поступать? Родители сказали: программирование для умных, а у тебя 2, мы сами подадим документы.Ну и черт с ним, - подумал тогда я нацарапав на подкорках памяти "php".Все 8 лет что я работаю в столярке, я держал мысль что когда-нибудь настанет момент и я вернусь, разберусь что к чему и буду работать программистом.Проработав 8 лет, я как сейчас модно говорить "выгорел".Больше нет ни сил, ни желания заниматься мебелью.Время идет, а я топчусь на месте</p>
        <h2>Становление</h2>
        <p>Поискав "php" в гугле, удивился как много языков существует.Записался на разовый курс войтишников дабы сэкономить недели поисков и чтения.Пришел, послушал, позадавал вопросы и получил ответ в лоб: "php умирает, python рулит! всё что написано на php можно написать и на пайтоне, но за 2 строчки!" - ну..2 так 2, подумал я, и записался на "Python Basic".Курс начался очень легко: числа, строки, переменные, типизация...a + b = c, print c; Ну и как всегда бывает на таких курсах, на занятии 5-6 пошли  "Числа Фибоначчи", "Теоремы Коллатца" и рекурсия.Я поплыл моментально, но предложили следующее: пройти другой курс, "углубленный".Негодовал я не из-за непонимания алгебры, а из-за того не вижу своего сайта. мы что-то пишем, функции что-то возвращают, а сайт-то где?
        </p>
        <h2>Верстка</h2>
          <p>Придя в очередной раз домой и погуглив, я попробовал написал в html 'нахуй пайтон!'.Проверил - работает!! Это была эйфория.Я конечно доходил на курс по пайтону из-за грусти о выплаченных денег которых и так очень мало, но уже сам накупил книжек и учил верстку.</p>
        <p>Книги я не особо люблю т.к. такие длинные текста типа этого, быстро наскучивают и из-за этого фокус переключается на дела более интересные.Была "черная пятница", и я наткнулся на сайт Udemy.com. Там были онлайн-курсы по 9.99 и единственное что мне не нравилось, это то что они онлайн.Купил.Радости моей предела небыло.<del>чел</del> Ментор так интересно рассказывал, что меня втянуло с головой.После первого лендинга дела пошли как по маслу.Прошел этот курс два раза дабы закрепить то что возможно "в одно ухо влетело, в другое вылетело", и купил его же курс по Js. </p>
        <h2>JavaScript</h2>
        <p>закончив теоретический курс с js, купил практический, основанный на первом, теоретическом.Закончил и его, купил ешё 2 курса от других авторов в целях практики, попутно придумывая мелкие задания для верстки по работе с DOM.Так прошли мои следующие пол года.</p>
        <h2>React</h2>
        <p>Почему реакт? Создав первый "hello world" я просто не стал смотреть энгуляр и вью.Прошел мини-курс по реакту на udemy, и нашел интересный курс из 100 уроков на utube.com. прошел только 70, т.к. остальные 30 посвященые редаксу: саге, санкам и мидлвейру, а я не уверен что в месте где я буду работать будут использовать именно редакс.почему бы его не выучить просто так? а может и мобХ тогда выучу, и рекойл, и остальные стейт менеджеры и стану доктором наук по стейтменеджменту реакта? или может когда придет время выучу нужный под задачи инструмент и сфокусируюсь на нем? пока ограничусь context api и useReducer.Стал вопрос в поисках практики, и я опять обратился к udemy.Нашел там ещё пару курсов и купил их, прослушав на скорости 2.0 то что уже знаю и приступал к проектам.Последний найденый курс на udemy оказался крайне полезным.Благодаря ему я начал понимать js намного глубже, не говоря уже о реакте.
        </p>
        <p>На данный момент я допишу это портфолио и буду смотреть в сторону TypeScript, возможно подумаю об Apollo graphQL.Возможно перепишу это портфолио на ts.Надеюсь что мои первые грабли в виде курса по пайтону дадут какие-то плоды, т.к. я уже знаком с типизацией, и времени на изучение ts понадобиться меньше.</p>
        <h2>Подрезюмируем</h2>
        <p><del>обучение</del> Практика длиться уже год.За этот год я много чего узнал и сделал.Дело пойдет быстрее если я начну работать.</p>
        <h2>Фантики</h2>
        <Slider />
        
        </div>
        

        
      </article>
    </div>
  );
}

export { About };
