import React from "react";
import styles from "./landing.module.css";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

function Landing() {
  return (
    <>
      <div id={styles.header}>
        <div className={styles.container}>
          <nav>
            <img
              className={styles.logo}
              src="src\assets\images\logo_photo.png"
              alt=""
            />
            <div className={styles.divider}></div>
            <div className={styles.text__official}>
              Официальный
              <br />
              сайт зала
            </div>
            <div className={styles.spacer}></div>
            <div className={styles.phone}>
              <div className={styles.phone__holder}>
                <img
                  className={styles.phone__img}
                  src="src\assets\images\tel_icon.png"
                  alt=""
                />
                <a className={styles.num} href="tel:+79679386329">
                  +7 (967)-938-63-29
                </a>
              </div>
              <div className={styles.phone__text}>
                Свяжитесь с нами для <br />
                дополнительной информации
              </div>
            </div>
          </nav>

          <div className={styles.header__text}>
            <h1>
              <span className={styles.span1}>Добро пожаловать</span>
              <br />
              <span className={styles.span2}>в банкетный зал</span>
              <br />
              <span className={styles.span3}>«Париж»</span>
            </h1>
          </div>
        </div>
      </div>

      <div id={styles.services}>
        <div className={styles.container__services}>
          <p className={styles.services__p}>ПОЧЕМУ ЖЕ МЫ?</p>
          <h2 className={styles.services__h2}>Наши главные преимущества</h2>
          <div className={styles.services__list}>
            <div>
              <i className={styles.services__icon_2}></i>
              <h2>Доступная цена</h2>
              <p>
                Оптимальная цена на все услуги зала в размере 55 тыс. рублей
              </p>
            </div>
            <div>
              <i className={styles.services__icon_1}></i>
              <h2>Удобство</h2>
              <p>
                Просторный зал для размещения всех ваших гостей со всеми
                удобствами (500 человек). Имеется всё необходимое оборудование
                для работы поваров и официантов и многое другое!
              </p>
            </div>
            <div>
              <i className={styles.services__icon_3}></i>
              <h2>Парковка</h2>
              <p>Большая парковка внутри и снаружи зала</p>
            </div>
          </div>
        </div>
      </div>

      <Flickity
        className={styles.carousel}
        elementType={"div"}
        disableassetsLoaded={false}
        reloadOnUpdate
      >
        <video
          className={styles.carousel__cell}
          src="src\assets\video\IMG_0912.mp4"
          controls
          al
          onLoad={() => this.forceUpdate()}
        ></video>
        <video
          className={styles.carousel__cell}
          src="src\assets\video\IMG_0911.mp4"
          controls
          al
          onLoad={() => this.forceUpdate()}
        ></video>
        <video
          className={styles.carousel__cell}
          src="src\assets\video\video_2023-05-01_06-17-31.mp4"
          controls
          al
          onLoad={() => this.forceUpdate()}
        ></video>
      </Flickity>

      <div className={styles.container__for__gallery}>
        <main className={styles.gallery}>
          <div data-speed="1.1" className={styles.gallery__right}>
            <div
              className={`${styles.text__block} ${styles.gallery__item__right}`}
            >
              <h2 className={styles.text__block__h}>О нас</h2>
              <p className={styles.text__block__p}>
                Мы предоставляем по-настоящему изысканный и престижный интерьер
                для проведения банкетов, отражающий вкус и красоту знаменитой
                французской столицы.
                <br />
                Вот уже более 8 лет в нашем зале проводятся бракосочетания пар и
                общественные мероприятия всего города. У нас вы найдете
                необъятное богатство декоративных элементов и эффектов, которые
                смогут дополнить и подчеркнуть свадебную атмосферу.
              </p>
            </div>

            <img
              className={styles.gallery__item__left}
              src="src\assets\images\wedding_icon.png"
              alt=""
            />
            <img
              className={styles.gallery__item__right}
              src="src\assets\images\IMG_7218.jpg"
              alt=""
            />
          </div>
          <div data-speed=".9" className={styles.gallery__left}>
            <img
              className={styles.gallery__item__left}
              src="src\assets\images\IMG_7219.jpg"
              alt=""
            />
            <img
              className={styles.gallery__item__right}
              src="src\assets\images\IMG_7217.jpg"
              alt=""
            />

            <div
              className={`${styles.text__block} ${styles.gallery__item__right}`}
            >
              <h2 className={styles.text__block__h}>Остались вопросы?</h2>
              <p className={styles.text__block__p}>
                Не стесняйтесь спрашивать, мы подробно расскажем об условиях
                организации вашего банкета и бронирования зала.
                <br />
                <br />
                Можете позвонить нам по указанному на сайте номеру или задать
                вопрос через форму обратной связи.
              </p>
            </div>

            <img
              className={styles.gallery__item__left}
              src="src\assets\images\rings_photo.png"
              alt=""
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default Landing;
