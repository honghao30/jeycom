import styled from "styled-components";

const Today = styled.div`
    font-size:18px;
    text-align:center;
`

const TodayData = () => {
    const current = new Date();
    const date = ` ${current.getFullYear()}년 ${current.getMonth()+1} 월 ${current.getDate()} 일`;

    return(
        <Today>
            {date}
        </Today>
    );
};

export default TodayData;