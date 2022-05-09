import React from 'react';
import $ from 'jquery';

export default class BTCTracker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            price: 0,
            lastFetch: ""
        }
    }

    componentDidMount() {
        this.fetch();
    }

    fetch() {
        var context = this;

        window.setTimeout(function () {
            $.ajax({
                url: "https://api.coinbase.com/v2/prices/BTC-USD/buy",
                dataType: "json",
                method: "GET",
                success: function (response) {
                    context.setState({
                        price: response.data.amount
                    });
                }
            });
        }, 3000);
    }

    render() {
        return (
            <div>
                @ {this.state.price}
            </div>
        );
    }
}