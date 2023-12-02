import React from 'react'
import style from './style.module.scss'
import {Button} from './button.style'

export const SignIn = () => {
 
  return (
    <div className={style['center']}>
      <form className={style['sign']}>
        <div className={style['forms-item']}>
          <label className={style['inputs-label']}>Логин</label>
          <input type="text" placeholder="Логин" className={style['forms-input']} />
        </div>
        <div className={style['forms-item']}>
          <label className={style['inputs-label']}>Пароль</label>
          <input type="password" placeholder="Пароль" className={style['forms-input']} />
          <div>
            <input type="checkbox" />
            <label>Запомнить меня</label>
          </div>
          <Button className={style['sign_in_button']}>Зарегистрироваться</Button>
        </div>
      </form>
    </div>
  )
}

