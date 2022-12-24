import React, {Componet} from "react";

export default class AppClass extends Componet{
    constructor(props){
        super(props);
        this.state = {counter: 0};
        this.handClick = this.handleClick.bind(this);

    }

    handClick
}
