import React, { PureComponent } from "react";

import ChecksumAddress from "../../components/checksum-addresses/ChecksumAddress";
import Modal from "../../../../../renderer/components/modal/Modal";
import CopyButton from "./CopyButton";

export default class KeyModal extends PureComponent {
  render() {
    return (
      <Modal className="KeyModal">
        <header>
          <h4>ACCOUNT INFORMATION</h4>
        </header>

        <section>
          <dl>
            <dt>ACCOUNT ADDRESS</dt>
            <dt className="keymodal">
              <ChecksumAddress address={this.props.accountAddress} />
              <CopyButton text={this.props.accountAddress} /> 
            </dt>
          </dl>
          <dl>
            <dt>PRIVATE KEY</dt>
            <dd>
              <dd  className="keymodal">
              {this.props.privateKey}
              <CopyButton text={this.props.privateKey} /> 
              </dd>
              <br />
              <p className="danger">
                Do not use this private key on a public blockchain; use it for
                development purposes only!
              </p>
            </dd>
          </dl>
          <footer>
            <button onClick={this.props.onCloseModal}>DONE</button>
          </footer>
        </section>
      </Modal>
    );
  }
}
