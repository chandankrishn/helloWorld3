import { _decorator, Component, Node, Sprite, Vec3, Prefab, instantiate, ScrollView } from "cc";
const { ccclass, property } = _decorator;

@ccclass("handleButtonClick")
export class handleButtonClick extends Component {
  @property({ type: Node })
  removeChildren: Node = null;

  @property({ type: Prefab })
  contentPrefab: Prefab = null;

  start() {
    for (let index = 0; index <= 10; index++) {
      let node = instantiate(this.contentPrefab);
      this.node.getComponent(ScrollView).content.addChild(node);
    }
  }

  getChildrenCount() {
    console.log("total children", this.removeChildren.children);
  }
  BtnCb(event, data) {
    let child = this.removeChildren.children[0].destroy();
    console.log("child", this.removeChildren.children);
    console.log("total Count", this.removeChildren.children);
  }

  update(deltaTime: number) {}
}
