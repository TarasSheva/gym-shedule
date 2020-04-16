import React, {Component} from "react";
import './Layout.css';
import Start from "../../Components/Start/Start";
import Week from "../../Components/Start/Week/Week";
import Monday from "../../Components/Start/Week/train/Monday";
import Wednesday from "../../Components/Start/Week/train/WEDNESDAY";
import Friday from "../../Components/Start/Week/train/Friday";


class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            welcome: true,
            getStart: false,
             week: false,
            monday: false,
            wednesday: false,
            friday: false
        }
    }
    closeStart = () =>{
        this.setState({
            welcome: false,
            getStart: true
        })
    }
    monday = () => {
         this.setState({
            getStart: false,
            monday: true
        })
    }
    wednesday = () => {
        this.setState({
            getStart: false,
            wednesday: true
        })
    }
    friday = () => {
        this.setState({
            getStart: false,
            friday: true
        })
    }
    toBack = () => {
        this.setState({
            getStart: true,
            monday: false,
            wednesday: false,
            friday: false
        })
    }
    render() {
        return (
            <div className='Layout'>
                {this.state.welcome &&  <Start onClose={this.closeStart}/>}
                {this.state.getStart && <Week
                    openMon={this.monday}
                    openWed={this.wednesday}
                    openFri={this.friday}
                />}

                {this.state.monday && <Monday toBack={this.toBack}/>}
                {this.state.wednesday && <Wednesday toBack={this.toBack}/>}
                {this.state.friday && <Friday toBack={this.toBack}/>}
            </div>
        )
    }
}

export default Layout;