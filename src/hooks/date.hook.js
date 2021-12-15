export const useDate = (time)  => {
  //console.log(time)
  const locale = 'en';
  const today = new Date(time)

  const month = today.toLocaleDateString(locale, { month: "short" })
  const day = today.getDate();
  const year = today.getFullYear();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  
  const clock = !(hours - 11 < 0) ? `${hours - 12}:${minutes} PM` : `${hours}:${minutes} AM`; 
  console.log(clock)
  return {
    month,
    day,
    year,
    clock
  }
  
};