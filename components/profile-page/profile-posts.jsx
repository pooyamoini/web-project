import React, { Component } from 'react'
import styled from "styled-components";
import {Menu as Me, Container} from 'semantic-ui-react'

const Menu = styled(Me)`
    color: white !important;
    border-top: none !important;
    border-right: none !important;
    border-left: none !important;
    border-color: rgb(102, 102, 102) !important;
`;

const MenuItem = styled(Menu.Item)`
`;

export default class ProfilePosts extends Component {
    constructor(props){
        super(props);
        this.state = {activeSection: 'your posts'}
    }

    handleItemClick = (e, { name }) => this.setState({ activeSection: name })

    render() {
        const { activeSection } = this.state

        return (
            <Container textAlign = 'center' style={{
                width: '70%;',
                "margin": '5px auto !important;'
            }}> 
                <Menu inverted borderless pointing secondary compact width={2} size='massive' >                        
                    <MenuItem
                        name='your posts'
                        active={activeSection == 'your posts'}
                        onClick={this.handleItemClick}
                    />
                    <MenuItem
                        name='followed posts'
                        active={activeSection == 'followed posts'}      
                        onClick={this.handleItemClick}
                    />
                </Menu>
            </Container>
        )
    }
}
