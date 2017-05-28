import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {getWatchers} from '../../actions/watcher'
import  {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class ArticlePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.getWatchers({token: this.props.authToken.token, article_id: this.props.match.params.id});
    }
    render() {
        let data = [];
        for(let key in this.props.watchers)
            data.push({time: key, count: this.props.watchers[key].length});
        return (
            <div>
                <LineChart width={600} height={300} data={data}
                           margin={{top: 5, right: 30, left: 20, bottom: 5}}
                >
                    <XAxis dataKey="time"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="time" stroke="#8884d8" activeDot={{r: 8}}/>
                    <Line type="monotone" dataKey="count" stroke="#82ca9d" />
                </LineChart>
            </div>
        )
    }
}

export default connect((state)=>({
    articles: state.articles,
    authToken: state.authToken,
    watchers: state.watchers
}), {getWatchers })(ArticlePage);