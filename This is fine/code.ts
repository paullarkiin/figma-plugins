

const componentKey = "7ed30f8986ec156f183fcd7225ec793960b00f67"
figma.importComponentByKeyAsync(componentKey).then((component) => {
    const nodes:SceneNode[] = [];

    const newComponent = component.createInstance();
    nodes.push(newComponent);
    figma.viewport.scrollAndZoomIntoView(nodes);
    figma.notify("Component created")
    figma.closePlugin();

});
