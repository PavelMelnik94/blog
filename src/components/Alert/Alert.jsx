import React, {useState, useEffect} from 'react'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

//types: success(green), warning(yellow), danger(red), normal(dark-transparent)


export default function Toaster ({type = String, title = String, body = String}) {

const [headerText, setHeaderText] = useState('...')
const [bodyText, setBodyText] = useState('...')
const [headerBgColor, setHeaderBgcolor] = useState('')
const [headerTextColor, setHeaderTextColor] = useState('')

useEffect(() => {
  
  switch (type) {
    case 'email-success':
      setHeaderText('Отлично!')
      setBodyText('Сообщение отправлено')
      setHeaderBgcolor('bg-success')
      setHeaderTextColor('text-white')
      break;
    case 'email-warning':
      setHeaderText('Внимание')
      setBodyText('Заполните все поля и повторите попытку')
      setHeaderBgcolor('bg-warning')
      setHeaderTextColor('text-dark')
      break;
      case 'email-danger':
      setHeaderText('Ошибка!')
      setBodyText('Сбой на сервере.Попробуйте позже.')
      setHeaderBgcolor('bg-danger')
      setHeaderTextColor('text-white')
      break;
      case 'normal':
      setHeaderText(title)
      setBodyText(body)
      setHeaderBgcolor('bg-dark')
      setHeaderTextColor('text-white')
      break;
  
    default:
      break;
  }


  return () => {
    
  }
}, [])

    return (
        <>
        <div className="  my-2 bg-docs-transparent-grid">
          <Toast className='shadow-none' style={{width: '100%'}}>
            <ToastHeader className={`${headerBgColor} ${headerTextColor} border-none`}>
              {headerText}
            </ToastHeader>
            <ToastBody className='border-none ' style={{backgroundColor: 'transparent !important'}}>
              {bodyText}
            </ToastBody>
          </Toast>
        </div>
      
      </>
    )
}
