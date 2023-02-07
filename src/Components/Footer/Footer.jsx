import React from 'react'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={`section ${styles.footer}`}>
      <div className={`${styles.colOne} ${styles.col}`} id="col-1">
        <svg
          data-hovered="true"
          width="93"
          height="24"
          viewBox="0 0 93 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.8119 6.75195H35.003L37.6585 10.632C37.8689 10.9414 38.1103 11.3127 38.3827 11.7459C38.655 12.1791 38.8778 12.538 39.0512 12.8165L39.3049 13.2373V7.64307C39.3049 7.148 39.7073 6.75195 40.1963 6.75195H41.4033V16.4614H39.1811L36.7052 12.8474C36.4329 12.4576 36.1481 12.0306 35.851 11.5603C35.5539 11.0899 35.3187 10.7186 35.1454 10.434L34.904 10.0317V15.5703C34.904 16.0653 34.5017 16.4614 34.0127 16.4614H32.8057V6.75195H32.8119Z"
            fill="#0D0D0E"
          />
          <path
            d="M44.5105 8.05776C45.4823 7.0862 46.714 6.60352 48.1934 6.60352C49.6728 6.60352 50.8983 7.0862 51.8763 8.05776C52.8481 9.02932 53.3371 10.2113 53.3371 11.6098C53.3371 13.0208 52.8481 14.2089 51.8763 15.1743C50.9045 16.1459 49.6728 16.6285 48.1934 16.6285C46.714 16.6285 45.4885 16.1459 44.5105 15.1743C43.5387 14.2027 43.0497 13.0146 43.0497 11.6098C43.0497 10.2113 43.5387 9.02314 44.5105 8.05776ZM46.0889 13.8129C46.6521 14.4193 47.3578 14.7287 48.212 14.7287C49.0538 14.7287 49.7532 14.4255 50.3103 13.8129C50.8674 13.2002 51.1521 12.47 51.1521 11.6098C51.1521 10.762 50.8736 10.0318 50.3103 9.41919C49.7532 8.80655 49.0538 8.50332 48.212 8.50332C47.364 8.50332 46.6583 8.80655 46.0889 9.41919C45.5256 10.0318 45.2409 10.7559 45.2409 11.6098C45.2409 12.47 45.5194 13.2002 46.0889 13.8129Z"
            fill="#0D0D0E"
          />
          <path
            d="M54.5318 14.5867C54.7484 14.1226 55.2993 13.937 55.7574 14.1721C56.5187 14.562 57.3234 14.76 58.159 14.76C58.6666 14.76 59.106 14.6486 59.4774 14.4196C59.8488 14.1969 60.0345 13.9184 60.0345 13.5904C60.0345 13.2686 59.8798 13.0273 59.5641 12.854C59.2484 12.6869 58.8089 12.5384 58.2395 12.4208C57.8186 12.3218 57.4596 12.229 57.1501 12.1424C56.8468 12.0557 56.5187 11.932 56.1659 11.7649C55.8193 11.5978 55.5283 11.4183 55.3117 11.2203C55.0951 11.0223 54.9094 10.7686 54.7546 10.453C54.6061 10.1435 54.5318 9.79081 54.5318 9.40095C54.5318 8.50984 54.8846 7.82294 55.5964 7.33406C56.3082 6.84519 57.1624 6.59766 58.159 6.59766C59.4898 6.59766 60.672 6.9442 61.7119 7.6311L61.3405 8.41701C61.1363 8.85019 60.6287 9.04203 60.1892 8.85638C59.5455 8.59028 58.8708 8.45414 58.159 8.45414C57.8 8.45414 57.4596 8.52221 57.1315 8.66455C56.8096 8.80688 56.6425 9.04203 56.6425 9.38238C56.6425 9.67323 56.7849 9.89601 57.0758 10.0507C57.3667 10.2054 57.8186 10.3478 58.4375 10.4777C60.9073 11.0285 62.139 12.0619 62.139 13.578C62.139 14.5558 61.7429 15.3046 60.9444 15.8244C60.1521 16.3442 59.2113 16.6041 58.1342 16.6041C56.5682 16.6041 55.2498 16.1647 54.1913 15.286L54.5318 14.5867Z"
            fill="#0D0D0E"
          />
          <path
            d="M66.125 8.55242H63.7234C63.2282 8.55242 62.832 8.15017 62.832 7.6613V6.75781H70.6312C71.1263 6.75781 71.5225 7.16005 71.5225 7.64892V8.55242H68.2233V16.4672H66.125V8.55242Z"
            fill="#0D0D0E"
          />
          <path
            d="M72.8659 6.75195H77.0193C78.3996 6.75195 79.4704 7.10469 80.2256 7.81015C80.9807 8.51562 81.3645 9.41292 81.3645 10.5021C81.3645 11.1642 81.2036 11.7645 80.8817 12.3152C80.5598 12.866 80.1142 13.3115 79.5323 13.6519L81.5564 16.4676H78.9938L77.4959 14.2212C77.1678 14.2398 76.6974 14.2522 76.0846 14.2522H74.9581V15.5765C74.9581 16.0715 74.5557 16.4676 74.0667 16.4676H72.8597V6.75195H72.8659ZM77.1121 12.4452C77.7435 12.4452 78.2449 12.2595 78.6162 11.8882C78.9938 11.5169 79.1795 11.0528 79.1795 10.4959C79.1795 9.93892 78.9938 9.4748 78.6224 9.1035C78.251 8.7322 77.7559 8.54656 77.1245 8.54656H74.9643V12.4452H77.1121Z"
            fill="#0D0D0E"
          />
          <path
            d="M86.3904 6.75195H88.4763L92.704 16.4614H91.1441C90.7913 16.4614 90.4694 16.251 90.3271 15.923L89.8876 14.9143H84.9729L84.5458 15.9168C84.4035 16.2448 84.0816 16.4614 83.7226 16.4614H82.1689L86.3904 6.75195ZM89.1758 13.2744L88.3959 11.4922L87.4241 8.97355C87.0836 9.96986 86.7618 10.8115 86.4647 11.4922L85.6847 13.2744H89.1758Z"
            fill="#0D0D0E"
          />
          <path
            d="M14.8431 2.16776L13.3328 1.29521C10.5969 -0.282806 7.22348 -0.288995 4.48141 1.29521L4.43188 1.32615C1.66505 2.92273 0 5.80028 0 8.99343V20.1014C0 21.7413 1.3308 23.0718 2.9711 23.0718C4.61139 23.0718 5.94219 21.7413 5.94219 20.1014V14.1607V10.7323V8.98725C5.94219 7.94762 6.49927 6.98224 7.40298 6.46242L7.4525 6.43148C8.35621 5.91167 9.47037 5.91167 10.3741 6.43148L10.8197 6.68521L16.7557 3.25689L14.8431 2.16776Z"
            fill="url(#paint0_linear_1_487)"
          />
          <path
            d="M16.7436 3.26367L10.8076 6.69198L11.8723 7.30462L14.8434 9.01878L20.7794 5.59047L16.7436 3.26367Z"
            fill="url(#paint1_linear_1_487)"
          />
          <path
            d="M11.872 21.2654L13.3823 22.1379C16.1182 23.7159 19.4916 23.7221 22.2337 22.1379L22.2832 22.107C25.05 20.5104 26.7151 17.6328 26.7151 14.4397V3.33171C26.7151 1.69181 25.3843 0.361328 23.744 0.361328C22.1037 0.361328 20.7729 1.69181 20.7729 3.33171V9.27246V12.7008V14.4459C20.7729 15.4855 20.2158 16.4509 19.3121 16.9707L19.2626 17.0016C18.3589 17.5214 17.2447 17.5214 16.341 17.0016L15.8954 16.7479L9.95935 20.1762L11.872 21.2654Z"
            fill="url(#paint2_linear_1_487)"
          />
          <path
            d="M9.97177 20.1692L15.9078 16.7409L14.8431 16.1282L11.872 14.4141L5.93604 17.8424L9.97177 20.1692Z"
            fill="url(#paint3_linear_1_487)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_487"
              x1="0.116065"
              y1="11.5873"
              x2="13.0644"
              y2="11.5873"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1352FE" />
              <stop offset="1" stopColor="#009DFF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_487"
              x1="15.0399"
              y1="4.89695"
              x2="16.8953"
              y2="7.96745"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#009DFF" />
              <stop offset="1" stopColor="#0DABFE" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1_487"
              x1="26.5964"
              y1="11.8458"
              x2="14.971"
              y2="11.8458"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#009DFF" />
              <stop offset="1" stopColor="#1352FE" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_1_487"
              x1="11.9688"
              y1="19.0125"
              x2="10.0623"
              y2="15.8809"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1352FE" />
              <stop offset="1" stopColor="#0FA7FE" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <h3>
          <a className={styles.mail} href="mailto:info@nostra">
            info@nostra
          </a>
        </h3>
        <span className={styles.copyright}>
          Copyright © 2022. All rights reserved.
        </span>
      </div>
      <div className={styles.col}>
        <p>Explore</p>
        <div className={styles.links}>
          <h3>
            <a href="/about">About</a>
          </h3>
          <h3>
            <a href="/services">services</a>
          </h3>
          <h3>
            <a href="/news">news</a>
          </h3>
          <h3>
            <a href="/vacancies">vacancies</a>
          </h3>
        </div>
      </div>
      <div className={styles.col}>
        <p>
          <a href="/terms">Terms & Conditions</a>
        </p>
        <p>
          <a href="/faq">FAQ</a>
        </p>
        <p>
          <a href="/terms">Contacts</a>
        </p>
      </div>
      <div className={`${styles.form} ${styles.col}`}>
        <h3>Contact Us</h3>
        <input className={styles.email} type="email" placeholder="Your email" />
        <input
          className={styles.question}
          type="text"
          name="question"
          placeholder="Your question"
        />
        <button className="black">Send</button>
      </div>
    </footer>
  )
}

export default Footer
