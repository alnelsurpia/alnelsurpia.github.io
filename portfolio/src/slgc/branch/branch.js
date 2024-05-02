import React, { useState } from 'react';
import './branch.css';
import { useNavigate } from "react-router-dom";

function Branch(props) {
    let history = useNavigate();
    return (
        <div class="branch_canvas">
            <div class="branch_header">
            {props.name}
            </div>
        </div>
    )
}

export default Branch
