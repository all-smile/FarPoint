import { observable, action } from 'mobx';

// 整个 RootStore(包括里面的属性和方法) 全都挂载到 组件实例的 props 上了 - this.props.RootStore
class RootStore {
  // es7 装饰器语法，增加功能  通过  Object.defineProperty 实现
  @observable
  name = "悟空"

  // 行为
  @action
  changeName(name) {
    console.log('action==', this);
    this.name = name
  }
}

export default new RootStore()