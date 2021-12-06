export const useDate = ()  => {
    const locale = 'en';
    const today = new Date();
    
    const month = today.toLocaleDateString('en', { month: "short" })
    const day = today.toLocaleDateString('en', { day: "numeric" })
    const year = today.toLocaleDateString('en', { year: "numeric" })

    return {
      month,
      day,
      year
    };
  };