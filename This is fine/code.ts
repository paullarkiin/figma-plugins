

const componentKey = "7ed30f8986ec156f183fcd7225ec793960b00f67"
figma.importComponentByKeyAsync(componentKey).then((component) => {
    const nodes:SceneNode[] = [];

    const newComponent = component.createInstance();

    const center = figma.viewport.center;
    newComponent.x = center.x - (newComponent.width / 2);
    newComponent.y = center.y - (newComponent.height / 2);

    nodes.push(newComponent);
    figma.notify("Component created")
    figma.closePlugin();

});
