import React, { useState, useEffect } from "react";
import  ReactDOM from 'react-dom';
import './index.css'
function GamePage(){
    const [timeLeft, setTimeLeft] = useState(100)
    const [point, setPoint] = useState(0)
    const [isFirst, setIsFirst] = useState(true)

    const word = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    
    var splitWords = (word)=>{
        let words = [];
        for(let i = 0 ; i < word.length; i ++){
            words[i] = word[i]
        }
        return words
    }
    const alphabet = splitWords(word)

    const overlay = 
        <div className="overlay d-flex justify-content-center">
            <div className="content text-center">
                <div className="overlay-title ">
                        Time out!
                </div>
                <div>
                    Your score is : {point}
                </div>
                <div>
                    <b>Please Refresh your browser to play again!</b> 
                </div>
            </div>
        </div>


    useEffect(()=>{
        if(timeLeft == 0){
            document.getElementById("input-text").disabled = true
            
            ReactDOM.render(overlay, document.getElementById("ov"))
            return
        }
        if(!isFirst){
            setTimeout(()=>{
                setTimeLeft(timeLeft - 1)
            }, 1000)
        }
    },[isFirst, timeLeft, overlay])

    const handleInput = (e)=>{
        if(isFirst){
            setIsFirst(false)
        }
        let input = e.target.value
        for(let i = 0 ; i < alphabet.length; i ++){
            let span = document.getElementById(i.toString())
            span.className = ""
        }
        let count = 0
        for(let i = 0 ; i < input.length; i ++){
            let span = document.getElementById(i.toString())
            span.className = ""
            if (input[i] == alphabet[i]){
                span.className += 'green'
                count += 1
            }else{
                span.className += 'red'
            }
        }
        setPoint(count)
    }


    return( 
        <div>
            <div id="ov"></div>
            <div className="container">
                <div className="text">
                    {alphabet.map((alpha, index)=>{
                        return (
                            <span key={index} id={index}>
                                {alpha == " " ? '\u00A0' : alpha} 
                            </span>
                        )
                    })}
                </div>
            </div>

            <div className="container">
                <textarea id="input-text" onInput={e => handleInput(e)}></textarea>
            </div>
            
            <div className="container bottom-container d-flex">
                <div>
                    Time Left : {timeLeft}
                </div>
                <div className="points">
                    Points : {point}
                </div>
            </div>
            
        </div>
    )
}

export default GamePage;