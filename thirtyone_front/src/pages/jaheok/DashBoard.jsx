import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as BarTooltip, Legend as BarLegend } from 'recharts';

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const barData = [
  { name: 'Page A', 판매된떨이: 4000, 등록된떨이: 2400, amt: 2400 },
  { name: 'Page B', 판매된떨이: 3000, 등록된떨이: 1398, amt: 2210 },
  { name: 'Page C', 판매된떨이: 2000, 등록된떨이: 9800, amt: 2290 },
  { name: 'Page D', 판매된떨이: 2780, 등록된떨이: 3908, amt: 2000 },
  { name: 'Page E', 판매된떨이: 1890, 등록된떨이: 4800, amt: 2181 },
  { name: 'Page F', 판매된떨이: 2390, 등록된떨이: 3800, amt: 2500 },
  { name: 'Page G', 판매된떨이: 3490, 등록된떨이: 4300, amt: 2100 },
];

const COLORS = ['#ea2f2f', '#ff8181', '#ff4848', '#fb9a9a'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {(percent * 100).toFixed(0)}%
    </text>
  );
};

const data1 = [
  { name: 'DayNum', value: 32 },
  { name: 'DayIncome', value: 56000 },
  { name: 'MonthNum', value: 800 },
  { name: 'MonthIncome', value: 120000 },
];

const Background = styled.div`
  width: 100%;
  max-width: 376px;
  height: 100vh;
  background-color: #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  padding-bottom: 150px; /* Make space for the Navbar */
  padding-top: 90px;
`;

const BackIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  left: 20px;
`;

const PieBox = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 20px;
`;

const BarBox = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 20px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  width: 90%;
  height: 200px;
`;

const Card = styled.div`
  height: 80px;
  background-color: ${(props) => props.bgColor};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 16px;
  padding: 5px;
`;

const ChartTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-top: 30px;
  margin-bottom: 10px; /* Add more space below the title */
`;

const ChartTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
  margin-left: 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 376px;
  height: 60px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #d94844;
  text-align: center;
`;

const ComboBox = styled.select`
  font-size: 16px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const DashBoard = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getCardData = (name) => {
    const item = data1.find((d) => d.name === name);
    return item ? item.value : 'N/A';
  };

  return (
    <>
      <Background>
        <HeaderContainer>
          <BackIcon src="../assets/prev.svg" alt="Back" onClick={handleBackClick} />
          <HeaderTitle>판매 리포트</HeaderTitle>
        </HeaderContainer>
        <CardContainer>
          <Card bgColor="#e57373">
            오늘 판매한 떨이
            <div>{getCardData('DayNum')}개</div>
          </Card>
          <Card bgColor="#424242">
            오늘 떨이 판매 수입
            <div>{getCardData('DayIncome').toLocaleString()} 원</div>
          </Card>
          <Card bgColor="#e57373">
            한달 간 판매한 떨이
            <div>{getCardData('MonthNum')}개</div>
          </Card>
          <Card bgColor="#424242">
            한달 간 떨이 판매 수익
            <div>{getCardData('MonthIncome').toLocaleString()} 원</div>
          </Card>
        </CardContainer>
        <PieBox>
          <ChartTitle>상품별 판매 순위</ChartTitle>
          <ResponsiveContainer width="90%" height="90%">
            <PieChart width={400} height={400}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </PieBox>
        <BarBox>
          <ChartTitleContainer>
            <ChartTitle>주당 품목별 떨이 판매 추이</ChartTitle>
            <ComboBox value={selectedOption} onChange={handleOptionChange}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </ComboBox>
          </ChartTitleContainer>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={barData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <BarTooltip />
              <BarLegend verticalAlign="top" height={36} />
              <Bar dataKey="판매된떨이" stackId="a" fill="#d74545" />
              <Bar dataKey="등록된떨이" stackId="a" fill="#11447d" />
            </BarChart>
          </ResponsiveContainer>
        </BarBox>
      </Background>
    </> 
  );
};

export default DashBoard;
