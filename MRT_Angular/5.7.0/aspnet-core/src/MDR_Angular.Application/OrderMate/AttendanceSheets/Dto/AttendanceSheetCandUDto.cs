﻿using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.AttendanceSheets
{
    [AutoMapFrom(typeof(AttendanceSheet))]
    [AutoMapTo(typeof(AttendanceSheet))]
    public class AttendanceSheetCandUDto
    {
        public DateTime ClockInDateTime { get; set; }
        public DateTime ClockOutDateTime { get; set; }
        public int? EmployeeIdFk { get; set; }
    }
}
