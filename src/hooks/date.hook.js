import {useState, useCallback, useContext} from 'react'
import moment from 'moment';

export const useDate = (time)  => {

  const offset = new Date(time).getTimezoneOffset();

  const setQueueTime = useCallback( dbdate => {
    console.log(dbdate)
    const date = moment(dbdate).utc(offset).format('MMM. DD YYYY')
    console.log(date)
    return date
  })

  const setMemberTime = useCallback( dbdate => { //todo - edit
    console.log(dbdate)
    const date = moment(dbdate).format('MMM.DD HH:ss')
    console.log(date)
    return date
  })

  function setServerTime() {
    const date = moment(time).utc()

    console.log(date)
    return date
  }


  return {
    setQueueTime, setMemberTime, setServerTime
  }
  
};