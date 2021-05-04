type DataFormat = {
  date: string
  month: string
}

function getDate(): DataFormat {
  return {
    date: "",
    month: "",
  }
}

export { getDate }
