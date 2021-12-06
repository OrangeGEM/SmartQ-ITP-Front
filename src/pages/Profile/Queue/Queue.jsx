import React, { useState } from 'react';

import { LeftContainer, RightContainer, LeftItem, ItemDescription, CountDescription, TitleText, ItemKeyText, ItemDescriptionText, Icon, ItemIcon, RowContainer, RightItem, DescriptionText } from '../styled';

import group from '../../../images/profile/group.svg';
import key from '../../../images/profile/key.svg';
import arrow from '../../../images/profile/arrow.svg';
import deleteI from '../../../images/profile/delete.svg';

export default function Queue({queues, setQueues, members, setMembers}) {
    const [currentMember, setCurrentMember] = useState(null)
    console.log('function:', members)


    function handleSelect(i) {
        if(!queues[i].wrap) {
            let tempQueue = [...queues];
            for(let i = 0; i < tempQueue.length; i++) {
                tempQueue[i].wrap = false;
            }
            tempQueue[i].wrap = true;
            setMembers(tempQueue[i].units);
            setQueues(tempQueue);
        } else {
            console.log('already open')
        }
    }

    function handleDelete(obj, id) {
        debugger;
        const newObj = obj.filter( (item) => { return item.id !== id } )
        setMembers(newObj);
        console.log('handle:', members)
    }
    
    // DRAG //
    function DragOverHandler(e) {
        e.preventDefault();
    }

    function DragLeaveHandler(e) {

    }

    function DragStartHandler(e, obj) {
        setCurrentMember(obj)
    }

    function DragEndHandler(e) {

    }

    function DropHandler(e, obj) {
        e.preventDefault();
        const currentIndex = members.indexOf(currentMember);
        members.splice(currentIndex, 1);
        const dropIndex = members.indexOf(obj)
        console.log(dropIndex);
        members.splice(dropIndex, 0, currentMember);
        setMembers( members.map( i => {
            return i;
        }));
    }


    return (
        <>
            <LeftContainer>
                {   
                    queues ? queues.map((obj, i) => {
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
                                        <TitleText style={{"margin":"0"}}> {members.length} </TitleText>
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
                    }) : <></>
                }
            </LeftContainer>

            <RightContainer>      
                {
                    members ? members.map( (obj, i) => {
                        return (
                            <RightItem 
                                style={i % 2 ? {"background":"#F1F3F8"}:{"background":"#E6EBF5"}} 
                                draggable="true"
                                onDragOver={ (e)=> { DragOverHandler(e) } }
                                onDragLeave={ (e)=> { DragLeaveHandler(e) } }
                                onDragStart={ (e)=> { DragStartHandler(e, obj) } }
                                onDragEnd={ (e)=> { DragEndHandler(e) } }
                                onDrop={ (e)=> { DropHandler(e, obj) } }
                                name="rightItem"

                            >
                                <DescriptionText style={{"marginLeft":"30px"}}> {obj.id} </DescriptionText>
                                <DescriptionText> {obj.ticket} </DescriptionText>
                                <DescriptionText> {obj.phone} </DescriptionText>
                                <RowContainer>
                                    <DescriptionText> {obj.time} </DescriptionText>
                                    <ItemIcon src={deleteI} style={{"marginLeft":"20px", "paddingRight":"20px"}} onClick={ () => { handleDelete(members, obj.id) } }/>
                                </RowContainer>
                            </RightItem>
                        )
                    }) : <></>
                }
            </RightContainer>
        </>
    );
}