import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout, Menu } from "antd";
import { Select } from "antd";
import { Button } from "antd";
const { Header, Content, Footer } = Layout;
const Option = Select.Option;

class App extends Component {
  handleChange = value => {
    console.log(`selected ${value}`);
  };

  handleBlur = () => {
    console.log("blur");
  };

  handleFocus = () => {
    console.log("focus");
  };

  render() {
    return (
      <Layout className="App">
        <div style={{ height: 24, background: "#fff" }} />
        <Header style={{ background: "#fff", height: "88px" }}>
          <Menu
            theme="light"
            mode="horizontal"
            className="App-Header"
            defaultSelectedKeys={["home"]}
            style={{ lineHeight: "88px" }}
          >
            <Menu.Item key="home">
              <img src={logo} className="App-logo" alt="logo" />
              <span>Home</span>
            </Menu.Item>
            <Menu.Item key="claim">Claim</Menu.Item>
            <Menu.Item key="about">About</Menu.Item>
          </Menu>
        </Header>
        <Content>
          <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
            <h1 className="App-title">Squirrel</h1>
            <h1 className="App-intro">
              We will cover your tuition <br /> if you fail your course
            </h1>
            <p className="App-subtitle">ACADEMIC SUCCESS INSURANCE</p>
            <Select
              showSearch
              className="App-search"
              placeholder="Find your University"
              size="large"
              optionFilterProp="children"
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              filterOption={(input, option) =>
                option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="uiuc" style={{ height: '44px', lineHeight: '32px' }}>
                University of Illinois at Urbana-Champaign
              </Option>
            </Select>
            <div>
              <Button type="primary" icon="search" size="large" style={{ width: 200, height: 54, marginBottom: 64}}>
                Quote Now
              </Button>
            </div>
          </div>
          <div style={{ padding: 24, minHeight: 280 }} />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Squirrel Insurance Inc. ©2018
        </Footer>
      </Layout>
    );
  }
}

export default App;
