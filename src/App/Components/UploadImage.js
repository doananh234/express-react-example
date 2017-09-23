import React, { Component, PropTypes } from 'react'
import Dropzone from 'react-dropzone'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCancel from 'material-ui/svg-icons/content/clear';

require("babel-polyfill");
export default class Accept extends Component {
  constructor() {
    super()
    this.state = {
      file: null
    }
    this.cancelImg = this.cancelImg.bind(this);
  }

  async onDrop(files) {
    this.setState({
      file: files[0]
    });
    this.props.select && this.props.select(files[0]);
     let data = await fetch('http:google.com/');
     console.log(data)
  }

  cancelImg() {
    this.setState({file: null});
    this.props.select && this.props.select(null);
  }

  render() {
    console.log(this.state.file);
    return (
          <Dropzone style={styles.container} onDrop={this.onDrop.bind(this)}>
            <img style={styles.img} src={this.state.file?this.state.file.preview:"https://elovequotes.com/assets/images/default-thumbnail.jpg"} />
            {this.state.file && <FloatingActionButton onTouchTap={() => {this.cancelImg()}} mini={true} secondary={true}  style={styles.iconCancel}>
                          <ContentCancel/>
                        </FloatingActionButton>}
            {!this.state.file && <div style={styles.blur}><p>select image</p></div>}
          </Dropzone>
    );
  }
}

const styles = {
  container: {
    width: '150px',
    height: '150px',
    position: 'relative'
  },
  blur: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    'display': '-webkit-flex',
    'display': 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  iconCancel: {
    position: 'absolute',
    right: -15,
    top: -15
  },
  img: {
    width: '150px',
    height: '150px'
  }
}
