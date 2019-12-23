import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }
  handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };
  render() {
    const { toggle, onSave } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Yapılacak Görev </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="title">Başlık</Label>
              <Input
                type="text"
                name="title"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Görev Başlığı gir"
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Tanım</Label>
              <Input
                type="text"
                name="description"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                placeholder="Görev Tanımı gir"
              />
            </FormGroup>
            <FormGroup check>
              <Label for="completed">
                <Input
                  type="checkbox"
                  name="completed"
                  checked={this.state.activeItem.completed}
                  onChange={this.handleChange}
                />
                Tamamlandı
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Kaydet
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}