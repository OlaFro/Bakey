import React, {useState} from "react"


export default function ListViewCafe(props) {
    const {cafeName} = props.props;
    return (
        <div>
            a delicious cake from {cafeName}
        </div>
    )
}