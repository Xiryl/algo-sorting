import React, { Component } from "react";

import VerticalBar from "../../components/VerticalBar/VerticalBar";

import insertionSort from "../../algorithms/insertionSort";
import bubbleSort from "../../algorithms/bubbleSort";

import "./Dashboard.css";

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            generatedNumbers: [],
            renderedVerticalBars: [],
            animations: [],
            arrLenght: 70,
            arrMinValue: 5,
            arrMaxValue: 100,
        };
    }

    insertionSort = async () => {
        const { generatedNumbers } = this.state;
        insertionSort(generatedNumbers).then((animations, err) => {
            if (err) {
                // todo: popup an error
            }

            this.setState(
                {
                    animations,
                },
                () => this.animate()
            );
        });
    };

    bubblesort = () => {
        const { generatedNumbers } = this.state;
        bubbleSort(generatedNumbers).then((animations, err) => {
            if (err) {
                // todo: popup an error
            }

            this.setState(
                {
                    animations,
                },
                () => this.animate()
            );
        });
    };

    generateNumbers = () => {
        const { arrLenght, arrMaxValue, arrMinValue } = this.state;
        const val = [];

        for (let i = 0; i <= arrLenght; i += 1) {
            val.push(this.getRand(arrMinValue, arrMaxValue));
        }

        this.setState(
            {
                generatedNumbers: val,
            },
            () => this.generateBars()
        );
    };

    generateBars = (swapA, swapB, idxSorted) => {
        const { generatedNumbers } = this.state;
        let { renderedVerticalBars } = this.state;

        if (swapA && swapB) {
            renderedVerticalBars = generatedNumbers.map((val, idx) => {
                if (idx === swapA || idx === swapB) {
                    return (
                        <VerticalBar key={idx} value={val} type="selected" />
                    );
                }
                if (idx > idxSorted) {
                    return <VerticalBar key={idx} value={val} type="sorted" />;
                }
                return <VerticalBar key={idx} value={val} />;
            });
        } else {
            renderedVerticalBars = generatedNumbers.map((val, idx) => {
                return <VerticalBar key={idx} value={val} />;
            });
        }

        this.setState({
            renderedVerticalBars,
        });
    };

    getRand = (min, max) => {
        // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
        return Math.floor(Math.random() * (max - min) + min);
    };

    delay = (ms) => new Promise((res) => setTimeout(res, ms));

    animate = async () => {
        const { animations, generatedNumbers } = this.state;

        for (let i = 0; i < animations.length; i += 1) {
            await this.delay(0);
            const { a, b, key, idxSorted } = animations[i];
            generatedNumbers[a] = generatedNumbers[b];
            generatedNumbers[b] = key;
            this.generateBars(a, b, idxSorted);
        }
    };

    render() {
        return (
            <>
                <div className="container">
                    <button type="button" onClick={this.generateNumbers}>
                        Generate
                    </button>
                    <button type="button" onClick={this.insertionSort}>
                        Insertion Sort
                    </button>
                    <button type="button" onClick={this.bubblesort}>
                        Bubble Sort
                    </button>
                </div>
                <div
                    className="container fixed-bottom"
                    style={{ marginBottom: "100px" }}
                >
                    <div className="d-flex flex-row align-items-end justify-content-center">
                        {this.state.renderedVerticalBars}
                    </div>
                </div>
            </>
        );
    }
}

export default Dashboard;
