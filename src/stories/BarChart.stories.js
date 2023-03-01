import { useState } from "react"
import { BarChart } from "../charts"


export default {
    title: "Bar Chart",
    component: BarChart,
    args: {
        data: [],
        config: {}
    }
}

const config = {
    x: d => d.letter,
    y: d => d.frequency,
    yFormat: ".0%",
    yLabel: "↑ Frequency",
    height: 500,
    color: "steelblue",
    duration: 750 // slow transition for demonstration
   }

const Template = args => <BarChart {...args} />

const dd = [{letter: "A", frequency: 0.08167},{letter: "B", frequency: 0.01492},{letter: "C", frequency: 0.01292}]
export const SimpleGraph = Template.bind({})
SimpleGraph.args = {
    data: dd,
    config: config
}

export const WithoutGridLines = Template.bind({})
WithoutGridLines.args = {
    data: [{subject: "Maths", score: Math.random()*100},{subject: "Physics", score: Math.random()*100},{subject: "Chemistry", score: Math.random()*100}],
    config: {
        x: d => d.subject,
        y: d => d.score,
        yFormat: ".0%",
        yLabel: "↑ Frequency",
        // yDomain: [0,100],
        height: 500,
        color: "steelblue",
        duration: 750, // slow transition for demonstration
        isGridVisible: false
       }
}

export const WithoutXYAndGridLines = Template.bind({})
WithoutXYAndGridLines.args = {
    data: [{subject: "Maths", score: Math.random()*100},{subject: "Physics", score: Math.random()*100},{subject: "Chemistry", score: Math.random()*100}],
    config: {
        x: d => d.subject,
        y: d => d.score,
        yFormat: ".0%",
        yLabel: "↑ Frequency",
        // yDomain: [0,100],
        height: 500,
        color: "steelblue",
        duration: 750, // slow transition for demonstration
        isGridVisible: false,
        isXaxisVisible: false,
        isYaxisVisible : false,
       }
}

export const UpdatingChart = args => {
    let d = [{letter: "A",frequency: 0.08167}, {letter: "B",frequency: 0.18167}, {letter: "C",frequency: 0.38167}];
    const [data, updateData] = useState(d);
    setTimeout(() => {
        updateData([{letter: "A",frequency: Math.random()}, {letter: "B",frequency: Math.random()}, {letter: "C",frequency: Math.random()}])
      }, 5000)
    return(
        <>
                <BarChart data={data} config={config}/> 
        </>
    )
    
}

export const RandomChart = args => {
    let d = [{letter: "A",frequency: 0.08167}, {letter: "B",frequency: 0.18167}, {letter: "C",frequency: 0.38167}];
    const [data, updateData] = useState(d);
    setTimeout(() => {
        let temp = [];
        for(let i = 0; i < Math.trunc(Math.random()*10 + 10); i++) {
            temp.push({letter: i,frequency: Math.random()})
        }
        updateData(temp)
      }, 2000)
    return(
        <>
                <BarChart data={data} config={config}/> 
        </>
    )
    
}




