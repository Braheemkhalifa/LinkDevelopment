import RightArrowIcon from 'components/Icons/RightArrowIcon';
import Link from 'next/link';

const ThingsWeDo = () => {
  return (
    <section id="thingsWeDo" className="section">
      <div className="container-fluid">
        <div className="wrapper">
          <div className="outline-title">
            Things <br /> We Do
          </div>
          <div className="images">
            <div className="image-col">
              <Link passHref href="/transformation">
                <div
                  className="img cover"
                  style={{
                    background:
                      'url(https://linkdevelopment.com/app/themes/linkdev/assets/images/careers/building-talents.png)'
                  }}
                >
                  <div className="title-wrapper">
                    <h6 className="text" data-text="Transformation">
                      Transformation
                    </h6>
                  </div>
                  <div className="read">
                    <RightArrowIcon /> <span>Read more</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="image-col">
              <Link passHref href="/envision">
                <div
                  className="img cover"
                  style={{
                    background:
                      'url(https://linkdevelopment.com/app/uploads/2020/09/Awards_Image.png)'
                  }}
                >
                  <div className="title-wrapper">
                    <h6 className="text" data-text="Envision">
                      Envision
                    </h6>
                  </div>

                  <div className="read">
                    <RightArrowIcon /> <span>Read more</span>
                  </div>
                </div>
              </Link>
              <Link passHref href="/dynamics">
                <div
                  className="img cover"
                  style={{
                    background: 'url(https://linkdevelopment.com/app/uploads/2021/06/PR_Cover.jpg)'
                  }}
                >
                  <div className="title-wrapper">
                    <h6 className="text" data-text="Dynamics 365">
                      Dynamics 365
                    </h6>
                  </div>
                  <div className="read">
                    <RightArrowIcon /> <span>Read more</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="image-col">
              <Link passHref href="/crafty">
                <div
                  className="img cover"
                  style={{
                    background: 'url(https://linkdevelopment.com/app/uploads/2020/12/Group-437.png)'
                  }}
                >
                  <div className="title-wrapper">
                    <h6 className="text" data-text="Crafty Mind">
                      Crafty Mind
                    </h6>
                  </div>
                  <div className="read">
                    <RightArrowIcon /> <span>Read more</span>
                  </div>
                </div>
              </Link>

              <Link passHref href="/services">
                <div
                  className="img cover"
                  style={{
                    background:
                      'url(https://linkdevelopment.com/app/uploads/2020/11/last-banner.jpg)'
                  }}
                >
                  <div className="title-wrapper">
                    <h6 className="text" data-text="Services">
                      Services
                    </h6>
                  </div>
                  <div className="read">
                    <RightArrowIcon /> <span>Read more</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="content">
            <div className="content-wrapper">
              <h3 className="title">
                We Deliver <br /> Digital Productivity
              </h3>
              <h6 className="description">
                We craft technology solutions that digitally bond and transform the productivity of
                our customers and their citizens, workers, consumers and partners.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThingsWeDo;
