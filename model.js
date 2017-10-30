const nextDay = inputDayString => {
  const _nextDay = new Date(inputDayString)
  _nextDay.setDate(_nextDay.getDate() + 1)

  return `${_nextDay.getMonth() +
    1}/${_nextDay.getDate()}/${_nextDay.getFullYear()}`
}

const isToday = dateString => {
  const today = new Date()
  const date = new Date(dateString)
  return today.toDateString() === date.toDateString()
}

const toCSV = _data => {
  const data = JSON.parse(_data)
  let csvString = ''

  for (var i = 0; i < data.length; i++) {
    csvString += data[i].join(',') + '\n'
  }

  return csvString
}

const fillData = submittedDate => data => {
  $('table#MainContent_GridView1 tbody tr:not(.PagerStyle)').each(function() {
    let row = []
    $(this)
      .find('td')
      .each(function(index) {
        index === 0
          ? row.push(submittedDate)
          : row.push($.trim($(this).text()).replace(/,/g, ' '))
      })
    row.length ? data.push(row) : []
  })
  return data
}
