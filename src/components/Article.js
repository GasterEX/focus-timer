import React from "react";
import { useTimer } from "react-timer-hook";
import { useState } from "react";
import {Title, Description , MainButton , Timer ,LapButton, SkipButton,DoingStates,AverageTime,LapLog} from "./index";
let laps=[25]
let LapTimes =[];
let currentMinute = 0;

export default function Article (props) {
    //Timerのプログラム(react-timer-hook)
    const time = new Date();
    time.setSeconds(time.getSeconds() + props.time); // 25 minutes timer
    const expiryTimestamp=time;
    const {seconds,minutes,pause,resume,restart} = useTimer({
        autoStart:false,
        expiryTimestamp,
        onExpire: () => console.warn("onExpire called"),
    });

    // ボタンの状態(useState)
    const [ButtonState,setButtonState] = useState("START");
    //ボタンのステータスの変更とタイマーの変更
    const ButtonStateChange = () => {
        if(ButtonState =="START"){
            //stop
            setButtonState("STOP");
            resume();
        } else {
            //start
            setButtonState("START");
            pause();
        }
    }

    // 勉強中か休憩中かの状態(useState)
    const [doingState,setdoingState] = useState("study");
    //skipボタンが押された時の関数
    const doingStateChange = () => {
        //変数初期化
        laps=[25]
        LapTimes =[];
        currentMinute = 0;  
        setAveLapTime(0);
        //モードの変更
        if(doingState=="study"){
            setdoingState("rest");
            const time = new Date();
            time.setSeconds(time.getSeconds() + 300);//5分
            restart(time)
        } else {
            setdoingState("study");
            const time = new Date();
            time.setSeconds(time.getSeconds() + 1500);//25分
            restart(time)
        }
    }

    const [AveLapTime,setAveLapTime] = useState(0);
    //lapのプログラム
    const lap = () => {
            //現在の時間を小数第一位で四捨五入し取得
            currentMinute = Math.round((minutes + (seconds/60)) * 100)/100;
            //lapに今の時間をpush
            laps.push(currentMinute);
            //一つ前の時間と今の時間を引いてラップタイムを求める。
            let LapTime = laps[laps.length-2]-laps[laps.length-1];
            //ラップタイムズにラップタイムをプッシュ
            LapTimes.push(LapTime);
            //ラップタイムズの平均値を求める
            let AverageLapTime = ArrayAverage(LapTimes);
            //ラップタイムズの平均値を求めてそれをステータスに代入。
            setAveLapTime(AverageLapTime);
    }

    //配列の平均値を求める関数
    function ArrayAverage(array){
        let sum =0;
        for(const value of array){
            sum+=value;
        }
        let average = Math.round(sum/array.length *10)/10;
        return average
    }
    
    
    return (
        <div>
            <center>
            <Title title={props.title} />
            <Description description={props.description} />
            <DoingStates doingState={doingState}/>
            <Timer seconds = {seconds} minutes = {minutes} />
            <AverageTime AveLapTime={AveLapTime} currentMinute={currentMinute}/>
            <MainButton mainButton = {ButtonState} onClick={ButtonStateChange}  />
            <LapButton lap={props.lap} onClick={lap}/>
            <SkipButton skip={props.skip} doingState = {doingState} onClick={doingStateChange} />
            
            {/* <LapLog LapLog={laps}/> */}
            </center>
        </div>
    )
}