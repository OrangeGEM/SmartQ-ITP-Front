import React, { useEffect, useState } from 'react';

import { ActionText, LeftContainer, RightContainer, LeftItem, ItemDescription, CountDescription, TitleText, ItemKeyText, ItemDescriptionText, Icon, ItemIcon, RowContainer, RightItem, DescriptionText, ModalContent, ModalContainer } from '../styled';
import { useHttp } from '../../../hooks/http.hook'

import group from '../../../images/profile/group.svg';
import key from '../../../images/profile/key.svg';
import arrow from '../../../images/profile/arrow.svg';
import deleteI from '../../../images/profile/delete.svg';
import settings from '../../../images/profile/queueSettings.svg'
import add from '../../../images/profile/add.png';

export default function Queue({setActiveId, queues, setQueues, members, setMembers, setOptions, setModalActive, setActiveMember}) {
    const [currentMember, setCurrentMember] = useState(null)
    const { request } = useHttp();

    function handleSelect(i) {
        if(!queues[i].wrap) {
            let tempQueue = [...queues];
            for(let i = 0; i < tempQueue.length; i++) {
                tempQueue[i].wrap = false;
            }
            tempQueue[i].wrap = true;
            setActiveId(tempQueue[i]);
            setMembers(tempQueue[i].units);
            setQueues(tempQueue);
        }
    }

    async function handleDelete(obj, id) {
        try {
            const queueId = queues.filter( (item) => { return item.wrap == true } )[0]._id;
            const newObj = obj.filter( (item) => { return item.id !== id } )

            const data =  await request(`${process.env.REACT_APP_API_URL}/api/profile/updatemembers`, 'POST', { id: queueId, units: newObj });
            console.log( data )

            setMembers(newObj);
        } catch(e) {

        }
    }
    
 
    async function editQueue(queue, i) {
        console.log(queue, i)
        setOptions({
            title : queue.title,
            key: queue.key,
            desc: queue.desc,
            _id: queue._id,
            modalTitle: 'Edit queue', 
            submitButtonValue: 'DELETE',
            middleButtonValue: 'EDIT'
        });
        setModalActive(true);
    }

       // DRAG&DROP //
    function DragOverHandler(e) {
        e.preventDefault();
    }

    function DragStartHandler(e, obj) {
        setCurrentMember(obj)
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
                                    <Icon src={settings} style={{width:"20px", height: "20px", "marginBottom":"20px"}} onClick={ () => editQueue(obj, i) }/>
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
                                onDragStart={ (e)=> { DragStartHandler(e, obj) } }
                                onDrop={ (e)=> { DropHandler(e, obj) } }
                                name="rightItem">

                                <DescriptionText style={{"marginLeft":"30px"}}> {obj.id} </DescriptionText>
                                <DescriptionText> {obj.ticket} </DescriptionText>
                                <DescriptionText> {obj.phone} </DescriptionText>
                                <RowContainer>
                                    <DescriptionText> {obj.time} </DescriptionText>
                                    <ItemIcon src={deleteI} style={{"marginLeft":"20px", "paddingRight":"20px"}} onClick={ () => { handleDelete(members, obj.id) } }/>
                                    <ItemIcon src={settings} style={{"marginLeft":"20px", "paddingRight":"20px"}} onClick={ () => { handleDelete(members, obj.id) } }/>
                                </RowContainer>
                            </RightItem>
                        )
                    }) : <></>
                }
                {
                    queues.find((item) => { return item.wrap === true }) ? (
                        <RowContainer style={{"justifyContent":"flex-end"}}>
                            <ActionText onClick={() => { setActiveMember(true) }}> ADD NEW MEMBER </ActionText>
                            <Icon src={add} style={{'width':'20px', 'height':'20px', 'marginLeft':'15px', "cursor":"pointer"}} onClick={() => { setActiveMember(true) }}/>
                        </RowContainer>
                    ) : <></>
                }

            </RightContainer>
        </>
    );
}