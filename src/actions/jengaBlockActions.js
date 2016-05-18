const jengaBlockActions = {
    mouseOverBlock(state, actions, evt, meshID, triggerID) {
        const scene = state().get('entities').find(e => e.get('type') === 'scene').get('entity');
        const box = state().getIn(['entities', meshID, 'entity']);
        const {pointerX, pointerY} = evt;

        const pickResult = scene.pick(pointerX, pointerY);
        console.log(pickResult, box.subMeshes);
        return state();
    }
}

export default jengaBlockActions;
