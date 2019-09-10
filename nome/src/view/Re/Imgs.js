import React, { Component } from 'react';

import { Carousel, WingBlank } from 'antd-mobile';

class Imgs extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 106,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log()}
          afterChange={index =>console.log()}
        >
          {this.state.data.map(val => (
            <div
              key={val}
              
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top', height: this.state.imgHeight }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </div>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

export default Imgs;