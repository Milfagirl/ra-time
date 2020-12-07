import './App.css';

import React from 'react';

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

const LogDateTime = function DateTimePretty(Component) {
    return class extends React.Component {
        render() {
            let { date } = this.props;
            const newdate = new Date(date);
            let time = newdate.getHours() * 60 + newdate.getMinutes()
            if (time < 60) time = '12 минут назад';
            if (time > 60 && time < 1140) time = '5 часов назад';
            if (time >= 1140) time = 'X дней назад';
            date = time;
            const props = {
                date: date,
            }
            console.log(this.props.setState)
            return <Component {...this.props} {...props} />
        }
    }
}(DateTime)

// const LogDateTime = DateTimePretty(DateTime)

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title={props.date}></iframe>
            <LogDateTime date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} key={props.date} />);
}

export default function App() {
    const list = [
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2019-07-31 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2020-12-08 00:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2020-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2020-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2020-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2019-12-02 05:24:00'
        },
    ];

    return (
        <VideoList list={list} />
    );
}
