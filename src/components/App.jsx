import React from 'react';
import '../styles/bootstrap.scss';
import '../styles/App.scss';

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            args: props.args
        }

    }

    componentDidMount() {
        // console.log(this.state.args)
    }

    render() {
        return (
            <div>
                <div className={"container"}>
                    <h1 className={"page-title"}>React Standalone Web Application</h1>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className={'card'}>
                                <div className="card-body">{this.state.args.argument1}</div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={'card'}>
                                <div className="card-body">{this.state.args.argument2}</div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={'card'}>
                                <div className="card-body">
                                    {this.state.args.argument3}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default App;