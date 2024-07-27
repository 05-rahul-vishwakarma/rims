import { FaLongArrowAltRight } from "react-icons/fa";
import Card from "../../components/cards/Card";
import { FaGift } from "react-icons/fa6";
import { AiFillSound } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import CircleCard from "../../components/cards/CircleCard";
import Data from '../../components/carousel/Data'
import QuickLinkCard from "../../components/QuickLinkCard";
import InfoCard from "../../components/cards/InfoCard";
import Imagecard from "../../components/cards/Imagecard";
import DemoCarousel from "../../components/carousel/DemoCarousel";
import Carousel from "../../components/carousel/Carousel";
function HomePage() {

  const data = [
    {
      icon: <FaGift />,
      title: "Current/ForthComing Events/Greetings",
      image: "/firstCard.png",
      color: '#3838d1f3',
      content: "",
      width: "45%",
    },
    {
      icon: <AiFillSound />,
      title: "e-News",
      image: "/secondCard.png",
      color: '#007322',
      content: "",
      width: "22%",
    },
    {
      icon: <BsPersonLinesFill />,
      title: "Director and CEO,RIMS",
      image: "/thirdCard.png",
      color: '#c10000',
      content: "Director & CEO , Rajendra Institute of Medical sciences, ranchi,jharkhand chairman,united nation affair (world Kabaddi federation)",
      width: "22%",
    },
  ]

  const circleCardData = [
    {
      image: "/circleCardFirst.png",
      content: " िम्स में जन्म प्रमाण पत्र के लिए आवेदन फॉर्म",
    },
    {
      image: "/circleCardSecond.png",
      content: "िम्स में मृत्यु प्रमाण पत्र के लिए आवेदन फॉर्म",
    },
    {
      image: "/circleCardThird.png",
      content: "ििम्स में  LIC/ Mediclaim/Treatment Chart/Death Summary प्रमाण पत्र के लिए आवेदन फॉर्",
    },
    {
      image: "/circleCardFour.png",
      content: " िम्स में जन्म और मृत्यु प्रमाण पत्र में सुधार के लिए आवेदन फॉर्म",
    }
  ]

  const quickLinksData = [
    {
      image: "/quickLinks/item1.png",
      title: "Online Registration"
    },
    {
      image: "/quickLinks/item2.png",
      title: "OPD DUTY Roster "
    },
    {
      image: "/quickLinks/item3.png",
      title: "Super Speciality Clinic"
    },
    {
      image: "/quickLinks/item4.png",
      title: "Mandatory Disclosure"
    },
    {
      image: "/quickLinks/item5.png",
      title: "Amarnath yatra 2024"
    },
    {
      image: "/quickLinks/item6.png",
      title: "Annual Hospital Statistics"
    },
    {
      image: "/quickLinks/item7.png",
      title: "Multidisciplinary Research Unit"
    },
    {
      image: "/quickLinks/item8.png",
      title: "Helpline Nos."
    },
    {
      image: "/quickLinks/item9.png",
      title: "RTI"
    },
  ]

  const rimsInfo = [
    {
      headerColor: "#6e65f5fd",
      title: "OFFICE ORDERS/RESULTS"
    },
    {
      headerColor: "#016363de",
      title: "TENDERS"
    },
    {
      headerColor: "#9b4514de",
      title: "RECRUITMENTS"
    }
  ]

  const otherInfoData = [
    {
      image: "/otherLinks/item1.png"
    },
    {
      image: "/otherLinks/item2.png"
    },
    {
      image: "/otherLinks/item3.png"
    },
    {
      image: "/otherLinks/item4.png"
    },
  ]

  return (
    <section className='min-h-full pb-[4rem] ' >

      <section>
        <div className='overflow-hidden relative ' >
          <div className="z-[-1] " >
            <DemoCarousel />
          </div>

          <div className='bg-[#000000f1] absolute bottom-0 w-full text-white  flex items-center py-1 ' >

            <span className='flex  lg:pl-[6rem] items-center font-[500] text-xs p-1 ' >
              <p>RIMS PATIENT&rsquo;S STATISTICS</p>
              <FaLongArrowAltRight />
            </span>

            <span className='ml-4' >
              <h1 className='text-[#cc0505f6] font-[500] lg:text-sm text-xs ' >
                Date:25-07-2024 | OPD : 2196 | ADMISSION IPD : 293 | EMERGENCY : 266 |
              </h1>
            </span>

          </div>
        </div>
      </section>

      <section className="w-[90%] ml-auto mr-auto mt-4 lg:flex justify-around " >
        {
          data.map((item, index) => (
            <Card content={item} key={index} />
          ))
        }
      </section>

      <section className="w-[92%] ml-auto mr-auto mt-4 lg:flex justify-around " >
        {
          circleCardData.map((item, i) => (
            <CircleCard content={item} key={i} />
          ))
        }
      </section>

      <section className="bg-[url('bg-2.png')] h-min pb-[2rem] lg:flex justify-center " >
        <div className="lg:w-[45%] w-full mt-8  " >
          <div className="flex flex-col items-center gap-3 " >
            <h1 className="text-2xl text-[#010155] font-[900] text-center " >Photo Gallery</h1>
            <img src="/underLineStyle.png" alt="" />
          </div>

          <div className="w-[90%] mr-auto ml-auto relative " >
            <Carousel images={Data} />
          </div>

        </div>

        <div className="lg:w-[45%] mt-8  ">
          <div className="flex flex-col items-center gap-3  " >
            <h1 className="text-2xl text-[#010155] font-[900] text-center " >RIMS Quick Links</h1>
            <img src="/underLineStyle.png" alt="" />
          </div>

          <div className="grid grid-cols-2 place-items-center lg:grid-cols-3  grid-rows-1 gap-6 mt-2 " >
            {
              quickLinksData.map((item, i) => (
                <QuickLinkCard key={i} content={item} />
              ))
            }
          </div>




        </div>
      </section>

      <section>
        <div className="flex flex-col items-center gap-3 " >
          <h1 className="text-2xl text-[#010155] font-[900] text-center " >RIMS Info</h1>
          <img src="/underLineStyle.png" alt="" />
        </div>


        <div className="lg:flex w-[95%] mr-auto ml-auto items-center " >
          {
            rimsInfo.map((item, i) => (
              <InfoCard content={item} key={i} />
            ))
          }
        </div>

      </section>

      <section className="mt-[2rem] " >
        <div className="flex flex-col items-center gap-3 " >
          <h1 className="text-2xl text-[#010155] font-[900] text-center " >Other Important Links</h1>
          <img src="/underLineStyle.png" alt="" />
        </div>


        <div className="grid grid-cols-3 grid-rows-1 gap-4 place-items-center cursor-pointer lg:grid-cols-4 mt-4 w-[95%] mr-auto ml-auto items-center " >
          {
            otherInfoData.map((item, i) => (
              <Imagecard key={i} content={item} />
            ))
          }
        </div>

      </section>

    </section>
  )
}

export default HomePage
