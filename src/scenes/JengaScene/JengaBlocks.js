import React, {Component} from 'react';
import Immutable, {Range} from 'immutable';
import {shapes, Material, systems} from 'akkad';

import JengaBlock from './JengaBlock';

const {Box} = shapes;
const {Color} = systems;

const pieces = Range(1, 10)
                    .groupBy(n => n % 3)
                    .map((arr, arrIndex) => {
                        return arrIndex % 2
                                   ? arr.map((n, i) => [0, (arrIndex * -0.7), i + (i * 0.04)])
                                   : arr.map((n, i) => [i - 1, (arrIndex * -0.7), i]);
                    })
                    .toList()

class JengaBlocks extends Component {
    render() {
        const blocks = pieces
                            /* Generate blocks */
                           .map((v, i) => {
                               return v.map( (f, j) => (
                                   <JengaBlock
                                        key={`jenga-block-${i}-${j}`}
                                        position={f}
                                        rotation={(i + 1) % 2 ? [0, 0, 0] : [0, 1.57, 0]}
                                   />
                               ));
                           });

        return (
            <div>
                {blocks.flatten()}
            </div>
        );
    }
}

export default JengaBlocks;
