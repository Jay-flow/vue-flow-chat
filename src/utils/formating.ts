type DataFormat = {
  year: number
  month: number
  date: number
  day: number
  hours: number
  minutes: number
  seconds: number
}

function getNowDate(): DataFormat {
  const now = new Date(Date.now())

  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    date: now.getDate(),
    day: now.getDay(),
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  }
}

export { getNowDate }
