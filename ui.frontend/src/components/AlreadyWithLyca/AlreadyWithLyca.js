import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './AlreadyWithLyca.css'
export default function AlreadyWithLyca(props) {
const { title,
        description, 
        lycaNumber,
        buttonList = [],
        placeHolder,
        mobileIcon,
        mobileIconText,
        appDownloadText,
        appDownloadLink } = props;
        
  return (
    <section className="already-main-container">
      <div className="already-with-lyca">
        {/* Header Section */}
        <div className="already-header-section">
          <div id="already-top-header">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>

         {/* Recharge / Renew Buttons from JSON */}
        <div className="recharge-and-renew">
          <div className="recharge-tabs-container">
            {buttonList.map((button, index) => (
              
              <button key={index} id={`btn-${index}`}>
                {/* <a href={button.buttonLink}>{button.buttonText}</a> */}
                <Link to="/content/lyca-mobile/us/en/quick-top-up.html" onClick={() => window.scrollTo(0, 0)}>{button.buttonText}</Link>
              </button>
            ))}
          </div>
        </div>

        {/* Enter Lyca Number */}
        <div className="enter-lyca-number">
          <div className="input-container">
            <p>{lycaNumber}</p>
            <div className="input-section">
              <input
                type="number"
                placeholder={placeHolder}
                id="number"
              />
              <button>
                <a href="#">
                  <img
                    loading="lazy"
                    src="/content/dam/lyca-mobile/assets/blueRightCircleArrow.f268c82d.svg"
                    alt=""
                  />
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Download Our App */}
        <div className="download-our-app">
          <div className="cms-content">
            <p>
              <img
                loading="lazy"
                src={mobileIcon}
                alt=""
                id="download-mobile"  
              />
              <span>{mobileIconText}</span>
              <a href={appDownloadLink}>{appDownloadText}</a>
              <img
                loading="lazy"
                src="/content/dam/lyca-mobile/assets/app_arrow.jpg"
                alt=""
                id="download-right-arrow"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
