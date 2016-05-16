import React, {Component, PropTypes} from 'react';
import {shapes, Material, systems} from 'akkad';

const {Box} = shapes;
const {Color, Position, Rotation, PhysicsState} = systems;

class JengaBlock extends Component {
    static propTypes = {
        position: PropTypes.arrayOf(PropTypes.number),
        rotation: PropTypes.arrayOf(PropTypes.number)
    };

    static defaultProps = {
        rotation: [0, 0, 0]
    };

    render() {
        const {position, rotation} = this.props;

        return (
            <Box width={3} height={0.6} updatable>
                <Rotation axis={rotation} />
                <Position vector={position} />
                <PhysicsState mass={3} />
                <Material>
                    <Color color={[0.2, 0.5, 1.7]} />
                </Material>
            </Box>
        );
    }
}

export default JengaBlock;
