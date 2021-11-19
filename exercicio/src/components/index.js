import React, { Component } from "react";

export default class OlaMundo extends Component{

    constructor(props){
        super(props)
        this.tech = "Olá mundo React"
        this.compli = "componente de classe"
    }

    render(){
        return(
            <div style={styles.div}>
                <h1 style={styles.content}>{this.tech}</h1>
                <p style={styles.content.p}>Esse é meu {this.compli} :b</p>
            </div>
        );
    }
}

const styles = {
    div: {
        width: "40vw",
        background: "#47C4AE",
        height: "200px",
        margin: "auto",
        borderRadius: "20px"
    },

    content:{
        textAlign: "center",
        paddingTop: "15px",
        textDecoration: "underline",
        p:{
            textAlign: "center",
            marginTop: "40px"
        }
    }
}