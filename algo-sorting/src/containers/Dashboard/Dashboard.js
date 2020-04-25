import React, { Component } from "react";

import GithubCorner from "react-github-corners";
import VerticalBar from "../../components/VerticalBar/VerticalBar";

import insertionSort from "../../algorithms/insertionSort";
import bubbleSort from "../../algorithms/bubbleSort";
import mergeSort from "../../algorithms/mergeSort";

import "react-github-corners/dist/GithubCorner.css";

import "./Dashboard.css";

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            generatedNumbers: [],
            renderedVerticalBars: [],
            arrLenght: 80,
            arrMinValue: 5,
            arrMaxValue: 100,
            enableButtons: true,
        };
    }

    componentDidMount() {
        this.generateNumbers();
    }

    insertionSort = async () => {
        this.setState({ enableButtons: false });
        const { generatedNumbers } = this.state;
        insertionSort(generatedNumbers).then((animations, err) => {
            if (err) {
                // todo: popup an error
            }

            this.animateSorting(animations);
        });
    };

    bubblesort = () => {
        this.setState({ enableButtons: false });
        const { generatedNumbers } = this.state;
        bubbleSort(generatedNumbers).then((animations, err) => {
            if (err) {
                // todo: popup an error
            }

            this.animateSorting(animations);
        });
    };

    mergeSort = async () => {
        this.setState({ enableButtons: false });
        const { generatedNumbers } = this.state;
        const loc = [...generatedNumbers];
        const anim = await mergeSort(loc);
        console.log("merge", loc);
        console.log("anim", anim);

        this.animateMerge(anim);
    };

    animateSorting = async (animations) => {
        const { generatedNumbers } = this.state;

        for (let i = 0; i < animations.length; i += 1) {
            await this.delay(10);

            const { type, first, second, sortedByIndex } = animations[i];
            if (type === "comparison") {
                this.renderGuiBars(type, first, second);
            } else {
                const tmp = generatedNumbers[second];
                generatedNumbers[second] = generatedNumbers[first];
                generatedNumbers[first] = tmp;
                console.log(sortedByIndex);
                this.renderGuiBars(type, first, second, sortedByIndex);
            }
        }
        this.setState({ enableButtons: true });
    };

    renderGuiBars = (type, first, second, sortedByIndex) => {
        const { generatedNumbers } = this.state;
        let { renderedVerticalBars } = this.state;

        if (type === "comparison") {
            renderedVerticalBars = generatedNumbers.map((val, idx) => {
                if (idx === first || idx === second) {
                    return (
                        // Render vertical bar with a different color for indicating a comparison between the two elemnts
                        <VerticalBar key={idx} value={val} type="selected" />
                    );
                }
                if (idx >= sortedByIndex) {
                    return (
                        // this part of array is sorted (bubblesort)
                        <VerticalBar key={idx} value={val} type="sorted" />
                    );
                }
                // render as normal
                return <VerticalBar key={idx} value={val} />;
            });
        } else {
            renderedVerticalBars = generatedNumbers.map((val, idx) => {
                if (idx === first || idx === second) {
                    return (
                        // Render vertical bar with a different color for indicating a comparison between the two elemnts
                        <VerticalBar key={idx} value={val} type="swapped" />
                    );
                }
                if (idx >= sortedByIndex) {
                    return (
                        // this part of array is sorted (bubblesort)
                        <VerticalBar key={idx} value={val} type="sorted" />
                    );
                }
                // render as normal
                return <VerticalBar key={idx} value={val} />;
            });
        }

        this.setState({
            renderedVerticalBars,
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

    generateBarsMerge = (pos, newVal) => {
        const { generatedNumbers } = this.state;
        let { renderedVerticalBars } = this.state;

        renderedVerticalBars = generatedNumbers.map((val, idx) => {
            if (idx === pos) {
                return <VerticalBar key={idx} value={newVal} type="selected" />;
            }
            return <VerticalBar key={idx} value={val} />;
        });

        this.setState({
            renderedVerticalBars,
        });
    };

    getRand = (min, max) => {
        // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
        return Math.floor(Math.random() * (max - min) + min);
    };

    delay = (ms) => new Promise((res) => setTimeout(res, ms));

    animateMerge = async (animations) => {
        const { generatedNumbers } = this.state;

        for (let i = 0; i < animations.length; i += 1) {
            await this.delay(0);
            const { val, pos } = animations[i];
            generatedNumbers[pos] = val;
            this.generateBarsMerge(pos, val);
        }
        this.setState({ enableButtons: true });
    };

    render() {
        return (
            <>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        {this.state.enableButtons ? (
                            <div>
                                <button
                                    className="btnGenerate"
                                    type="button"
                                    onClick={this.generateNumbers}
                                >
                                    Generate Array
                                </button>
                                <button
                                    type="button"
                                    className="btnSort"
                                    onClick={this.insertionSort}
                                >
                                    Insertion Sort
                                </button>
                                <button
                                    type="button"
                                    className="btnSort"
                                    onClick={this.bubblesort}
                                >
                                    Bubble Sort
                                </button>
                                <button
                                    type="button"
                                    className="btnSort"
                                    onClick={this.mergeSort}
                                >
                                    Merge Sort
                                </button>
                            </div>
                        ) : (
                            <div>
                                <button
                                    className="btnGenerate"
                                    type="button"
                                    onClick={this.generateNumbers}
                                    disabled
                                >
                                    Generate Array
                                </button>
                                <button
                                    type="button"
                                    className="btnSort"
                                    onClick={this.insertionSort}
                                    disabled
                                >
                                    Insertion Sort
                                </button>
                                <button
                                    type="button"
                                    className="btnSort"
                                    onClick={this.bubblesort}
                                    disabled
                                >
                                    Bubble Sort
                                </button>
                                <button
                                    type="button"
                                    className="btnSort"
                                    onClick={this.mergeSort}
                                    disabled
                                >
                                    Merge Sort
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div
                    className="container fixed-bottom"
                    style={{ marginBottom: "100px" }}
                >
                    <div className="d-flex flex-row align-items-end justify-content-center">
                        {this.state.renderedVerticalBars}
                    </div>
                </div>

                <GithubCorner url="https://github.com/Xiryl" />
            </>
        );
    }
}

export default Dashboard;
