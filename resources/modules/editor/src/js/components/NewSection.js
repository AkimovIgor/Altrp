import React, {Component} from "react";
import PlusIcon from '../../svgs/plus.svg'
import FolderIcon from '../../svgs/folder.svg'
import DropTarget from "./DropTarget";

class NewSection extends Component {

  onDragOver(e) {
    // console.log(e);
    e.preventDefault();
  }

  onDragEnter(e) {
    // console.log(e);
    e.preventDefault();
  }

  onDrop(e) {
    // console.log(e);
    // console.log(e.target);
    /**
     * @member {HTMLElement} target
     * */
    let target = e.target;
    console.log(e.screenX);
    console.log(target.parentElement);
    e.preventDefault();

    return false;
  }

  render() {
    return <div className="new-section"
                onDragOver={this.onDragOver}
                onDragEnter={this.onDragEnter}
                onDrop={this.onDrop} data-element-type="new-section">
        <div className="new-section-buttons d-flex">
          <button draggable="true" className="new-section__button new-section__button_add d-flex "><PlusIcon/></button>
          <button className="new-section__button new-section__button_library d-flex"><FolderIcon/></button>
        </div>
        <div className="new-section__text">Drag widget here</div>
      </div>
  }
}

export default NewSection