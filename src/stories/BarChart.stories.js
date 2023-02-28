import { BarChart } from "../charts"


export default {
    title: "Bar Chart",
    component: BarChart,
    args: {
        data: []
    }
}

const Template = args => <BarChart {...args} />

const dd = [{letter: "A", frequency: 0.08167},{letter: "B", frequency: 0.01492},{letter: "C", frequency: 0.01292}]
export const SimpleGraph = Template.bind({})
SimpleGraph.args = {
    data: dd,
}

export const DynamicChart = Template.bind({})
DynamicChart.args = {
    data: [{letter: "A", frequency: Math.random()},{letter: "B", frequency: Math.random()},{letter: "C", frequency: Math.random()}]
}




