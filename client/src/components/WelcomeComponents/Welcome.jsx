import { useState } from "react";

const Welcome = () => {

    return (

            <div className="justify-center 
                            items-center">

                <div className="flex 
                                items-center 
                                justify-center 
                                md:p-12 
                                py-12 
                                px-4">
                    <div>
                        <h1 className="text-xl 
                                    sm:text-xl 
                                    text-white  
                                    py-2
                                    text-center">                                       
                                Welcome to
                            <h2 className="text-5xl 
                                        sm:text-5xl 
                                        text-white  
                                        py-4
                                        text-gradient">                                       
                                zincswap
                            </h2>
                                <h3 className=" 
                                            text-white  
                                            py-2
                                            text-center">
                                built on Solana.               
                                </h3>
                        </h1>
                    </div>
                </div>
            </div>
        )}

export default Welcome;
