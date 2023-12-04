import React from 'react'
import style from './style.module.scss'
import { Button } from './button.style';

export const AboutUs = () => {
  return (
    <div className={style.text}>
      <h2 className={style.h2_text}>Куда обратиться за помощью в отказе от курения?</h2>
      <div className={style.mainText}>
        <p className={style.p_text}>
          Чтобы отказаться от табака, вы можете обратиться за советом к фармацевту, который расскажет о возможностях никотинзаместительной терапии. Если вы чувствуете, что вам нужна дополнительная помощь, ваш семейный врач может выписать вам специальные лекарства.
          <span className={style.span_text}>
            Каждый желающий может обратиться за бесплатной помощью в консультационный кабинет, где семейный врач, медсестра или акушерка с соответствующей подготовкой дадут инструкции и окажут поддержку в процессе отказа от никотинa. Консультирование бесплатно и не требует направления врача, но рекомендуется предварительная регистрация.
          </span>
        </p>
        <div className={style.contacts}>
          <h2>Контакты телефонных линий:</h2>
          <p className={style.p_text_contacts}>
            Раковый союз — 8002233
            <span className={style.span_contacts}>
              Семейные врачи – 1220
            </span>
          </p>
        </div>
        <div className={style.button}>
          <a href='/'><Button> Вернуться на главную страницу
          </Button>
          </a>
        </div>
      </div>
    </div>
  )
}