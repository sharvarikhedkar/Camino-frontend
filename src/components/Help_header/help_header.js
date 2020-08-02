import React, { Component, useState } from 'react';
import './help_header.css';
import { faPhone, faComments} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Help_header extends React.Component{

    constructor(){
        super();
        
        this.state={
            text_to_show: "Help",
            showHelp: true
        }
    }

    render(){
        return (
            <div>
                <div style={{width:'100%'}} className = "header">
                    <div class="wrap">
                        <div class="links">

                            <button 
                            onClick = {() => this.setState({ showHelp : !this.state.showHelp})} 
                            className="help_btn" 
                            style={{float:'right'}}>
                            Help</button> 

                        </div>
                    </div>
                </div>

                {this.state.showHelp 
                ?  <p></p>
                : <div>
                    <div className="helpText">
                        <table className="my_table">

                            <tr>
                                <td colspan="2">Need help? Call or chat with us directly.</td>
                            </tr>
    
                            <tr>
                                <td style={{ alignContent:'center'}}>                        
                                    <button 
                                    className="inner_button" 
                                    style={{float:'right'}}>
                                      <FontAwesomeIcon icon={faPhone} />CALL</button>
                                </td>
                                <td>
                                    <button
                                    className="inner_button" 
                                    style={{float:'right'}}>
                                    <FontAwesomeIcon icon={faComments} /> EMAIL</button>
                                </td>
                            </tr>
                    </table>
                    </div>
                   </div>
                }
                </div>         
        )
    }
}

export default Help_header;