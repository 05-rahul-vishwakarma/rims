import { useEffect, useState } from 'react'
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { TiMinus } from "react-icons/ti";
import { BiSolidAdjustAlt } from "react-icons/bi";
// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdArrowDropright } from "react-icons/io";


function Header() {

    //----------------------------------- desktop header navbar -------------------------------------// 
    const menuItems = [
        { title: 'About Us', key: 'about', links: ['An Introduction', 'Director', 'Administration'] },
        { title: 'Academics', key: 'academics', links: ['Programs', 'Departments', 'Faculty'] },
        { title: 'Patient & Facilities', key: 'patient', links: ['Services', 'Facilities', 'Appointments'] },
        { title: 'Cells & Documents', key: 'cells', links: ['Committees', 'Reports', 'Policies'] },
        { title: 'Notices & Results', key: 'notices', links: ['Announcements', 'Results', 'Circulars'] },
        { title: 'Media', key: 'media', links: ['Gallery', 'News', 'Events'] },
        { title: 'Contact', key: 'contact', links: ['Get in Touch', 'Locations', 'Support'] },
    ];

    const [openDropdown, setOpenDropdown] = useState(null);

    const handleMouseEnter = (dropdown) => {
        setOpenDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };


    //-------------------spring effect animation or also fixed the sticky header-------------------- //
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 40) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    console.log(isSticky);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);















    // ------------------------------- end the code of desktop header ---------------------------------//


    // -------------------------------- mobile menus ---------------------------------------------------- //
    const [openIndex, setOpenIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const sections = [
        {
            title: 'About us',
            items: ['An Introduction', 'Director', 'Administration', 'University Vice-Chancellor']
        },
        {
            title: 'Academics',
            items: ['Departments', 'Faculty', 'Admission Info', 'Infrastructure']
        },
        {
            title: 'Hospital',
            items: ['Daily OPD', 'Super-speciality Clinic', 'ABHA-eHospital Self Registration', 'Medical Facilities']

        },
        {
            title: 'patient & Facilities',
            items: ['Patient Infromation', 'Outdoor Patients `OPD` ', 'Emergency Services', 'Online Registration System']
        },
        {
            title: "Cells & Documents",
            items: ['Mandatory Disclosure - MCI ', 'Annual Hospital Statistical Report', 'National Institutional Ranking Framework']
        }
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleContent = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // ---------------------------------------------- end the section --------------------------------------------- //


    // const [isSticky, setIsSticky] = useState(false);
    // const [bounce, setBounce] = useState(false);

    // const handleScroll = () => {
    //     console.log("yeah working");
    //     if (window.scrollY > 40) {
    //         setIsSticky(true);
    //         setBounce(true);
    //     } else {
    //         setIsSticky(false);
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // useEffect(() => {
    //     if (bounce) {
    //         const timer = setTimeout(() => setBounce(false), 500);
    //         return () => clearTimeout(timer);
    //     }
    // }, [bounce]);


    return (
        <header className='w-[100%]'>

            <section className='grid place-items-center lg:flex lg:justify-between lg:px-[4rem]  bg-[#f8f8f8]   lg:place-items-center py-2 gap-2 ' >

                <div className='lg:flex gap-[2rem]  ' >
                    <span className='flex items-center gap-2  ' >
                        <IoIosCall className='text-[#4343ceda] ' />
                        <p className='text-sm ' >+91 950-349-1533</p>
                    </span>

                    <span className='flex items-center gap-2 ' >
                        <IoMdMail className='text-[#4343ceda]' />
                        <p className='text-sm ' >rimsranchi@gmail.com</p>
                    </span>
                </div>

                <div className='lg:flex '>
                    <div className='flex items-center   gap-1.5 ' >
                        <span style={{ border: "1px solid #4368ce49 " }} className=' bg-white text-[grey] capitalize py-1 px-2 text-[.7rem] font-[500] rounded-[4px]  ' >skip to main content</span>
                        <span style={{ border: "1px solid #4368ce49 " }} className=' bg-white text-[grey] capitalize py-1 px-2 text-[.7rem] font-[500] rounded-[4px]  ' >Sitemap</span>
                        <span style={{ border: "1px solid #4368ce49 " }} className=' bg-white text-[grey] capitalize py-1 px-2 text-[.7rem] font-[500] rounded-[4px]  ' >Screen Reader</span>
                        <span style={{ border: "1px solid #4368ce49 " }} className=' bg-white text-[grey] capitalize py-[.4rem] px-2 text-[.7rem] font-[500] rounded-[4px]  ' > <TiMinus className='font-semibold ' /> </span>
                    </div>

                    <div className='flex gap-1.5 items-center ml-2 justify-center ' >
                        <span style={{ border: "1px solid #4368ce49 " }} className='bg-[white] text-[grey] px-2 rounded-[4px] ' >A</span>
                        <span style={{ border: "1px solid #4368ce49 " }} className='bg-[white] text-[grey] px-2 rounded-[4px] ' >+</span>
                        <span style={{ border: "1px solid #4368ce49 " }} className='bg-[white] text-[grey] px-1.5 rounded-[4px] flex justify-center items-center w-[30px] h-[26px] ' > <BiSolidAdjustAlt /> </span>
                    </div>
                </div>

            </section>

            <section className='p-2 lg:flex justify-between items-center px-[2rem] ' >
                <div className='grid place-items-center lg:flex  ' >
                    <div className='flex justify-center ' >
                        <img src="/logo.png" alt="" className='w-[95%] ' />
                    </div>
                    <div className='text-center lg:text-start lg:ml-[1rem]  ' >
                        <h2 className='font-[900]  lg:font-[17px] text-[#ff0000] ' >राजेन्द्र आयुर्विज्ञान संस्थान, रांची </h2>
                        <h2 className='font-black  text-[#ff0000] lg:font-[2rem] ' > Rajendra Institute of Medical Sciences,Ranchi </h2>
                        <p className='text-[#777171] font-[600] text-[13px] lg:font-[15px] ' >An Autonomus Institute under the Govt. of Jharkhand</p>
                    </div>
                </div>

                <div className='flex justify-center  ' >
                    <center>
                        <ul>
                            <li className='inline-block w-[120px] leading-[30px] pl-[5px] pr-[5px] text-[.8rem] bg-[#3838d19d] rounded-md text-white  m-2 hover:bg-[#3838d1f3] '>  <a href="#" className="text-gray font-[500]  py-2 ">Departments</a></li>
                            <li className='inline-block w-[120px] leading-[30px] pl-[5px] pr-[5px] text-[.8rem] bg-[#3838d19d] rounded-md text-white  m-2 hover:bg-[#3838d1f3] ' > <a href="#" className="text-gray font-[500]  py-2 ">Doctors</a></li>
                            <li className='inline-block w-[120px] leading-[30px] pl-[5px] pr-[5px] text-[.8rem] bg-[#3838d19d] rounded-md text-white  m-2 hover:bg-[#3838d1f3] ' > <a href="#" className="text-gray font-[500]  py-2 ">Speciallties</a></li>
                            <li className='inline-block w-[120px] leading-[30px] pl-[5px] pr-[5px] text-[.8rem] bg-[#3838d19d] rounded-md text-white  m-2 hover:bg-[#3838d1f3] ' > <a href="#" className="text-gray font-[500]  py-2 ">Patients</a></li>
                            <li className='inline-block w-[120px] leading-[30px] pl-[5px] pr-[5px] text-[.8rem] bg-[#3838d19d] rounded-md text-white  m-2 hover:bg-[#3838d1f3] ' > <a href="#" className="text-gray font-[500]  py-2 ">central Libraray</a></li>
                        </ul>
                    </center>
                </div>
            </section>

            {
                isSticky ?


                    <motion.section
                        initial={{ height: 0 }}
                        animate={{ height: "6vh" }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className=" bg-[#3838d1d8] text-[white] lg:flex items-center justify-center hidden md:block z-[2] fixed top-0  w-full"
                    >
                        {menuItems.map((item) => (
                            <div
                                key={item.key}
                                className="relative flex items-center h-full py-1 rounded-md text-[.9rem] z-10"
                                onMouseEnter={() => handleMouseEnter(item.key)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button
                                    className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 text-sm font-medium hover:bg-[#ffffff56] hover:text-[white] focus:outline-none"
                                >
                                    {item.title}
                                    <svg
                                        className="-mr-1 ml-2 h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                {openDropdown === item.key && (
                                    <div className="origin-top-right absolute top-[102%] w-56 rounded-md shadow-lg bg-[#ffffffd8] p-2 ring-1 ring-black ring-opacity-5">
                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            {item.links.map((link, index) => (
                                                <a key={index} href="#" className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-[#3838d1bb] hover:text-[white] " role="menuitem">
                                                    {link}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.section>

                    :
                    <section
                        className="min-h-[6vh] bg-[#3838d19d] lg:flex items-center justify-center hidden md:block z-[2]   w-full"
                    >
                        {menuItems.map((item) => (
                            <div
                                key={item.key}
                                className="relative flex items-center h-full py-1 rounded-md text-[.9rem] z-10"
                                onMouseEnter={() => handleMouseEnter(item.key)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button
                                    className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 text-sm font-medium hover:bg-[#ffffff56] hover:text-[white] focus:outline-none"
                                >
                                    {item.title}
                                    <svg
                                        className="-mr-1 ml-2 h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                {openDropdown === item.key && (
                                    <div className="origin-top-right absolute top-[105%] w-56 rounded-md shadow-lg bg-[#ffffffd8] p-2 ring-1 ring-black ring-opacity-5">
                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            {item.links.map((link, index) => (
                                                <a key={index} href="#" className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-[#3838d1bb] hover:text-[white] " role="menuitem">
                                                    {link}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </section>
            }

            <motion.section
                initial={{ height: 0 }}
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="min-h-[4vh] overflow-hidden bg-[#4343ceda] items-center justify-center lg:hidden text-[white] pb-[1rem] ">
                <div className='py-1 pr-2 flex justify-end ' >
                    <button onClick={toggleDropdown} ><RiMenu3Fill /></button>
                </div>

                {
                    isOpen &&
                    <section>
                        {sections.map((section, index) => (
                            <div
                                key={index}
                                style={{ borderBottom: "1px solid " }}
                                className='w-[96%] mr-auto ml-auto   '
                            >
                                <span
                                    onClick={() => toggleContent(index)}
                                    className='flex items-center cursor-pointer'
                                >
                                    <h4 className='text-[.9rem] font-[500]'>{section.title}</h4>
                                    <IoMdArrowDropright className='text-xl mt-1' />
                                </span>

                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: openIndex === index ? 'auto' : 0 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    className='overflow-hidden'
                                >
                                    {section.items.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                            style={{ borderBottom: "1px solid white" }}
                                            className='text-sm font-[500] mt-1 w-[95%] mr-auto ml-auto pl-0.5 pb-2'
                                        >
                                            <p className='hover:text-[#010155]'>{item}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        ))}
                    </section>
                }

            </motion.section>

        </header>
    )
}

export default Header