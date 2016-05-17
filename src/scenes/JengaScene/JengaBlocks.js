import React, {Component} from 'react';
import Immutable, {Range} from 'immutable';
import {shapes, Material, systems} from 'akkad';

import JengaBlock from './JengaBlock';

const {Box} = shapes;
const {Color} = systems;

const pieces = Range(0, 12)
                    .groupBy(n => n % 4)
                    .map((arr, arrIndex) => {
                        return arr.map((val, i) => {
                            const position = arrIndex % 2
                                                 ? [0, 0, i * 1.1]
                                                 : [i - 1, 1, 1]
                            const rotation = arrIndex % 2
                                                 ? [0, 0, 0]
                                                 : [0, 1.55, 0]
                            return {
                                position, rotation
                            }
                        })
                    })
                    .toList()
                    .flatten();

class JengaBlocks extends Component {
    render() {


        return (
            <div>
                {pieces.map((v, i) => <JengaBlock key={`jenga-block-${i}`} {...v} />)}
            </div>
        );
    }
}

export default JengaBlocks;
