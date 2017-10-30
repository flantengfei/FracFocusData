$(function() {
	
  const startDataCapture = _  => { 

	  const datePickerValue = $('#MainContent_tbRangeStartDate').val()
	  const fillDataWithSubmittedDate = fillData(datePickerValue)

	  // read data
	  localStorage.FracFocusData = JSON.stringify(
		fillDataWithSubmittedDate(JSON.parse(localStorage.FracFocusData))
	  )
	  // update date picker
	  $('#MainContent_tbRangeStartDate').val(nextDay(datePickerValue))

	  if (isToday(datePickerValue)) {
		// export data
		console.log(toCSV(localStorage.FracFocusData))
		localStorage.FracFocusDataInprogress = "false"
	  } else {
		// refresh page
		$('#MainContent_btnSearch').trigger('click')
	  }
  }
  
  localStorage.FracFocusDataInprogress = "true" ? startDataCapture() : ""
  
  
  $(document).on("click", "#startCaptureData", function() {
	  localStorage.FracFocusData = JSON.stringify([])
	  startDataCapture()
	  localStorage.FracFocusDataInprogress = "true"
  })
  
    $(document).on("click", "#stopCaptureData", function() {
	  console.log(toCSV(localStorage.FracFocusData))
	  localStorage.FracFocusDataInprogress = "false"
  })
  
  
  $("body").prepend(`<div style="width: 100%; text-align: center; height: 15px; background-color:lightblue
                "><a href="#" id="startCaptureData" style="font-size: 12px">Start</a>
				&nbsp;&nbsp;&nbsp;
				<a href="#" id="stopCaptureData" style="font-size: 12px">Stop</a></div>`)
})
