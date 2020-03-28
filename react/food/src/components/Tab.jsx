import { TabBar } from 'antd-mobile';
import React, { Component } from 'react'

import home from 'assets/home.png'
import homeActive from 'assets/home-active.png'
import category from 'assets/category.png'
import categoryActive from 'assets/category-active.png'
import map from 'assets/map.png'
import mapActive from 'assets/map-active.png'
import mine from 'assets/mine.png'
import mineActive from 'assets/mine-active.png'


export default class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      hidden: false,
      fullScreen: false,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    );
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: '100vh' }}>
        <TabBar
          unselectedTintColor="#333"
          tintColor="#F85757"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="美食大全"
            key="home"
            icon={<div style={{
              width: '25px',
              height: '25px',
              background: `url(${home}) center center /  25px 25px no-repeat`}}
            />
            }
            selectedIcon={<div style={{
              width: '25px',
              height: '25px',
              background: `url(${homeActive}) center center /  25px 25px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<div style={{
              width: '21px',
              height: '21px',
              background: `url(${category}) center center /  21px 21px no-repeat`}}
            />
            }
            selectedIcon={<div style={{
              width: '21px',
              height: '21px',
              background: `url(${categoryActive}) center center /  21px 21px no-repeat` }}
            />
            }
            title="分类"
            key="category"
            selected={this.state.selectedTab === 'category'}
            onPress={() => {
              this.setState({
                selectedTab: 'category',
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<div style={{
              width: '25px',
              height: '25px',
              background: `url(${map}) center center /  25px 25px no-repeat`}}
            />
            }
            selectedIcon={<div style={{
              width: '25px',
              height: '25px',
              background: `url(${mapActive}) center center /  25px 25px no-repeat` }}
            />
            }
            title="美食地图"
            key="map"
            selected={this.state.selectedTab === 'map'}
            onPress={() => {
              this.setState({
                selectedTab: 'map',
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: mineActive}}
            selectedIcon={{ uri: mine}}
            title="我的"
            key="mine"
            selected={this.state.selectedTab === 'mine'}
            onPress={() => {
              this.setState({
                selectedTab: 'mine',
              });
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
