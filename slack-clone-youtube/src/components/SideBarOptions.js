import React from 'react'
import styled from 'styled-components';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

function SideBarOptions({ Icon, title, addChannelOption, id }) {


    const addChannel = () => {
        const channelName = prompt("Please enter the channel name")

        if (channelName) {
            db.collection("rooms").add({
                name: channelName,
            })
        }

    }

    const selectChannel = () => {

    }

    return (
        <SideBarOptionContainer
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SideBarOptionChannel>
                    <span>#</span> {title}
                </SideBarOptionChannel>
            )}
        </SideBarOptionContainer>
    )
}

export default SideBarOptions;

const SideBarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;

  :hover {
      opacity: 0.9;
      background-color: #340e36;
  }

  > h3 {
      font-weight: 500;
  }

> h3 > span {
    padding: 15px;
}

`

const SideBarOptionChannel = styled.h3`
padding: 10px 0;
font-weight: 300;
`
