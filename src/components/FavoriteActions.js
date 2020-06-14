import React from 'react';
import {Button} from "reactstrap";

const FavoriteActions = (props) => {
    return (
        <div>
            {
                props.getStatus(props.id) ?
                    <Button disabled={props.favoriyeEkle} color="danger" onClick={() => {props.toggle(props.id)}}>Favorilerden Cikar</Button>
                    : <Button disabled={props.favoriyeEkle} color="primary" onClick={() => {props.toggle(props.id)}}>Favoriye Ekle</Button>
        }
        </div>
    );
};

export default FavoriteActions;
