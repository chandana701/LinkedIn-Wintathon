import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
const images = [{ src: require('../../assets/img/code/1.png') }, { src: require('../../assets/img/code/2.png') }];

export default class Component extends React.Component {
  state = { modalIsOpen: true };
  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  };
  render() {
    const { modalIsOpen } = this.state;

    return (
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={this.toggleModal}>
            <Carousel views={images} />
          </Modal>
        ) : null}
      </ModalGateway>
    );
  }
}