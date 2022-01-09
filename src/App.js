import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const Questions = [
  `Expressing my emotions with words is not a problem for me.`,
  `I often find it difficult to see things from another person’s viewpoint.`,
  `On the whole, I’m a highly motivated person.`,
  `I usually find it difficult to regulate my emotions.`,
  `I generally don’t find life enjoyable.`,
  `I can deal effectively with people.`,
  `I tend to change my mind frequently.`,
  `Many times, I can’t figure out what emotion I'm feeling.`,
  `I feel that I have a number of good qualities.`,
  `I often find it difficult to stand up for my rights.`,
  `I’m usually able to influence the way other people feel.`,
  `On the whole, I have a gloomy perspective on most things.`,
  `Those close to me often complain that I don’t treat them right.`,
  `I often find it difficult to adjust my life according to the circumstances.`,
  `On the whole, I’m able to deal with stress.`,
  `I often find it difficult to show my affection to those close to me.`,
  `I’m normally able to “get into someone’s shoes” and experience their emotions.`,
  `I normally find it difficult to keep myself motivated.`,
  `I’m usually able to find ways to control my emotions when I want to.`,
  `On the whole, I’m pleased with my life.`,
  `I would describe myself as a good negotiator.`,
  `I tend to get involved in things I later wish I could get out of.`,
  `I often pause and think about my feelings.`,
  `I believe I’m full of personal strengths.`,
  `I tend to “back down” even if I know I’m right.`,
  `I don’t seem to have any power at all over other people’s feelings.`,
  `I generally believe that things will work out fine in my life.`,
  `I find it difficult to bond well even with those close to me.`,
  `Generally, I’m able to adapt to new environments.`,
  `Others admire me for being relaxed.`,
]

const NRLIST = {
  1: "N",
  2: "R",
  3: "N",
  4: "R",
  5: "R",
  6: "N",
  7: "R",
  8: "R",
  9: "N",
  10: "R",
  11: "N",
  12: "R",
  13: "R",
  14: "R",
  15: "N",
  16: "N",
  17: "N",
  18: "R",
  19: "N",
  20: "N",
  21: "N",
  22: "R",
  23: "N",
  24: "N",
  25: "R",
  26: "R",
  27: "N",
  28: "R",
  29: "N",
  30: "N",
}

const ReverseScore = {
  1: 7,
  2: 6,
  3: 5,
  4: 4,
  5: 3,
  6: 2,
  7: 1
}


const App = () => {
  let initialAnswers = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    21: 0,
    22: 0,
    23: 0,
    24: 0,
    25: 0,
    26: 0,
    27: 0,
    28: 0,
    29: 0,
    30: 0,
  }

  const calculate = () => {
    var scores = []
    
    Object.keys(answers).map((v) => {
      const val = answers[v]
      const correctVal = NRLIST[v] === "N" ? val : ReverseScore[val]  
      scores.push(correctVal)
      return 0
    })

    const result = scores.reduce((a,v,i)=>(a*i+v)/(i+1))
    setResult(<><h1>Your score is {result.toFixed(2)}</h1></>)

  }
  
  const [answers, setAnswers] = useState(initialAnswers)
  const [result, setResult] = useState(<></>)
  
  const setAnswer = async (qNo, answer) => {
    let newAnswers = {}
    newAnswers[qNo] = answer
    setAnswers({...answers, ...newAnswers})
  }
  
  return (
      <div className="container">
        
        <div className="row my-4">
          <div className="col">
            <div className="mx-auto" style={{width: "200px"}} >
              <h1>TEIQue-SF</h1>
            </div>
          </div>
        </div>

        <div className="row my-4">
          <div className="col">
            <div className="mx-auto" style={{width: "80%"}} >
              <p>Instructions: Please answer each statement below by putting a circle around the number that best reflects your degree of agreement or disagreement with that statement.</p>
              <p>Do not think too long about the exact meaning of the statements. Work quickly and try to answer as accurately as possible.</p> 
              <p>There are no right or wrong answers. There are seven possible responses to each statement ranging from <strong>"Completely Disagree" (number 1)</strong> to <strong>"Completely Agree" (number 7)</strong>.</p>
            </div>
          </div>
        </div>

        {Questions.map((v, i) => {
          return <>
            <div className="row mx-auto">
              <div className="col">
                <h4>Q{i+1}. {v}</h4>
                <div className="row py-4">
                  {[1, 2, 3, 4, 5, 6, 7].map((ans, idx) => <>
                    {
                      answers[i+1] !== 0 && answers[i+1] === ans 
                      ? 
                      <div className="col p-2"><button onClick={() => {setAnswer(i+1, ans)}} className={"btn btn-primary w-100 px-2"}><strong>{ans}</strong></button></div>  
                      :
                      <div className="col p-2"><button onClick={() => {setAnswer(i+1, ans)}} className={"btn btn-outline-primary w-100 px-2"}><strong>{ans}</strong></button></div>
                    }
                  </>)}
                </div>
              </div>
            </div>
          </>
        })}

        <div className="row my-4">
          <div className="col">
            <center><button onClick={() => {calculate()}} className="btn btn-success btn-lg">Calculate</button></center>
          </div>
        </div>

        <div className="row my-4">
          <div className="col">
            <center>{result}</center>
            <div className="mx-auto" style={{width: "60%"}} >
              <p>Global Averages</p>
              <p>Men: 5.05</p> 
              <p>Women: 4.94</p>
            </div>
          </div>
        </div>
      </div>
    )
  };

export default App;
