import React, { useState } from 'react';

const Form = () => {
    
    const [address, setAddress, reset] = useState('');
    
    const handleSubmit = (e) => {
    
        e.preventDefault();
        
        console.log(`${address}`);
        setAddress("Thanks for signing up!");
        reset;

        }

    return(

    <form onSubmit = {handleSubmit}>        
            <div class="flex 
                        justify-center
                        py-12">
                    <div class="mb-3 xl:w-96">        
                            <input 
                                    type="text"
                                    class="form-control
                                           block
                                           w-full
                                           px-3
                                           py-1.5
                                           text-base
                                           font-normal
                                           text-gray-200
                                           bg-gray-800 bg-clip-padding
                                           border border-solid border-black
                                           rounded-l-lg
                                           transition ease-in-out
                                           m-0    
                                           focus:text-white 
                                           focus:bg-gray-800 
                                           focus:border-purple-600 
                                           focus:outline-none"    
                                           id="exampleFormControlInput1"
                                           placeholder="Your Wallet Address"
                                           onChange = {(e) => setAddress(e.target.value)}
                                           value = {address}>
                            </input>      
                        </div>
                                <button 
                                        button type = 'submit'
                                        class="bg-blue-600 
                                               hover:bg-blue-700 
                                               text-white 
                                               font-bold 
                                               px-2.5 
                                               mb-3
                                               rounded-r-lg 
                                               border border-solid border-black">
                                Submit
                                </button>                                
            </div>
    </form>
)}

export default Form;