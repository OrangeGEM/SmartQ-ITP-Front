import React, { useState } from 'react';

import { LeftContainer, RightContainer, LeftItem, ItemDescription, CountDescription, TitleText, ItemKeyText, ItemDescriptionText, Icon, ItemIcon, RowContainer, RightItem, DescriptionText } from '../styled';

import group from '../../../images/profile/group.svg';
import key from '../../../images/profile/key.svg';
import arrow from '../../../images/profile/arrow.svg';
import deleteI from '../../../images/profile/delete.svg';

export default function Queue(props) {
    const data = props.queue;
    console.log(data);
    const [queue, setQueue] = useState(data);
    const [selected, setSelected] = useState();

    function handleSelect(i) {
        if(!queue[i].wrap) {
            let tempQueue = [...queue];
            for(let i = 0; i < tempQueue.length; i++) {
                tempQueue[i].wrap = false;
            }
            tempQueue[i].wrap = true;
            setSelected(tempQueue[i].units);
            setQueue(tempQueue);
        } else {
            console.log('already open')
        }
    }

    return (
        <>
            <LeftContainer>
                {   
                    queue ? queue.map((obj, i) => {
                        return(obj.wrap ? (
                            <LeftItem  onClick={()=>{handleSelect(i)}}>
                                <ItemDescription>
                                    <TitleText style={{"marginRight":"0px", "marginBottom":"15px"}}> {obj.title} </TitleText>
                                    <RowContainer style={{"alignItems":"center", "marginBottom":"5px"}}>
                                        <ItemIcon src={key} style={{"width":"11px", "height":"11px"}}/>
                                        <ItemKeyText> {obj.key} </ItemKeyText>
                                    </RowContainer>
                                    <ItemDescriptionText> {obj.desc} </ItemDescriptionText>
                                </ItemDescription>
                                <CountDescription>                                        
                                    <RowContainer style={{"justifyContent":"end", "marginBottom":"15px"}}>
                                        <ItemIcon src={group} />
                                        <TitleText style={{"margin":"0"}}> {obj.units.length} </TitleText>
                                    </RowContainer>
                                    <ItemDescriptionText> {obj.time} </ItemDescriptionText>
                                </CountDescription>
                            </LeftItem>
                        ) : (
                            <LeftItem onClick={()=>{handleSelect(i)}} style={{"justifyContent":"space-between"}}>
                                <TitleText> {obj.title} </TitleText>
                                <ItemIcon src={arrow}/>
                            </LeftItem>
                        ))
                    }) : <div> Nothing </div>
                }
            </LeftContainer>

            <RightContainer>      
                {
                    selected ? selected.map( (obj, i) => {
                        return (
                            <RightItem style={i % 2 ? {"background":"#F1F3F8"}:{"background":"#E6EBF5"}}>
                                <DescriptionText style={{"marginLeft":"30px"}}> {obj.id} </DescriptionText>
                                <DescriptionText> {obj.ticket} </DescriptionText>
                                <DescriptionText> {obj.phone} </DescriptionText>
                                <RowContainer>
                                    <DescriptionText> {obj.time} </DescriptionText>
                                    <ItemIcon src={deleteI} style={{"marginLeft":"20px", "paddingRight":"20px"}} />
                                </RowContainer>
                            </RightItem>
                        )
                    }) : <div> Nothing </div>
                }
            </RightContainer>
        </>
    );
}