import { useState } from "react";

const Welcome = () => {

    return (

            <div className="justify-center 
                            items-center">

                <div className="flex 
                                items-left 
                                justify-center 
                                md:p-12 
                                py-12 
                                px-4">
                <div>

                    <h1 className="text-2xl 
                                   sm:text-5xl 
                                   text-white  
                                   py-4">
                                       
                            The first EVM-compatible<br />meme coin on Solana.

                    </h1>

                            <p className="text-left 
                                          text-l 
                                          sm:text-m 
                                          text-white 
                                          mt-8 
                                          md:w-9/12 
                                          w-11/12 
                                          text-base">
                                
                                Sign up for the neonDOGE whitelist today.

                            </p>  
                    </div>
                </div>
            </div>
        )}

export default Welcome;
