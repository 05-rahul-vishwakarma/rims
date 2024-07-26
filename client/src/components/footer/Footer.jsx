import FooterNavigation from "./FooterNavigation"

function Footer() {

    const navigationDate = [
        {
            link: "copyright Policies"
        },
        {
            link: "Terms & Conditions"
        },
        {
            link: "Disclaimer"
        },
        {
            link: "Hyperlink Policy"
        },
        {
            link: "Privacy Policy"
        },
        {
            link: "Old Website"
        }
    ]

    return (
        <footer className="bg-[url('/bg_green.jpg')] flex justify-center flex-col  " >
            <section className="w-[95%]  mt-3 lg:grid grid-cols-4 grid-rows-1 gap-4 place-items-center  p-[1rem] " >

                <div className="" >
                    <div>
                        <h1 className="lg:text-xl text-sm font-[900] text-white   " >OPD Registration</h1>
                        <p className="border-2  mt-2 w-[4rem] rounded-xl border-[yellow] " ></p>
                    </div>
                    <div className="mt-4 text-sm text-[#ffffffad] font-[600] " >
                        <p>
                            ओपीडी पंजीकरण काउंटर में स्कैन और शेयर प्रणाली शुरू की गई है, जहां आप ABHA नंबर के माध्यम से या ड्रिफ़केस ऐप (प्लेस्टोर के माध्यम से इंस्टॉल किया जा सकता है) के माध्यम से स्कैन कर सकते हैं और पंजीकरण टोकन नंबर प्राप्त कर सकते हैं. कतार में खड़े होने की आवश्यकता नहीं है, पंजीकरण काउंटर पर केवल अपना टोकन नंबर और विभाग बताएं और हार्ड कॉपी प्राप्त करें।
                        </p>
                    </div>
                </div>

                <div className="flex justify-center mt-[2em] " >
                    <img src="/footer/abha_scanner.png" alt="" />
                </div>

                <div className="mt-[2rem] " >
                    <div>
                        <h1 className="lg:text-xl text-sm font-[900] text-white   " >Navigation</h1>
                        <p className="border-2  mt-2 w-[2rem] rounded-xl border-[yellow]" ></p>
                    </div>

                    {
                        navigationDate.map((item, i) => (
                            <FooterNavigation key={i} content={item} />
                        ))
                    }
                </div>

                <div className="mt-[2rem] " >
                    <div>
                        <h1 className="lg:text-xl text-sm font-[900] text-white   " >Contact</h1>
                        <p className="border-2  mt-2 w-[2rem] rounded-xl border-[yellow]" ></p>
                    </div>

                    {
                        navigationDate.map((item, i) => (
                            <FooterNavigation key={i} content={item} />
                        ))
                    }
                </div>

            </section>

            <div style={{ borderTop: "1px solid white" }} className="mt-[2rem]  " >
                <p className=" text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center text-white ">
                    © 1950-2024 Rajendra Institute of Medical Sciences. All Rights Reserved. | Technology Partner: COMPUTER Ed.
                </p>
                <div className="flex justify-end overflow-hidden px-5 pb-5">
                    <button
                        className="bg-[#010155] p-2 rounded-full "
                    >
                        <div className="text-[#F9FAFA]" data-icon="ArrowUp" data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path
                                    d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"
                                ></path>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>

        </footer>
    )
}

export default Footer