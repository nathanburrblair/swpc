import React, { Component } from "react";
import Axios from "axios";
import ContainerCard from "../ContainerCard/ContainerCard"
import "./ContainerCategories.css";
import Dropzone from "react-dropzone";

//For dropzone image preview
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  marginTop: 16
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box"
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden"
};

const img = {
  display: "block",
  width: "auto",
  height: "100%"
};

const baseStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: 200,
  height: 200,
  borderWidth: 1,
  borderColor: "#666",
  borderStyle: "dashed",
  borderRadius: 2,
  marginTop: 20,
  marginBottom: 40
};
const activeStyle = {
  borderStyle: "solid",
  borderColor: "#6c6",
  backgroundColor: "#eee"
};
const rejectStyle = {
  borderStyle: "solid",
  borderColor: "#c66",
  backgroundColor: "#eee"
};
//end dropzone image preview

class ContainerCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      containerProducts: [],
      addToggle: false,
      containerName: "",
      containerPrice: 0,
      containerDescription: "",
      containerCategory: this.props.match.params.category,
      category: null,
      containerPicture: "",
      files: []
    };

    this.handleAddContainer = this.handleAddContainer.bind(this);
    this.handleContainerName = this.handleContainerName.bind(this);
    this.handleContainerPrice = this.handleContainerPrice.bind(this);
    this.handleContainerDescription = this.handleContainerDescription.bind(this);
    this.handleAddContainerToDB = this.handleAddContainerToDB.bind(this);
  }
  componentDidMount() {
    Axios.get(`/api/containers/${this.props.match.params.category}`).then(
      response => {
        this.setState({
          containerProducts: response.data
        });
      }
    );
  }

  handleAddContainer() {
    this.setState({
      addToggle: true
    });
  }

  handleContainerName(e) {
    this.setState({
      containerName: e.target.value
    });
  }

  handleContainerPrice(e) {
    this.setState({
      containerPrice: e.target.value
    });
  }

  handleContainerDescription(e) {
    this.setState({
      containerDescription: e.target.value
    });
  }

  handleAddContainerToDB() {
    Axios.post(`/api/containers/${this.props.match.params.category}`, {
      name: this.state.containerName,
      price: this.state.containerPrice,
      product_description: this.state.containerDescription,
      product_category: this.state.containerCategory,
      product_image: this.state.containerPicture
    }).then(response => {
      this.props.history.push(`/containers/${this.props.match.params.category}`);
      window.location.reload();
    });
  }

  handleUploadImages = files => {
    const {
      REACT_APP_CLOUDINARY_URL,
      REACT_APP_CLOUDINARY_API,
      REACT_APP_CLOUDINARY_PRESET
    } = process.env;

    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("tags", "moss, medium, gist");
    formData.append("upload_preset", `${REACT_APP_CLOUDINARY_PRESET}`);
    formData.append("api_key", `${REACT_APP_CLOUDINARY_API}`);
    formData.append("timestamp", (Date.now() / 1000) | 0);

    Axios.post(`${REACT_APP_CLOUDINARY_URL}`, formData).then(res => {
      this.setState({
        containerPicture: res.data.secure_url,
        files: files.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      });
    });
  };

  componentWillUnmount() {
    // Make sure to revoke the data uris to avoid memory leaks
    this.state.files.forEach(file => URL.revokeObjectURL(file.preview));
  }

  render() {
    console.log("match params", this.props.match.params);

    const { files } = this.state;
    
    const thumbs = files.map(file => (
      <div style={thumb} key={file.name}>
        <div style={thumbInner}>
          <img src={file.preview} style={img} alt="" />
        </div>
      </div>
    ));
    
    let listOfContainerThings = this.state.containerProducts.map((product, i) => {
      return <ContainerCard key={i} product={product} />;
    });
    
    return (
      <div className="mainBody">
        <div className="categories_content_container">
          <div className="category_intro">
            <h1>
              {this.props.match.params.category.charAt(0).toUpperCase() +
                this.props.match.params.category.slice(1) +
                "S"}{" "}
              You'll Love
            </h1>
            <p>
              This is an intro paragraph that says what amazing containers we have
              at our store. It encourages you to browse and buy containers.
            </p>
          </div>
          <div className="list">{listOfContainerThings}</div>
          {/* <div className="add_container">
            {this.state.addToggle ? (
              <div>
                <input
                  onChange={this.handleContainerName}
                  placeholder="Container Name"
                  type="text"
                />
                <input
                  onChange={this.handleContainerPrice}
                  placeholder="Price"
                  type="text"
                />
                <input
                  onChange={this.handleContainerDescription}
                  placeholder="Description"
                  type="text"
                />

                <Dropzone
                  onDrop={this.handleUploadImages}
                  multiple
                  accept="image/*"
                >
                  {({
                    getRootProps,
                    getInputProps,
                    isDragActive,
                    isDragAccept,
                    isDragReject
                  }) => {
                    let styles = { ...baseStyle };
                    styles = isDragActive
                      ? { ...styles, ...activeStyle }
                      : styles;
                    styles = isDragReject
                      ? { ...styles, ...rejectStyle }
                      : styles;

                    return (
                      <div className="dragbox">
                        <div
                          className="inner_box"
                          {...getRootProps()}
                          style={styles}
                        >
                          <input {...getInputProps()} />
                          <div>
                            {isDragAccept ? "Drop" : "Drag"} files here...
                          </div>
                          {isDragReject && <div>Unsupported file type...</div>}
                          <aside style={thumbsContainer}>{thumbs}</aside>
                        </div>
                      </div>
                    );
                  }}
                </Dropzone>

                <button onClick={this.handleAddContainerToDB}>Add Container</button>
              </div>
            ) : (
              <button
                className="add_container_button"
                onClick={this.handleAddContainer}
              >
                Add A Container
              </button>
            )}
          </div> */}
        </div>
      </div>
    );
  }
}

export default ContainerCategories;
