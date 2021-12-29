import {useState, useCallback, useContext} from 'react'
import moment from 'moment';

export const useDate = (time)  => {

  const offset = new Date(time).getTimezoneOffset();

  const setQueueTime = useCallback( dbdate => {
    const date = moment(dbdate).utc(offset).format('MMM. DD YYYY')
    return date
  })

  const setMemberTime = useCallback( dbdate => {
    const date = moment(dbdate).format('MMM.DD HH:ss')
    return date
  })

  function setServerTime() {
    const date = moment(time).utc()
    return date
  }


  return {
    setQueueTime, setMemberTime, setServerTime
  }
  
};