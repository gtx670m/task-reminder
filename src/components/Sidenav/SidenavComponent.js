import React, { Component } from 'react';
import { SideNav, SideNavItem, Icon } from 'react-materialize';
import './SidenavComponent.scss';
import CollapsibleComponent from '../Collapsible/CollapsibleComponent'
class SidenavComponent extends Component {
    render() {
        return (
            <div id='side_nav'>
                <SideNav
                    trigger={<a className="button-collapse" href="" data-activates="sidenav_0">
                        <i className="material-icons">view_headline</i>
                    </a>}
                    options={{ closeOnClick: false }}
                >          
                        <div className="user">
                            <div className="medly_img">
                                <img src="/medly.png" alt="??" width="64px" height="64px" />
                            </div>
                            <div>
                                <p><b>Le Ho Quang</b></p>
                                <p>quang.le@terralogic.com</p>
                                <p>(admin)</p>
                            </div>
                        </div>
                    
                    <SideNavItem><Icon>view_quilt</Icon>Dashboard</SideNavItem>
                    <SideNavItem><CollapsibleComponent /></SideNavItem>
                </SideNav>
            </div>
        );
    }
}

export default SidenavComponent;
