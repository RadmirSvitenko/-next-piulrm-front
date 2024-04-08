import BlockAboutProject from '../../../components/blockAboutProject/Component';
import BlockInfo from '../../../components/blockInfo/Component';
import BlocksResult from '../../../components/blocksResult/Component';

const Home: React.FC = async ({ dict }: any) => {
  return (
    <div
      className={
        'flex justify-between min-h-screen items-center w-full bg-[#F0F8FF] pb-22 flex-col'
      }
    >
      <div className="flex z-20 overflow-y-auto justify-between md:flex-col sm:items-center sm:px-4 md:items-center md:w-full w-full gap-6 sm:py-4 pt-10 pl-7 pr-0 pb-9 sm:flex-wrap">
        <BlocksResult dict={dict} />
        <BlockAboutProject dict={dict} />
        <BlockInfo dict={dict} />
      </div>

      <div
        className={
          'flex relative flex-col w-full sm:px-[16px] justify-between items-center md:mb-[80px] gap-[30px] lg:mb-[80px] sm:mb-[40px]'
        }
      >
        <img
          src="/c-left.png"
          alt="c-left"
          className={'absolute left-0 bottom-[-50%] z-0 h-[400px]'}
        />
        <img
          src="/c-right.png"
          alt="c-right"
          className={'absolute right-0 bottom-[-100%] z-0 h-[400px]'}
        />
        <h3 className={'font-montserrat text-[40px] font-[500]'}>
          {dict?.home?.partners?.title}
        </h3>

        <div
          className={
            'flex  pb-[80px] z-10 justify-between md:flex-col flex-wrap items-start gap-5 sm:w-full sm:flex-col'
          }
        >
          <div
            className={
              'flex shadow-md flex-col justify-center gap-5 items-center w-[387px] sm:h-[138px] h-[121px] rounded-xl pt-[26px] px-[20px] pb-[20px] bg-[#FCFCFD] sm:w-full sm:px-[16px] sm:gap-[20px]'
            }
          >
            <span
              className={
                'font-[500] font-montserratOpenSans text-center text-[14px] text-[#1A1A1A]'
              }
            >
              {dict?.home?.partners?.one}
            </span>

            <p
              className={
                'font-[400] font-montserratOpenSans text-[14px] text-[#4383FF] hover:text-decoration-line cursor-pointer'
              }
            >
              <a href="#">{dict?.home?.partners?.link}</a>
            </p>
          </div>

          <div
            className={
              'flex shadow-md flex-col justify-center gap-5 items-center w-[387px] sm:h-[138px] h-[121px] rounded-xl pt-[26px] px-[20px] pb-[20px] bg-[#FCFCFD] sm:w-full sm:px-[16px] sm:gap-[20px]'
            }
          >
            <span
              className={
                'font-[500] font-montserratOpenSans  text-center text-[14px] text-[#1A1A1A]'
              }
            >
              {dict?.home?.partners?.two}
            </span>

            <p
              className={
                'font-[500] font-montserratOpenSans text-[14px] text-[#4383FF] hover:text-decoration-line cursor-pointer'
              }
            >
              <a href="#">{dict?.home?.partners?.link}</a>
            </p>
          </div>

          <div
            className={
              'flex shadow-md flex-col justify-center gap-5 items-center w-[387px] h-[121px] sm:h-[138px] rounded-xl pt-[26px] px-[20px] pb-[20px] bg-[#FCFCFD] sm:w-full sm:px-[16px] sm:gap-[20px]'
            }
          >
            <span
              className={
                'font-[500] font-montserratOpenSans  text-center text-[14px] text-[#1A1A1A]'
              }
            >
              {dict?.home?.partners?.three}
            </span>

            <p
              className={
                'font-[400] text-[14px] text-[#4383FF] hover:text-decoration-line font-montserratOpenSans cursor-pointer'
              }
            >
              <a href="#">{dict?.home?.partners?.link}</a>
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: 'url(/main-links-bg.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className={
          'w-full box-border min-h-[498px]  h-auto opacity-90 flex justify-center flex-col items-center lg:pt-[70px] lg:px-[120px] lg:pb-[100px] md:pt-[70px] md:pb-[100px] md:flex-wrap sm:pt-[50px] md:px-auto px-[16px] pb-[80px]'
        }
      >
        <div
          className={
            'flex flex-col justify-between sm:gap-10 items-center min-h-[328px] h-auto sm:w-full sm:h-auto'
          }
        >
          <p
            className={
              'font-montserrat sm:px-4 text-center text-[40px] font-[500] text-[#1A1A1A] sm:text-[25px] sm:font-[500] sm:text-wrap sm:text-center'
            }
          >
            {dict?.home?.links?.title}
          </p>

          <div className="flex justify-center flex-wrap md:flex-col items-center gap-4 md:gap-12 sm:gap-12 sm:flex-col">
            <div
              className={
                'lg:gap-[32px] w-[218px] h-[199px] flex flex-col justify-between items-center gap-[30px]'
              }
            >
              <img
                src={'/link-icon-1.svg'}
                alt="gos-link-1"
                className={'w-[100px] h-[100px]'}
              />

              <p
                className={
                  'font-montserrat tracking-[0.5px] text-center text-[16px] font-[550] text-[#1A1A1A]'
                }
              >
                {dict?.home?.links?.one?.title}
              </p>

              <a
                className={
                  'text-[#1A1A1A] tracking-[0.5px] text-[14px] font-[400]  hover:text-[#4383FF] underline-offset-1 cursor-pointer'
                }
                href="https://www.president.kg"
              >
                {dict?.home?.links?.one?.link}
              </a>
            </div>

            <div
              className={
                'lg:gap-[32px] w-[218px] h-[199px] flex flex-col justify-between items-center gap-[30px]'
              }
            >
              <img
                src={'/link-icon-2.svg'}
                alt="gos-link-1"
                className={'w-[218px] h-[100px]'}
              />

              <p
                className={
                  'font-montserrat tracking-[0.5px] text-center text-[16px] font-[550] text-[#1A1A1A]'
                }
              >
                {dict?.home?.links?.two?.title}
              </p>

              <a
                className={
                  'text-[#1A1A1A] tracking-[0.5px] text-[14px] font-[400]  hover:text-[#4383FF] underline-offset-1 cursor-pointer'
                }
                href="https://www.gov.kg"
              >
                {dict?.home?.links?.two?.link}
              </a>
            </div>

            <div
              className={
                'lg:gap-[32px] w-[218px] h-[199px] flex flex-col justify-between items-center gap-[30px]'
              }
            >
              <img
                src={'/link-icon-3.svg'}
                alt="gos-link-1"
                className={'w-[100px] h-[100px]'}
              />

              <p
                className={
                  'font-montserrat tracking-[0.5px] text-center text-[16px] font-[550] text-[#1A1A1A]'
                }
              >
                {dict?.home?.links?.three?.title}
              </p>

              <a
                className={
                  'text-[#1A1A1A] tracking-[0.5px] text-[14px] font-[400]  hover:text-[#4383FF] underline-offset-1 cursor-pointer'
                }
                href="https://www.mchs.kg"
              >
                {dict?.home?.links?.three?.link}
              </a>
            </div>

            <div
              className={
                'lg:gap-[32px] w-[218px] h-[199px] flex flex-col justify-between items-center gap-[30px]'
              }
            >
              <img
                src={'/link-icon-1.svg'}
                alt="gos-link-1"
                className={'w-[100px] h-[100px]'}
              />

              <p
                className={
                  'font-montserrat tracking-[0.5px] text-center text-[16px] font-[550] text-[#1A1A1A]'
                }
              >
                {dict?.home?.links?.four?.title}
              </p>

              <a
                className={
                  'text-[#1A1A1A] tracking-[0.5px] text-[14px] font-[400] hover:text-[#4383FF] underline-offset-1 cursor-pointer'
                }
                href="https://portal.tunduk.kg"
              >
                {dict?.home?.links?.four?.link}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
