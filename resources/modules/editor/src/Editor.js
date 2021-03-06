import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";

import Modules from "./js/classes/Modules";
import WidgetsPanel from "./js/components/WidgetsPanel";
import SettingsPanel from "./js/components/SettingsPanel";
import EditorWindow from "./js/components/EditorWindow";
import HistoryPanel from "./js/components/HistoryPanel";
import UpdateButton from "./js/components/UpdateButton";
import { CONSTANTS } from "./js/helpers";
import { stopDrag } from "./js/store/element-drag/actions";
import AssetsBrowser from "./js/classes/modules/AssetsBrowser";

import store from "../src/js/store/store";

import "./sass/editor-style.scss";

import DesktopIcon from "./svgs/desktop.svg";
import Logo from "./svgs/logo.svg";
import Navigation from "./svgs/navigation.svg";
import History from "./svgs/history.svg";
import Preview from "./svgs/preview.svg";
import Settings from "./svgs/settings.svg";
import Dots from "./svgs/dots.svg";
import Hamburger from "./svgs/hamburger.svg";
/**
 * Главный класс редактора.<br/>
 * Реакт-Компонент.<br/>
 * Синглтон, который хранится в глобальной переменной altrpEditor.
 *
 * */
class Editor extends Component {
  /**
   * @constructor
   * */
  constructor(props) {
    super(props);
    window.altrpEditor = this;
    this.state = {
      activePanel: 'widgets',
      // activePanel: "settings",
      templateStatus: CONSTANTS.TEMPLATE_UPDATED,
    };
    this.openPageSettings = this.openPageSettings.bind(this);
    this.showSettingsPanel = this.showSettingsPanel.bind(this);
    this.showWidgetsPanel = this.showWidgetsPanel.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    store.subscribe(this.templateStatus.bind(this));
  }
  /**
   * Метод подписчик на изменение состояния Редактора из Редакс хранилища
   * */
  templateStatus() {
    let templateStatus = store.getState().templateStatus.status;
    if (templateStatus !== this.state.templateStatus) {
      this.setState({ ...this.state, templateStatus });
    }
  }

  /**
   * Инициализация модулей
   */

  initModules() {
    this.modules = new Modules(this);
    this.modules.loaded();
  }

  /**
   * Показывает панель со списком виджетов
   */
  showWidgetsPanel() {
    this.setState({
      ...this.state,
      activePanel: "widgets",
    });
  }

  /**
   * Показывает панель с настройками текущего виджета
   */
  showSettingsPanel() {
    this.setState({
      ...this.state,
      activePanel: "settings",
    });
  }

  /**
   * Обработчик события конец переноса вызывает метод stopDrag переносимого элемента
   * @see ElementWrapper.stopDrag
   */
  onDragEnd() {
    let draggableElement = store.getState().elementDrag.element;
    if (draggableElement && draggableElement.stopDrag) {
      draggableElement.stopDrag();
    }
    store.dispatch(stopDrag());
  }
  /**
   * Вызывается после загрузки шаблона
   * @see {@link SaveImportModule}
   * */
  endLoading() {
    console.log("editor loaded");
  }

  /**
   * Вызывается после загрузки компонента
   * @see {@link https://ru.reactjs.org/docs/react-component.html#componentdidmount}
   * */
  componentDidMount() {
    this.initModules();
  }

  /**
   * Выбирает корневой элемент текущим и открывает панель настроек
   */

  openPageSettings() {
    this.modules.templateDataStorage.setCurrentRootElement();
    this.showSettingsPanel();
  }

  /**
   * Отрисовка Компонента
   */
  render() {
    let settingsActive = "";
    let templateClasses = "editor ";
    if (this.state.templateStatus === CONSTANTS.TEMPLATE_SAVING) {
      templateClasses += " editor_saving";
    }
    if (
      store.getState().currentElement.currentElement.getType &&
      store.getState().currentElement.currentElement.getType() ===
        "root-element" &&
      this.state.activePanel === "settings"
    ) {
      settingsActive = " active";
    }

    return (
      <Provider store={store}>
        <div className={templateClasses} onDragEnd={this.onDragEnd}>
          <div className="left-panel">
            <div className="editor-top-panel">
              <button
                className="btn btn_hamburger"
                // onClick={this.showSettingsPanel}
              >
                <Hamburger className="icon" />
              </button>
              <div className="logo">
                <Logo viewBox="0 0 97 35" />
              </div>
              <button className="btn btn_dots" onClick={this.showWidgetsPanel}>
                <Dots className="icon" />
              </button>
            </div>
            <div className="left-panel-main">
              {this.state.activePanel === "widgets" && <WidgetsPanel />}
              {this.state.activePanel === "settings" && <SettingsPanel />}
            </div>
            <div className="editor-bottom-panel d-flex align-content-center justify-center">
              <button
                className={"btn btn_settings" + settingsActive}
                onClick={this.openPageSettings}
              >
                <Settings className="icon" />
              </button>
              <button className="btn ">
                <Navigation className="icon" />
              </button>
              <button className="btn ">
                <History className="icon" />
              </button>
              <button className="btn ">
                <DesktopIcon className="icon" />
              </button>
              <button className="btn ">
                <Preview className="icon" />
              </button>
              <UpdateButton />
            </div>
          </div>
          <div className="right-panel">
            <EditorWindow />
          </div>
        </div>
        <AssetsBrowser />
      </Provider>
    );
  }
}

/**
 * Если разработка то включается HMR <br/>
 * По умолчанию просто компонент
 * @member _export
 */
let _export;
if (process.env.NODE_ENV === "production") {
  _export = Editor;
} else {
  _export = hot(module)(Editor);
}

export default _export;
