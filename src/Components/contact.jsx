import React, { useState } from 'react'; 



function Contact(){
    const [copied, setCopied] = useState(false); 
    const emailAddress = "wintwar732006@gmail.com"; 

    function handleCopy(){
        navigator.clipboard.writeText(emailAddress); 
        setCopied(true); 
        setTimeout(() => setCopied(false), 2000);
    }; 

    

    return(
        <div className="max-w-[80%] gird grid-cols-1 md:grid-cols-2 gap-2">


            <div className="justify-center items-center flex flex-col w-[90%] mx-15 justify-center border border-black"> {/* start of first card*/}

             <div>
            <span>DIRECT CONTACT</span>
            <span>{emailAddress}</span>

            </div>

            <button type="button" onClick={handleCopy}>
                {copied ? (
                    <>
                    <svg
                    className = "w-4 h-4 text-emerald-400"
                    viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2"
                    strokeLinecap = "round"
                    strokeLinejoin = "round"
                    >
                        <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span className= " text-emerald-400">Copied</span>
                        </>
                ) : (
                    <>

                    <svg
                    className = "w-4 h-4 text-neutral-40"
                    viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2"
                    strokeLinecap = "round"
                    strokeLinejoin = "round"
                    >
                        <rect width="13" height ="13" x="9" y="9" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                        <span className="text-neutral-300 text-xs font-mono">Copy</span>

                    </>
                )}
            </button>


             <div className="flex flex-wrap max-w-[80%] my-4 mx-auto gap-3">

              <div className="flex gap-2 px-4 py-2 border border-gray-500/80 rounded-xl items-center justify-center w-fit font-bold font-mono text-[0.9rem] cursor-pointer hover:text-gray-700/80">
                <a href="https://www.linkedin.com/in/hsu-wint-war-htet-9a2ab941b?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank">LinkedIn</a>
                <img src="./src/assets/top-right.png" className="size-2"/>
              </div>

              <div className="flex gap-2 px-4 py-2 border border-gray-500/80 rounded-xl items-center justify-center w-fit font-bold font-mono text-[0.9rem] cursor-pointer hover:text-gray-700/80">
                <a href="https://www.facebook.com/profile.php?id=61579376662131&mibextid=wwXIfr&mibextid=wwXIfr" target="_blank">Facebook</a>
                <img src="./src/assets/top-right.png" className="size-2 hover:transition-rotate(45deg)"/>
              </div>

              <div className="flex gap-2 px-4 py-2 border border-gray-500/80 rounded-xl items-center justify-center w-fit font-bold font-mono text-[0.9rem] cursor-pointer hover:text-gray-700/80">
                <a href="https://t.me/itzMe_HwwH" target="_blank">Telegram</a>
                <img src="./src/assets/top-right.png" className="size-2 hover:transition-rotate(45deg)"/>
              </div>

              <div className="flex gap-2 px-4 py-2 border border-gray-500/80 rounded-xl items-center justify-center w-fit font-bold font-mono text-[0.9rem] cursor-pointer hover:text-gray-700/80">
                <a href="viber://chat?number=%2B959671020431" target="_blank">Viber</a>
                <img src="./src/assets/top-right.png" className="size-2 hover:transition-rotate(45deg)"/>
              </div>

              <div className="flex gap-2 px-4 py-2 border border-gray-500/80 rounded-xl items-center justify-center w-fit font-bold font-mono text-[0.9rem] cursor-pointer hover:text-gray-700/80">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=wintwar732006@gmail.com" target="_blank">Email</a>
                <img src="./src/assets/top-right.png" className="size-2 hover:transition-rotate(45deg)"/>
              </div>

              <div className="flex gap-2 px-4 py-2 border border-gray-500/80 rounded-xl items-center justify-center w-fit font-bold font-mono text-[0.9rem] cursor-pointer hover:text-gray-700/80">
                <a href="tel:+959755803598" target="_blank">Phone</a>
                <img src="./src/assets/top-right.png" className="size-2 hover:transition-rotate(45deg)"/>
              </div>

             </div>


            </div>   {/* end of first card */}

            <div className="border border-black h-">  {/*  start of input card*/}



            </div>   {/*  end of input card*/}

        </div>
    ); 
}

export default Contact