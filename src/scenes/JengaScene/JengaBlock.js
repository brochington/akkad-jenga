import React, {Component, PropTypes} from 'react';
import {shapes, Material, systems} from 'akkad';

const {Box} = shapes;
const {Color, Position, Rotation, Trigger, PhysicsState, SubMesh} = systems;

class JengaBlock extends Component {
    static propTypes = {
        position: PropTypes.arrayOf(PropTypes.number),
        rotation: PropTypes.arrayOf(PropTypes.number)
    };

    static defaultProps = {
        rotation: [0, 0, 0]
    };

    static contextTypes = {
        actions: PropTypes.object
    }

    state = {
        wireframe: false
    }

    clickBlock = () => {
        console.log('clicked a box!!!');
    }

    mouseOverBlock = (evt, meshID, triggerID) => {
        this.context.actions.mouseOverBlock(evt, meshID, triggerID);
        // this.setState({wireframe: true})
    }

    mouseOutBlock = () => {
        // console.log('mouseOutBlock');
        // this.setState({wireframe: false})
    }

    render() {
        const {position, rotation} = this.props;
        return (
            <Box width={3} height={0.6} updatable>
                <Rotation axis={rotation} />
                <Position vector={position} />
                <PhysicsState mass={10} />
                <Trigger
                    onClick={this.clickBlock}
                    onMouseOver={this.mouseOverBlock}
                    onMouseOut={this.mouseOutBlock}
                />
                <SubMesh />
                <Material>
                    <Color color={[0.2, 0.5, 1.7]} />
                </Material>

            </Box>
        );
    }
}

export default JengaBlock;
